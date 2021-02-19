import React from "react";
import DatePickers from "../components/DatePickers";
import BasicGallery from "../components/BasicGallery";
import EventCalendar from "../components/EventCalendar";

export default function Calendar() {
  return (
    <div>
      <EventCalendar />
      <DatePickers />
      <BasicGallery />
      <BasicGallery />
    </div>
  );
}
