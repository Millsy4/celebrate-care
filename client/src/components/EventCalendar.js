import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Button from "@material-ui/core/Button";
import API from "../utils/API";

const localizer = momentLocalizer(moment);

export default function EventCalendar() {
  // state = {
  //   events: [
  //     {
  //       start: moment().toDate(),
  //       end: moment()
  //         .add(1, "days")
  //         .toDate(),
  //       title: "Some title"
  //     },
  //     {
  //       start: "2/11/2021",
  //       end: "2/12/2021",
  //       title: "Some title again :D"
  //     }
  //   ]
  // };
  // const [events, setEvents] = useState([]);
  const [events, setEvents] = useState([{
    start: moment().toDate(),
          end: moment()
            .add(1, "days")
            .toDate(),
          title: "Some title"
        },
        {
          start: "2021-02-15",
          end: "2021-02-20",
          title: "Some title again"
  }]);
  function loadEvents() {
    API.getEvents().then((res) => console.log(res));
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
