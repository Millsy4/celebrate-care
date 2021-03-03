import React from "react";
import Box from "@material-ui/core/Box";
import Image1 from "../images/logoblack.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundImage:
      "linear-gradient(to left, rgba(61,109,111,1) 0%, rgba(61,109,111,0.6) 60%, rgba(61,109,111,0) 100%)",
    height: "200",
    display: "flex",
  },
  image: {
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  containerbox: {
    height: "200px",
  },
  div: {
    flexDirection: "row",
    width: "100%",
    height: "200px",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <div className={classes.div}>
        <Box className={classes.containerbox}>
          <Box className={classes.image} width="30%" height={175}>
            {(props) => (
              <img className={classes.image} src={Image1} {...props} />
            )}
          </Box>
        </Box>
      </div>
    </Box>
  );
}
