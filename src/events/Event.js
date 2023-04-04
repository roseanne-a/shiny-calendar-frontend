import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export default function Event({ event }) {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src="https://i.imgur.com/Jto69A7.jpg" />
        <Card.Body>
          <Card.Title>{event.event_name}</Card.Title>
          <Card.Text>
            {event.event_description} <br />
            {event.event_start_date} to {event.event_end_date}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    // <div className="d-flex flex-column">
    //    <div className="card p-2 flex-fill">
    //     <img
    //       style={{ width: "500px" }}
    //       src="https://i.imgur.com/Jto69A7.jpg"
    //       className="card-img-top"
    //       alt="..."
    //     />
    //     <div className="card-body text-wrap">
    //       <h5 className="card-title">{event.event_name}</h5>
    //       <p className="card-text">{event.event_description}</p>
    //     </div>
    //    </div>
    // </div>
  );
}
