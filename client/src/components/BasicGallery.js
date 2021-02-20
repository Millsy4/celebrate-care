import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Image1 from "../images/grandfather.jpg"
import Image2 from "../images/baking.jpg"
import Image3 from "../images/games.jpg"
import Image4 from "../images/snow.jpg"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const tileData = [
  {
    img: Image1,
    title: 'Photo Session with Grandkids',
    author: 'author'
  },
  {
    img: Image2,
    title: 'Bake Bread',
    author: 'author',
  },
  {
    img: Image3,
    title: 'Play Angry Birds with Lana',
    author: 'author',
  },
  {
    img: Image4,
    title: 'Make a Snowman with Grandkids',
    author: 'author',
  }
]

const useStyles = makeStyles((theme) => ({


  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    height: '400',

  },
  title: {
    color: 'black',
    fontWeight: '800',
  },
  titleBar: {
    height: '200',
    background:
      'linear-gradient(to top, rgba(61,109,111,0.7) 0%, rgba(61,109,111,0.3) 70%, rgba(61,109,111,0) 100%)',
  },
}));

export default function BasicGallery() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" style={{ width: '95%' }}>

      <div className={classes.root}>

        <GridList className={classes.gridList} spacing={5} cellHeight={400} cols={2.5}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img} fontSize={50}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar cellHeight={150}
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton aria-label={`star ${tile.title}`}>
                    <StarBorderIcon className={classes.title} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Container >
  );
}