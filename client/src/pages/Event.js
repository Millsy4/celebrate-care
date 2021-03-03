import React, { useState } from "react";
import axios from "axios";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import { FormControl, InputLabel } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import API from "../utils/API";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function Event() {
  const [events, setEvents] = useState([]);
  const [selectedStartDate, setSelectedStartDate] = React.useState(
    new Date("2021-02-20")
  );
  const [selectedEndDate, setSelectedEndDate] = React.useState(
    new Date("2021-02-20")
  );
  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
  };
  const [formObject, setFormObject] = useState({
    familyCode: 101392,
    eventStatus: "",
    startDate: "",
  });

  function loadEvents() {
    API.getEvents().then((res) => console.log(res));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    formObject.startDate = selectedStartDate;
    formObject.endDate = selectedEndDate;
    event.preventDefault();
    console.log(formObject);
    if (
      formObject.eventIdea &&
      formObject.startDate &&
      formObject.endDate &&
      formObject.details &&
      formObject.familyCode &&
      formObject.eventStatus
    ) {
      API.saveEvent({
        eventIdea: formObject.eventIdea,
        startDate: formObject.startDate,
        endDate: formObject.endDate,
        details: formObject.details,
        eventStatus: formObject.eventStatus,
        familyCode: formObject.familyCode,
      })
        .then((res) => loadEvents())
        .catch((err) => console.log(err));
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
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedStartDate}
          onChange={handleStartDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedEndDate}
          onChange={handleEndDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
      <FormControl>
        <InputLabel htmlFor="detailsInput">Event Details</InputLabel>
        <Input
          id="detailsInput"
          aria-describedby="detailsInputHelper"
          name="details"
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <InputLabel id="eventStatusSelectLabel">Event Status</InputLabel>
        <Select
          labelId="eventStatusSelectLabel"
          id="eventStatusSelect"
          name="eventStatus"
          onChange={handleInputChange}
        >
          <MenuItem value={"wishlist"} name="wishlist">
            Wish List
          </MenuItem>
          <MenuItem value={"upcoming"} name="upcoming">
            Upcoming
          </MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleFormSubmit}>
        Submit Event
      </Button>
    </form>
  );
}
