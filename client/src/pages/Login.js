import React from 'react';
import { useUserContext } from '../services/userContext';
import Box from '@material-ui/core/Box';
import BasicTextFields from '../components/BasicTextFields';
import Button from '@material-ui/core/Button';
import Header from "../components/Header"


export default function LoginInPage() {
    const { user, setUser } = useUserContext()

    return (
        <div className='login-wrapper'>
            <Header />
            <Box>
                <h1>Sign In</h1>
                <form id='login' >

                    <BasicTextFields label="Email Address" id='email' type='email'  ></BasicTextFields>
                    <BasicTextFields label="Password" id='password' type='password' ></BasicTextFields>
                    <Button size='large' variant='contained' color='primary' type="button">
                        Sign In
                </Button>
                </form>
            </Box>
        </div>
    )
};




