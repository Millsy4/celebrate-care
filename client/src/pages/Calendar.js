import React from "react";
import EventCalendar from "../components/EventCalendar";
import Header from "../components/Header";
import Container from "@material-ui/core/Container";
import Navbar from "../components/Navbar";
import { useUserContext } from "../services/userContext";

export default function Calendar() {
  const { user, setUser } = useUserContext();
  return (
    <div>
      <Header />
      <Navbar />
      <Container maxWidth="md">
        <EventCalendar />
      </Container>
    </div>
  );
}
