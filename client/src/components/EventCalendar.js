import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Button from "@material-ui/core/Button";
import API from "../utils/API";

const localizer = momentLocalizer(moment);

export default function EventCalendar() {
  const [events, setEvents] = useState([
  ]);

  function loadEvents() {
  
      API.getEvents().then((res) => {
        console.log(res.data)
        let unvalidatedEvents = res.data;
        const validatedEvents = [];
        unvalidatedEvents.forEach(event => {
          const validEvent = {
            start: event.startDate,
            end: event.endDate,
            title: event.eventIdea,
          }
          validatedEvents.push(validEvent);
        })
        setEvents(...events, validatedEvents)
      }
    );

  }

  function editEvents(events) {

  }

  function handleSubmit(event) {
    event.preventDefault();
    loadEvents();
  }

  return (
    <div>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "100vh" }}
      />
      <Button onClick={handleSubmit}>TEST BUTTON</Button>
    </div>
  );
}
