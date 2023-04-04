import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createEvent } from "../utils/api";
import EventForm from "./EventForm";
import { isValidStartDate, isValidEndDate } from "../errors/isValidDate";
import classNames from "../utils/classNames";
import "./EventForm.css";

export default function Create() {
  const navigate = useNavigate();

  const initialFormState = {
    event_name: "",
    event_start_date: "",
    event_end_date: "",
    event_recurring: false,
    event_organizer: "",
    event_organizer_contact: "",
    event_description: "",
    approved: false,
  };
  const [newEvent, setNewEvent] = useState(initialFormState);

  const initialErrorState = {
    invalidStartDate: {
      isError: false,
      errorMessage:
        "Sorry, that date is not valid. Please use the calendar icon on the right. The year must be this year or later.",
    },
    invalidEndDate: {
      isError: false,
      errorMessage:
        "Sorry, that date is not valid. Please use the calendar icon on the right. The end date must be on or after the start date.",
    },
  };

  const [errors, setErrors] = useState({ ...initialErrorState });
  let errorExists = false;

  const handleSubmit = (event) => {
    event.preventDefault();
    errorExists = false;
    setErrors({ ...initialErrorState });

    const { event_start_date, event_end_date } = newEvent;

    if (!isValidStartDate(event_start_date)) {
      setErrors((errors) => {
        return {
          ...errors,
          invalidStartDate: { ...errors.invalidStartDate, isError: true },
        };
      });
      errorExists = true;
    }
    if (!isValidEndDate(event_start_date, event_end_date)) {
      setErrors((errors) => {
        return {
          ...errors,
          invalidEndDate: { ...errors.invalidEndDate, isError: true },
        };
      });
      errorExists = true;
    }
    if (!errorExists) {
      createEvent(newEvent)
        .then(setNewEvent({ ...initialFormState }))
        .then(navigate("/"))
        .then(
          alert(
            "Your event has been submitted. It will be reviewed and approved/denied. Check back later."
          )
        );
    }
  };

  return (
    <section className="mb-5 d-flex flex-column">
      <div className="container justify-content-center mt-3">
        <h1>Create Event</h1>
        <div className="requirement mb-2">All information is required.</div>
        {Object.keys(errors).map((key) => (
          <div
            className={classNames({
              "d-none": !errors[key].isError,
              alert: errors[key].isError,
              "alert-danger": errors[key].isError,
            })}
          >
            {errors[key].errorMessage}
          </div>
        ))}

        <EventForm
          eventData={newEvent}
          setEventData={setNewEvent}
          handleSubmit={handleSubmit}
        />
      </div>
    </section>
  );
}
