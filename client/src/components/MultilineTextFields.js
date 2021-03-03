import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();

  return (
    <TextField
      id="filled-multiline-static"
      label="Enter your event details here"
      multiline
      rows={8}
      variant="filled"
    />
  );
}
