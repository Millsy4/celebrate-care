import AddEventIcon from "./AddEvent";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import UpcomingEventModal from "./UpcomingEventModal";
import WishEventModal from "./WishlistEventModal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    boxShadow: '#74A3AC',
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
  },
  button: {
    marginRight: theme.spacing(0),
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: 100,
    borderColor: 'black',
    boxShadow: '#74A3AC',
  },
  icon: {
    color: '#BF4031',
  },
  h2: {
    font: '#3D6D6F'
  }
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 className={classes.h2} id="simple-modal-title">Create an Event</h2>
      <h4 id="simple-modal-description">What kind of event do you want to make?</h4>
      <button className={classes.button}>
        <UpcomingEventModal />
        <p fontColor="#3D6D6F">Upcoming Event</p>
      </button>
      <p></p>
      <button className={classes.button}>
        <WishEventModal />
        <p>Wish Event</p>
      </button>
    </div>
  );

  return (
    <div>
      <div className={classes.button} type="button" onClick={handleOpen}>
        <AddEventIcon className={classes.icon} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
