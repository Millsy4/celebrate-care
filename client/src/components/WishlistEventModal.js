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
import Form from '@material-ui/core/TextField';
import { useUserContext } from '../services/userContext';
import API from "../utils/API";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
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
}));

export default function WishlistEventModal() {
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

  const [formObject, setFormObject] = useState({
    details: '',
    eventStatus: 'wishlist',
    eventIdea: '',

  });

  function click(event) {
    handleFormSubmit(event);
    handleClose();
  }

  function handleFormSubmit(event) {
    let familycodeId = user.familycodeId[0];
    console.log(familycodeId)
    event.preventDefault();
    console.log(formObject);

    if (
      formObject.eventIdea &&
      formObject.details &&
      formObject.eventStatus
    ) {
      API.saveWishEvent(familycodeId, formObject)
        .catch((err) => console.log(err))

    }
  };
  return (
    <div>
      <Button size="small" color="primary" onClick={handleOpen}>
        <Icon>add_circle</Icon>
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
            <h2 id="transition-modal-title">Create a Wishlist Event</h2>
            <Form label="Event Name" id="Name" name="eventIdea"
              value={formObject.eventIdea}
              onChange={(e) => setFormObject({ ...formObject, eventIdea: e.target.value })}>

            </Form>
            <p></p>
            <Form label="Enter event details here"
              id="Details"
              name="details"
              value={formObject.details}
              onChange={(e) => setFormObject({ ...formObject, details: e.target.value })}>

            </Form>
            <p></p>
            <Button
              className={classes.button}
              size="small"
              variant="contained"
              type="button"
              onClick={click}
            >
              Create It!
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
