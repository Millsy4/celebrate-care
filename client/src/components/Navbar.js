import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Swipedrawer from './SwipeDrawer';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Swipedrawer />
            <Typography variant="h6" className={classes.title}>
              Care Worth Celebrating
            </Typography>
                  <IconButton>
                    <AddCircleIcon fontSize="large" />
                  </IconButton>
                  <IconButton>
                    <AccountCircle fontSize="large" />
                  </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
