import React from 'react';
import Box from '@material-ui/core/Box';
import Image1 from '../images/CC_v2_indv-03.svg';
import HeaderImg from '../images/header.png';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundImage: `url(${HeaderImg})`,
    position: 'relative',
    height: 'auto',
    display: 'flex',
    justifyContent: 'flex-start',
    flexGrow: 1,
  },
  image: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  containerbox: {
    height: '200px',
  },
  div: {
    flexDirection: 'row',
    width: '100%',
    height: '200px',
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.root} style={{ height: 'auto', width: '100%' }}>
      <div className={classes.div}>
        <Box className={classes.containerbox}>
          <Box className={classes.image} margin={1} width="37%" height={175}>
            {(props) => (
              <img className={classes.image} src={Image1} {...props} />
            )}
          </Box>
        </Box>
      </div>
    </Box>
  );
}
