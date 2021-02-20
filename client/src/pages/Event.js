import React, { useState } from "react";
import axios from "axios";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import { FormControl, InputLabel } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default function Event() {
  const [events, setEvents] = useState([]);
  const [formObject, setFormObject] = useState({
      eventIdea: "",
      startDate: 0,
      endDate: 0
  });

//   function loadEvents() {
//     API.getEvents().then((res) => console.log(res));
//   }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value});
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (
      formObject.eventIdea &&
      formObject.eventStartDate &&
      formObject.eventEndDate
    ) {
        // axios.post("/api/eventtable", {
        //     eventIdea: formObject.eventIdea,
        //         startDate: formObject.startDate,
        //         endDate: formObject.endDate
        // }).then((response) => {
        //     console.log(response);
        // })
        // axios({
        //     method: "post",
        //     url: "/api/eventtable",
        //     data: {
        //         eventIdea: formObject.eventIdea,
        //         startDate: formObject.startDate,
        //         endDate: formObject.endDate
        //     }
        // })
    // return axios.post("/api/eventtable", formObject)
      API.saveEvent({
        eventIdea: formObject.eventIdea,
        startDate: formObject.startDate,
        endDate: formObject.endDate,
      })
    }
  }

  return (
    <form>
      <FormControl>
        <InputLabel htmlFor="eventIdeaInput">Event Idea</InputLabel>
        <Input
          id="eventIdeaInput"
          aria-describedby="eventIdeaInputHelper"
          name="eventIdea"
          onChange={handleInputChange}
        />
        <FormHelperText id="eventIdeaInputHelper">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="startDateInput">Event Start Date</InputLabel>
        <Input
          id="startDateInput"
          aria-describedby="startDateInputHelper"
          name="startDate"
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="endDateInput">Event End Date</InputLabel>
        <Input
          id="endDateInput"
          aria-describedby="endDateInputHelper"
          name="endDate"
          onChange={handleInputChange}
        />
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleFormSubmit}>
        BUTTON
      </Button>
    </form>
  );
}
