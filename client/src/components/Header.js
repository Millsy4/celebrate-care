import React from 'react';
import Box from '@material-ui/core/Box';
import Image1 from '../images/logoblack.png';
import { makeStyles } from "@material-ui/core/styles";
import { FormHelperText } from '@material-ui/core';

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
            bgcolor="#74A3AC"
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
