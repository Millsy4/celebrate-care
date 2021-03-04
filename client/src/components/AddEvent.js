import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './AddEvent.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      backgroundColor: '#BF4031',
      color: 'white'

    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="add-icon">
      <Fab color="#BF4031" aria-label="add">
        <AddIcon className={classes.root} />
      </Fab>
    </div>
  );
}
