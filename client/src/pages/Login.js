import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../services/userContext';
import Box from '@material-ui/core/Box';
import BasicTextFields from '../components/BasicTextFields';
import Button from '@material-ui/core/Button';


function LoginInPage() {
    const user = useContext(UserContext)
    // console.log(user);
    // const { email, password } = user;

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (email && password) {
            //get return url from location state or default to home page
            const { from } = location.state || { from: { pathname: '/' } };
            dispatch(userActions.login(email, password, from));
        }
    }
    return (
        <div className='login-wrapper'>
            <Box>
                <h1>Sign In</h1>
                <form id='login' onSubmit={handleSubmit}>

                    <BasicTextFields label="Email Address" id='email' type='email' onChange={handleChange}></BasicTextFields>
                    <BasicTextFields label="Password" id='password' type='password' onChange={handleChange}></BasicTextFields>
                    <Button size='large' variant='contained' color='primary' type="button">
                        Sign In
                </Button>
                </form>
            </Box>
        </div>
    )
};

export default LoginInPage();


