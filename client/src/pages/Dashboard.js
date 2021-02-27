import React from "react";
import BasicGallery from "../components/BasicGallery";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Navbar from '../components/Navbar';
import { useUserContext } from '../services/userContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  heading: {
    flexStart: 2,
  }
}));
export default function Dashboard() {
  const { user, setUser } = useUserContext();
  const classes = useStyles();
  return (

    <div>
      <Grid container className={classes.root} xs={12}>
        <Header />
        <Navbar />
        <Grid container className={classes.heading} justify="flex-start 1">
          <h1> <font color="#EA7A57">Upcoming Events</font></h1>
        </Grid>
        <BasicGallery />
        <Grid container className={classes.heading}>
          <h1><font color="#EA7A57">Event Wishlist</font></h1>
        </Grid>
        <BasicGallery />
        <Grid container className={classes.heading}>
          <h1><font color="#EA7A57">Event Ideas</font></h1>
        </Grid>
        <BasicGallery />
        <Footer />
      </Grid>
    </div >

  );
}
