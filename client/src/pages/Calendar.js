import React from "react";
import EventCalendar from "../components/EventCalendar";
import Header from "../components/Header";
import Container from "@material-ui/core/Container";
import Navbar from "../components/Navbar";
import { useUserContext } from "../services/userContext";
import Box from '@material-ui/core/Box';

export default function Calendar() {
  const { user, setUser } = useUserContext();
  return (
    <div>
      <Header />
      <Navbar />
      <Box pt={3}>
        <Container maxWidth="md">
          <EventCalendar />
        </Container>
      </Box>
    </div>
  );
}
