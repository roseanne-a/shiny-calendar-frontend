// import logo from './logo.svg';
import "./App.css";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import Row from "react-bootstrap/Row";
//import "react-calendar/dist/Calendar.css";

import Event from "./events/Event";
//import EventCarousel from "./EventCarousel";
import ErrorAlert from "../src/layout/ErrorAlert";
import { getEvents } from "./utils/api";

function App() {
  const [value, onChange] = useState(new Date());
  const [allEvents, setAllEvents] = useState([]);
  const [error, setError] = useState(null);

  let numberOfRows = 2;

  // const month = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];

  useEffect(() => {
    const abortController = new AbortController();
    let currentDate = value;

    getEvents(currentDate, abortController.signal)
      .then(setAllEvents)
      .catch(setError);

    return () => abortController.abort();
  }, [value]);

  // if (allEvents && allEvents.length > 0) {
  //   if (allEvents.length % 2 === 1) return "odd";
  //   else return "even";
  // }

  return (
    <>
      <div className="container mt-5 mb-5">
        {/* <EventCarousel /> */}
        <div className="d-flex justify-content-center mt-5">
          <Calendar
            className="react-calendar"
            onChange={onChange}
            value={value}
          />
        </div>

        {allEvents && allEvents.length > 0 ? (
          <Row xs={1} md={numberOfRows} className="g-4 mt-5">
            {/* <div className="d-flex flex-row justify-content-evenly mt-5"> */}
            {allEvents.map((oneEvent) => (
              <Event key={oneEvent.event_id} event={oneEvent} />
            ))}
          </Row>
        ) : (
          <div style={{ textAlign: "center" }} className="mt-5">
            No Events
          </div>
        )}
        <ErrorAlert error={error} />
      </div>
    </>
  );
}

export default App;

//<a target="_blank" href="https://icons8.com/icon/rfkqAnUspAnn/sparkling">Sparkling</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
