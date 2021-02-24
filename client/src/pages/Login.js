import React, { useState } from 'react';
import { useUserContext } from '../services/userContext';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import BasicTextFields from '../components/BasicTextFields';
import Button from '@material-ui/core/Button';
import Header from "../components/Header"
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    div: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
export default function LoginInPage() {
    const { user, setUser } = useUserContext();
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const $ = window.$
    const classes = useStyles();
    //Create a session storage to keep them logged in
    //Check for session storage as useEffect and put on every page



    async function loginUser(email, password) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: loginData
        }
        const response = await fetch('/api/login', requestOptions);
    };




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
                            <BasicTextFields label="Email Address" id='email' type='email' value={loginData.email} onChange={(e) => setLoginData({ ...logindata, email: e.target.value })}></BasicTextFields>
                        </Grid>
                        <Grid className={classes.div}>
                            <BasicTextFields label="Password" id='password' type='password' value={loginData.password} onChange={(e) => setLoginData({ ...logindata, password: e.target.value })}></BasicTextFields>
                        </Grid>
                        <Grid className={classes.div}>
                            <Button size='large' variant='contained' color='primary' type="button" onClick={() => loginUser()}>
                                Sign In
                </Button>
                        </Grid>
                    </Grid>
                </form>

            </Box>
        </div >
    )
};




