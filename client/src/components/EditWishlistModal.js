import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useUserContext } from "../services/userContext";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Input from "@material-ui/core/Input";
import { FormControl, InputLabel } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import API from "../utils/API";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    marginRight: theme.spacing(1),
    justify: "center",
    alignItems: "center",
    background: "#3D6D6F",
    color: "white",
  },
  closebutton: {
    position: "relative",
    right: -180,
    background: "#9e9e9e",
    color: "white",
  },
  icon: {
    color: '#BF4031'
  }
}));

export default function EditWishlistModal(props) {
  const classes = useStyles();
  const { user, setUser } = useUserContext();
  const [open, setOpen] = React.useState(false);
  const [formObject, setFormObject] = useState({
    eventId: 0,
  });
  const [selectedStartDate, setSelectedStartDate] = React.useState(
    new Date("2021-03-04")
  );
  const [selectedEndDate, setSelectedEndDate] = React.useState(
    new Date("2021-03-05")
  );

  const handleOpen = (event) => {
    let target = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute(
      "eventid"
    );
    console.log(target);
    setFormObject({ ...formObject, eventId: target });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log(formObject);
    let familycodeId = user.familycodeId[0];
    formObject.eventStatus = "upcoming";
    formObject.startDate = selectedStartDate;
    formObject.endDate = selectedEndDate;
    API.editWishlistEvents(familycodeId, formObject).then((res) => {
      console.log(formObject);
    });
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
  };

  return (
    <div>
      <Button size="small" onClick={handleOpen}>
        <Icon className={classes.icon}>add_circle</Icon>
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Button
              className={classes.closebutton}
              size="small"
              variant="contained"
              type="button"
              onClick={handleClose}
            >
              X
            </Button>
            <p></p>
            <h2 id="transition-modal-title">Schedule Wishlist Event</h2>
            <FormControl>
              <InputLabel htmlFor="eventIdeaInput">Event Idea</InputLabel>
              <Input
                id="eventIdeaInput"
                aria-describedby="eventIdeaInputHelper"
                name="eventIdea"
                onChange={handleInputChange}
              />
              <FormHelperText id="eventIdeaInputHelper"></FormHelperText>
            </FormControl>
            <p></p>
            <FormControl>
              <InputLabel htmlFor="detailsInput">Event Details</InputLabel>
              <Input
                id="detailsInput"
                aria-describedby="detailsInputHelper"
                name="details"
                onChange={handleInputChange}
              />
            </FormControl>
            <p></p>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Start Date:"
                value={selectedStartDate}
                onChange={handleStartDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <p></p>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="End Date:"
                value={selectedEndDate}
                onChange={handleEndDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
            <p></p>
            <Button
              className={classes.button}
              size="small"
              variant="contained"
              type="button"
              onClick={handleSubmit}
            >
              Schedule It!
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
