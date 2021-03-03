import React from "react";
import SignUpStepper from "../components/SignUpStepper";
import Header from "../components/Header";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
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
}));

export default function SignUp() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <SignUpStepper />
      <Grid>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          <h3>Already have an account?</h3>
        </Grid>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          <Button
            className={classes.button}
            size="large"
            variant="contained"
            type="button"
            onClick={() => {
              window.location.replace("/");
            }}
          >
            Log In
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
