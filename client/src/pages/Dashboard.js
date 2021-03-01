import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Navbar from '../components/Navbar';
import { useUserContext } from '../services/userContext';
import AddEvent from "../components/AddEvent";
import API from "../utils/API";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Image1 from "../images/grandfather.jpg";
import Image2 from "../images/grandpacat.PNG";
import Image3 from "../images/games.jpg";
import Image4 from "../images/baby.jpg";
import Image5 from "../images/baking.jpg";
import Image6 from "../images/baseball.jpg";
import Image7 from "../images/birthday.jpg";
import Image8 from "../images/cute child.jpg";
import Image9 from "../images/dinner.jpg";
import Image10 from "../images/dog.jpg";
import Image11 from "../images/fall walk.jpg";
import Image12 from "../images/guitar.jpg";
import Image13 from "../images/happy.jpg";
import Image14 from "../images/hiking.jpg";
import Image15 from "../images/holiday.jpg";
import Image16 from "../images/presents.jpg";
import Image17 from "../images/smiling.jpg";
import Image18 from "../images/snow.jpg";
import Image19 from "../images/soccer.jpg";
import Image20 from "../images/walking.jpg";

import Container from "@material-ui/core/Container";

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13, Image14, Image15, Image16, Image17, Image18, Image19, Image20]

const tileData = [
  {
    img: Image1,
    title: "Photo Session with Grandkids",
    author: "author",
  },
  {
    img: Image2,
    title: "Take the Dogs for a Walk",
    author: "author",
  },
  {
    img: Image3,
    title: "Play Angry Birds with Lana",
    author: "author",
  },
  {
    img: Image4,
    title: "Make a Snowman with Grandkids",
    author: "author",
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    height: "400",
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
  },
  title: {
    color: "black",
    fontWeight: "800",
  },
  titleBar: {
    height: "200",
    background:
      "linear-gradient(to top, rgba(61,109,111,1) 0%, rgba(61,109,111,0.6) 70%, rgba(61,109,111,0) 100%)",
  },
}));
export default function Dashboard() {
  const { user, setUser } = useUserContext();
  const [events, setEvents] = useState([])

  useEffect(() => {
    loadEvents();
  }, []);

  function loadEvents() {
    API.getEvents()
      .then((res) => {
        console.log(res.data);
        let unvalidatedEvents = res.data;
        const validatedEvents = [];
        unvalidatedEvents.forEach(event => {
          const validEvent = {
            title: event.eventIdea,
            author: event.familyCode,
            img: images[Math.floor(Math.random() * images.length)]
          }
          validatedEvents.push(validEvent);
        })
        setEvents(...events, validatedEvents);
      })
      .catch((err) => console.log(err));
  }

  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.root} xs={12}>
        <Header />
        <Navbar />
        <Grid container className={classes.heading} justify="flex-start 1">
          <h1>
            {" "}
            <font color="#EA7A57">Upcoming Events</font>
          </h1>
        </Grid>
        <Container maxWidth="lg" style={{ width: "95%" }}>
          <div className={classes.root}>
            <GridList
              className={classes.gridList}
              spacing={5}
              cellHeight={400}
              cols={2.5}
            >
              {events.map((event) => (
                <GridListTile key={event.img} fontSize={50}>
                  <img src={event.img} alt={event.title} />
                  <GridListTileBar
                    cellHeight={150}
                    title={event.title}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                    actionIcon={
                      <IconButton aria-label={`star ${event.title}`}>
                        <CalendarTodayIcon className={classes.title} />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </Container>
        <Grid container className={classes.heading}>
          <h1>
            <font color="#EA7A57">Event Wishlist</font>
          </h1>
        </Grid>
        <Container maxWidth="lg" style={{ width: "95%" }}>
          <div className={classes.root}>
            <GridList
              className={classes.gridList}
              spacing={5}
              cellHeight={400}
              cols={2.5}
            >
              {events.map((event) => (
                <GridListTile key={event.img} fontSize={50}>
                  <img src={event.img} alt={event.title} />
                  <GridListTileBar
                    cellHeight={150}
                    title={event.title}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                    actionIcon={
                      <IconButton aria-label={`star ${event.title}`}>
                        <CalendarTodayIcon className={classes.title} />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </Container>
        <Grid container className={classes.heading}>
          <h1>
            <font color="#EA7A57">Event Ideas</font>
          </h1>
        </Grid>
        <Container maxWidth="lg" style={{ width: "95%" }}>
          <div className={classes.root}>
            <GridList
              className={classes.gridList}
              spacing={5}
              cellHeight={400}
              cols={2.5}
            >
              {events.map((event) => (
                <GridListTile key={event.img} fontSize={50}>
                  <img src={event.img} alt={event.title} />
                  <GridListTileBar
                    cellHeight={150}
                    title={event.title}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                    actionIcon={
                      <IconButton aria-label={`star ${event.title}`}>
                        <FavoriteIcon className={classes.title} />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </Container>
        {/* <Footer /> */}
      </Grid>
    </div>
  );
}
