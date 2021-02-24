import React, { useState } from 'react';
import { useUserContext } from '../services/userContext';
import Box from '@material-ui/core/Box';
import BasicTextFields from '../components/BasicTextFields';
import Button from '@material-ui/core/Button';
import Header from "../components/Header"


export default function LoginInPage() {
    const { user, setUser } = useUserContext();
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const $ = window.$
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
                <h1>Sign In</h1>
                <form id='login' >

                    <BasicTextFields label="Email Address" id='email' type='email' value={loginData.email} onChange={(e) => setLoginData({ ...logindata, email: e.target.value })}></BasicTextFields>
                    <BasicTextFields label="Password" id='password' type='password' value={loginData.password} onChange={(e) => setLoginData({ ...logindata, password: e.target.value })}></BasicTextFields>
                    <Button size='large' variant='contained' color='primary' type="button" onClick={() => loginUser()}>
                        Sign In
                </Button>
                </form>
            </Box>
        </div >
    )
};




