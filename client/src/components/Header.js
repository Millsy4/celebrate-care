import React from 'react';
import Box from '@material-ui/core/Box';
import Image1 from '../images/logoblack.png';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    image: {

    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

export default function Header() {
    const classes = useStyles();
    return (
        <Box
            className={classes.root}
            bgcolor="linear-gradient(90deg, rgba(61,109,111,1) 0%, rgba(110,181,194,1) 47%, rgba(74,174,194,1) 100%)"
            width='100%'
            height={200}
        >
            <Box
                className={classes.image}
                width='30%'
                height={175}

            >
                {props => <img
                    width='100px'
                    src={Image1} {...props} />}
            </Box>
        </Box>
    )
}
