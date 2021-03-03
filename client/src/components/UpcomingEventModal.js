import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import BasicTextFields from './BasicTextFields';
import MultilineTextFields from './MultilineTextFields';
import DatePickers from './DatePickers';
import { useUserContext } from '../services/userContext';
import Form from '@material-ui/core/TextField';
import API from "../utils/API";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    marginRight: theme.spacing(1),
    justify: 'center',
    alignItems: 'center',
    background: '#3D6D6F',
    color: 'white',
  },
  icon: {
    color: '#BF4031',
  }
}));

export default function UpcomingEventModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { user, setUser } = useUserContext();
  const [events, setEvents] = useState([]);
  const [selectedStartDate, setSelectedStartDate] = React.useState(new Date('2021-02-20'))
  const [selectedEndDate, setSelectedEndDate] = React.useState(new Date('2021-02-20'));
  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
  }
  const [formObject, setFormObject] = useState({
    startDate: "",
    endDate: '',
    details: '',
    eventStatus: 'upcoming',
    eventIdea: '',

  });


  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({ ...formObject, [name]: value });
  // }

  function click(event) {
    handleFormSubmit(event);
    handleClose();
  }


  function handleFormSubmit(event) {
    formObject.startDate = selectedStartDate;
    formObject.endDate = selectedEndDate;
    let familycodeId = user.familycodeId[0];
    console.log(familycodeId)
    event.preventDefault();
    console.log(formObject);

    if (
      formObject.eventIdea &&
      formObject.startDate &&
      formObject.endDate &&
      formObject.details &&
      formObject.eventStatus
    ) {
      API.saveEvent(familycodeId, formObject)
        .catch((err) => console.log(err))

    }
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
        <form>
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Create an Upcoming Event</h2>
              <Form label="Event Name" id="Name" name="eventIdea"
                value={formObject.eventIdea}
                onChange={(e) => setFormObject({ ...formObject, eventIdea: e.target.value })}>
                {/* <BasicTextFields label="Event Name" id="Name" name="eventIdea"
                  value={formObject.eventIdea}
                  onChange={(e) => setFormObject({ ...setFormObject, eventIdea: e.target.value })} /> */}
              </Form>
              <p></p>
              <Form label="Enter event details here"
                id="Details"
                name="details"
                value={formObject.details}
                onChange={(e) => setFormObject({ ...formObject, details: e.target.value })}>
                {/* <MultilineTextFields
                  label="Enter event details here"
                  id="Details"
                  name="details"
                  value={formObject.details}
                  onChange={(e) => setFormObject({ ...setFormObject, details: e.target.value })}
                /> */}
              </Form>
              <p></p>

              <h4>Start Date</h4>
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
                <h4>End Date</h4>
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
              <p></p>
              <Button
                className={classes.button}
                size="small"
                variant="contained"
                type="button"
                onClick={click}
              >
                Schedule It!
              </Button>
            </div>
          </Fade>
        </form>
      </Modal>
    </div>
  );
}

