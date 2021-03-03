import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Swipedrawer from './SwipeDrawer';
import UpcomingModal from "../components/UpcomingModal";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useUserContext } from '../services/userContext';
import { useHistory } from 'react-router-dom';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#74A3AC',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {

    flexGrow: 1,
    color: "white",
  },
  link: {
    color: 'white',
    marginRight: theme.spacing(2),
    alignItems: 'flex-start'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const { user, setUser } = useUserContext();
  const history = useHistory();
  const calendarRoute = () => {
    let path = '/calendar';
    history.push(path, user);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <Typography variant="h5" className={classes.title}>
            Care Worth Celebrating
            </Typography>
          <Typography className={classes.link}>
            <Link className={classes.link} href='/dashboard'>Home</Link>
          </Typography>
          <Typography className={classes.link}>
            <Link className={classes.link} href='/calendar'>Calendar</Link>
          </Typography>

          <UpcomingModal />
          {/* <Swipedrawer /> */}

          <IconButton>
            <AccountCircle fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
