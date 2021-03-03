import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

export default function DatePickers() {
  const [selectedDate, handleDateChange] = useState(
    new Date("2021-02-20T00:00:00.000Z")
  );
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDateTimePicker
        variant="inline"
        ampm={false}
        value={selectedDate}
        onChange={handleDateChange}
        onError={console.log}
        // disablePast
        format="yyyy/MM/dd HH:mm"
      />
    </MuiPickersUtilsProvider>
  );
}
