import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import WishEventModal from './WishlistEventModal';
import UpcomingEventModal from './UpcomingEventModal';


const useStyles = makeStyles({
  root: {
    background: (props) =>
      props.color === 'red'
        ? 'linear-gradient(45deg, #74A3AC 30%, #3D6D6F 90%)'
        : 'linear-gradient(45deg, #CA9575, #EA7A57 90%)',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: 8,
  },
});

function MyButton(props) {
  const { color, ...other } = props;
  const classes = useStyles(props);
  return <Button className={classes.root} {...other} />;
}

MyButton.propTypes = {
  color: PropTypes.oneOf(['blue', 'red']).isRequired,
};

export default function AdaptingHook() {
  return (
    <React.Fragment>
        <MyButton color="red" >Upcoming Event<UpcomingEventModal/></MyButton>
      <MyButton color="blue">Wishlist Event<WishEventModal/></MyButton>
    </React.Fragment>
  );
}