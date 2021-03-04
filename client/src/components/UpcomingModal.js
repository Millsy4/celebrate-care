import AddEventIcon from './AddEvent';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import UpcomingEventModal from './UpcomingEventModal';
import WishEventModal from './WishlistEventModal';

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
    position: 'absolute',
    width: 300,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center',
  },
  button: {
    marginRight: theme.spacing(0),
    backgroundColor: theme.palette.background.paper,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: 150,
    borderColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
  },
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
      <h2 id="simple-modal-title">Create an Event</h2>
      <p id="simple-modal-description">Select event you wish to create</p>
      <button className={classes.button}>
        <UpcomingEventModal />
        <p>Upcoming Event</p>
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
      <div type="button" onClick={handleOpen}>
        <AddEventIcon />
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
