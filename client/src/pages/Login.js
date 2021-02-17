import React from 'react';
import BasicTextFields from '../components/textfield';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


export default function LoginInPage() {
    return (

        <Box>
            <h1>Sign In</h1>
            <form id='login'>
                <BasicTextFields label="Email Address" id='email'></BasicTextFields>
                <BasicTextFields label="Password" id='password'></BasicTextFields>
            </form>
            <Button size='large' variant='contained' color='primary' type="button" >
                Sign In
      </Button>
        </Box>

    )
};

const $ = window.$;

$(document).ready(() => {
    // Getting references to our form and inputs
    const loginForm = $("form.login");
    const emailInput = $("input#email");
    const passwordInput = $("input#password");
    console.log(emailInput);
    console.log(passwordInput);

    $(".dropdown-trigger").dropdown();
    $(".sidenav").sidenav();

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", (event) => {
        event.preventDefault();
        const userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
        };

        if (!userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
        $.post("/api/login", {
            email: email,
            password: password,
        })
            .then(() => {
                window.location.replace("/welcome");
                // If there's an error, log the error
            })
            .catch((err) => {
                console.log(err);
            });
    }
});
