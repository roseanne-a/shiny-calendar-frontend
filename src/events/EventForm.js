function EventForm({ eventData, setEventData, handleSubmit }) {
  const handleChange = ({ target }) => {
    setEventData({
      ...eventData,
      [target.name]: target.value,
    });
  };

  //make sure end date is after start date
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group d-flex flex-column justify-content-center">
        <label htmlFor="event_name">
          Event name:
          <input
            id="event_name"
            type="text"
            name="event_name"
            onChange={handleChange}
            value={eventData.event_name}
            required
            className="form-control"
          />
        </label>
        <br />
        <label htmlFor="event_start_date">
          Start Date:
          <input
            id="event_start_date"
            type="date"
            name="event_start_date"
            onChange={handleChange}
            value={eventData.event_start_date}
            required
            className="form-control"
          />
        </label>
        <br />
        <label htmlFor="event_end_date">
          End Date:
          <input
            id="event_end_date"
            type="date"
            name="event_end_date"
            onChange={handleChange}
            value={eventData.event_end_date}
            required
            className="form-control"
          />
        </label>
        <br />
        <label htmlFor="event_recurring">
          Does this event occur at the same time every year? (If yes, you do not
          have to fill this form again. If no, please come back next year to
          fill out the form again.)
          <br />
          <input
            id="yes"
            type="radio"
            name="event_recurring"
            onChange={handleChange}
            value={"true"}
            required
          />
          <label htmlFor="no">Yes</label>
          <input
            id="no"
            type="radio"
            name="event_recurring"
            onChange={handleChange}
            value={"false"}
            required
          />
          <label htmlFor="no">No</label>
        </label>
        <br />
        <label htmlFor="event_organizer">
          Event Organizer(s) (Twitch, Youtube, Twitter etc. usernames):
          <input
            id="event_organizer"
            type="text"
            name="event_organizer"
            placeholder="Please separate names by a comma e.g. Dave, Mike, Carol"
            onChange={handleChange}
            value={eventData.event_organizer}
            required
            className="form-control"
          />
        </label>
        <br />
        <label htmlFor="event_organizer_contact">
          Event Tweet/Infographic:
          <input
            id="event_organizer_contact"
            type="text"
            name="event_organizer_contact"
            onChange={handleChange}
            value={eventData.event_organizer_contact}
            required
            className="form-control"
          />
        </label>
        <br />
        <label htmlFor="event_description">
          Description (What is your event about and include any other links or
          information):
          <textarea
            id="event_description"
            name="event_description"
            onChange={handleChange}
            value={eventData.event_description}
            required
            className="form-control"
            maxLength={5000}
            placeholder="max 5000 characters"
          />
        </label>
      </div>
      <br />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default EventForm;
