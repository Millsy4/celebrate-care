import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BasicTextFields from '../components/textfield';
import TransitionsModal from '../components/codemodal';

import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Create your account', 'What is a family code?', 'Create a new family code', 'Enter a family code'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return (
                <Box>
                    <h2>Sign Up Form</h2>
                    < BasicTextFields label='First Name' id='firstname' />
                    < BasicTextFields label='Last Name' id='lastname' />
                    < BasicTextFields label='Email address' id='email' />
                    < BasicTextFields label='Password' id='password' />
                </Box>
            );

        case 1:
            return (
                <Box>
                    <h2>What is a family code?</h2>
                    <p>Celebrate Care groups your entire family together with a family code.
                        The first person from your family to create an account will create a code and share it with the entire family.</p>
                    <h3>Click next to either create a family code!</h3>
                </Box>
            );
        case 2:
            return (
                <Box>
                    <h2>Create a Family Code</h2>
                    <h3>If someone from your family has already created a family code, please skip this step.</h3>
                    <TransitionsModal />

                </Box>
            );
        case 3:
            return (
                <Box>
                    <h2>Enter Your Family Code </h2>
                    < BasicTextFields label='Family Code' id='familycode' />
                </Box>
            );
        default:
            return 'Unknown step';
    }
}

export default function HorizontalLinearStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();

    const isStepOptional = (step) => {
        return step === 2;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = <Typography variant="caption">Optional</Typography>;
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            All steps completed - you&apos;re finished
            </Typography>
                        <Button variant='contained' color='primary' href='/' className={classes.button}>
                            Go to Login Page
            </Button>
                    </div>
                ) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            <div>
                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                    Back
              </Button>
                                {isStepOptional(activeStep) && (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleSkip}
                                        className={classes.button}
                                    >
                                        I already have a family code!
                                    </Button>
                                )}

                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}
