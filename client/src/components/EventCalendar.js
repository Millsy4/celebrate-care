import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import API from "../utils/API";
import { useUserContext } from "../services/userContext";

const localizer = momentLocalizer(moment);

export default function EventCalendar() {
  const { user, setUser } = useUserContext();
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    if (user.userId === "" && userId) {
      API.getUserInfo(userId).then(({ data }) => {
        console.log(data);
        const familycodes = data.Familyties.map(
          (relationship) => relationship.FamilycodeId
        );
        setUser({
          userId: data.id,
          familycodeId: familycodes,
        });
      });
    }
    loadUpcomingEvents();
  }, [user]);

  function loadUpcomingEvents() {
    console.group(user);
    let eventStatus = "upcoming";
    let familycodeId = user.familycodeId[0];
    API.getFamilyUpcomingEvents(familycodeId, eventStatus)
      .then((res) => {
        console.log(res.data);
        let unvalidatedEvents = res.data;
        const validatedEvents = [];
        unvalidatedEvents.forEach((event) => {
          const validEvent = {
            title: event.eventIdea,
            start: event.startDate,
            end: event.endDate,
          };
          validatedEvents.push(validEvent);
        });
        setUpcomingEvents(...upcomingEvents, validatedEvents);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={upcomingEvents}
        style={{ height: "100vh" }}
      />
    </div>
  );
}
