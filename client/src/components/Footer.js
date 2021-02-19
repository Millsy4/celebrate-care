import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core/SvgIcon";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import { Link, useLocation } from "react-router-dom";
import CreateEventModal from "./CreateEventModal"

const useStyles = makeStyles({
  media: {
    textAlign: "center",
    alignItems: "center",
  },
});

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


export default function Footer() {
  const classes = useStyles();


  return (
    <footer>
      <Grid container spacing={0} justify="center">
        <Grid item xs></Grid>
        <Grid item xs={6} style={{ textAlign: "center" }}>
          <Link
            to="/dashboard"
            className={
              location.pathname === "/dashboard"
                ? "nav-link active"
                : "nav-link"
            }
          >
            <Button size="small" color="primary">
              <HomeIcon />
            </Button>
          </Link>
          <Link
            to="/calendar"
            className={
              location.pathname === "/calendar" ? "nav-link active" : "nav-link"
            }
          >
            <Button size="small" color="primary">
              <Icon>event</Icon>
            </Button>
          </Link>
          <Link
          >
            <Button>
              <CreateEventModal />
              {/* <Button size="small" color="primary" >
              <Icon>add_circle</Icon>
            </Button> */}
            </Button>
          </Link>
          <Button size="small" color="primary">
            <Icon>account_circle</Icon>
          </Button>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </footer>

  );
}
