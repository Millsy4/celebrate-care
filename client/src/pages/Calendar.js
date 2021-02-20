import React from "react";
import DatePickers from "../components/DatePickers";
import BasicGallery from "../components/BasicGallery";
import EventCalendar from "../components/EventCalendar";
import Header from "../components/Header"
import Container from '@material-ui/core/Container';

export default function Calendar() {
  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <EventCalendar />
      </Container>
      <BasicGallery />
      <BasicGallery />
    </div>
  );
}
