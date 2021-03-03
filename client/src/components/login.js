import React from 'react';
import BasicTextFields from '../components/BasicTextFields';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export default function Login() {
    return (
        <div className='login-wrapper'>
            <Box>
                <h1>Sign In</h1>
                <form id='login'>
                    <BasicTextFields label="Email Address" id='email' type='email'></BasicTextFields>
                    <BasicTextFields label="Password" id='password' type='password'></BasicTextFields>
                    <Button size='large' variant='contained' color='primary' type="button" >
                        Sign In
                </Button>
                </form>
            </Box>
        </div>
    )
}