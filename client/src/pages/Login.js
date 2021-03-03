import React, { useState, Redirect } from 'react';
import { useUserContext } from '../services/userContext';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import BasicTextFields from '../components/BasicTextFields';
import Button from '@material-ui/core/Button';
import Header from "../components/Header"
import { Grid } from '@material-ui/core';
import Form from '@material-ui/core/TextField';
import API from "../utils/API";
import { useHistory } from "react-router";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    div: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    button: {
        marginRight: theme.spacing(1),
        justify: "center",
        alignItems: "center",
        background: "#3D6D6F",
        color: "white",

    },
}));
export default function LoginInPage() {
    const { user, setUser } = useUserContext();
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const $ = window.$
    const classes = useStyles();
    //Create a session storage to keep them logged in
    //Check for session storage as useEffect and put on every page

    const history = useHistory()

    async function loginUser() {
        API.logIn(loginData).then(({ data }) => {
            console.log(data)
            const familycodes = data.Familyties.map(relationship => relationship.id)
            setUser({
                userId: data.id,
                familycodeId: familycodes
            })
            history.push('/calendar', user)
        })

    }

    return (
        <div className='login-wrapper'>
            <Header />
            <Box>

                <Grid container direction="column" justify="center" alignItems="center">
                    <h1>Sign In</h1>
                </Grid>
                <form id='login' >
                    <Grid container direction="column" justify="space-between" alignItems="center">
                        <Grid className={classes.div}>

                            <Form label="Email Address" id='email' type='email' value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}></Form>

                        </Grid>
                        <Grid className={classes.div}>

                            <Form label="Password" id='password' type='password' value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}></Form>

                        </Grid>
                        <Grid className={classes.div}>
                            <Button className={classes.button} size='large' variant='contained' color='primary' type="button" onClick={() => loginUser()}>
                                Sign In
                     </Button>
                        </Grid>
                    </Grid>

                </form>
                <Grid>
                    <Grid container direction="column" justify="space-between" alignItems="center">
                        <h3>Need to make a new account?</h3>
                    </Grid>
                    <Grid container direction="column" justify="space-between" alignItems="center">
                        <Button
                            className={classes.button}
                            size="large"
                            variant="contained"
                            type="button"
                            onClick={() => {
                                window.location.replace('/signup')

                            }}
                        >
                            Register Now
                     </Button>
                    </Grid>
                </Grid>

            </Box>
        </div >
    )
};




