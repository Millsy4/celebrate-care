import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Grid from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BasicTextFields from './BasicTextFields';
import CodeModal from './CodeModal';
import Container from '@material-ui/core/Container';
import Form from '@material-ui/core/TextField';
import API from "../utils/API";
// import InputMask from 'react-input-mask';


import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  signUp: {
    justify: 'center',
    alignItems: 'center',
  },
  stepper: {
    background: '',
  },
  button: {
    marginRight: theme.spacing(1),
    justify: 'center',
    alignItems: 'center',
    background: '#3D6D6F',
    color: 'white',
  },
  backbutton: {
    marginRight: theme.spacing(1),
    justify: 'center',
    alignItems: 'center',
    background: '#e0e0e0',
    color: 'black',
  },
  instructions: {
    textAlign: 'center',
  },
}));

function getSteps() {
  return [
    'Random',
    'What is a family code?',
    'Create a new family code',
    'Enter a family code',
  ];
}



function SignUpModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    var copyText = document.getElementById('')
    setOpen(false);
  };


  return (
    <div>
      <Button size='large' variant='contained' color='primary' type="button" onClick={handleOpen}>
        Create a Family Code Now
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Family Code</h2>

            <p id="transition-modal-description">Copy this code and share it with your family members</p>
            <h2>Family Code here</h2>
            <Button size='small' variant='contained' color='primary' type="button" onClick={handleClose}>
              Copy your code
      </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}



export default function SignUpStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const [signUpData, setSignUpData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    familycode: '',
    grandfirstname: '',
    grandlastname: '',
    havecode: false,
  });
  async function signUpUser() {
    API.signUp({
      Email: signUpData.email,
      FirstName: signUpData.firstname,
      LastName: signUpData.lastname,
      Password: signUpData.password,
      FamilyCode: signUpData.familycode,
      HaveCode: signUpData.havecode,
      GrandFirstName: signUpData.grandfirstname,
      GrandLastName: signUpData.grandlastname,
    }).then((res) => (res)).then(() => {
      window.location.replace('/')
    })
      .catch((err) => {
        console.log(err);
      });
    //redirect here to sign in page
  }
  function getStepContent(step) {
    const classes = useStyles();


    switch (step) {
      case 0:
        return (
          <Container maxWidth="lg" style={{ width: '30%' }}>
            <Grid>
              <Box className={classes.signUp}>
                <h2>Sign Up Form</h2>
                <Form label="First Name" id="firstname" value={signUpData.firstname} onChange={(e) => setSignUpData({ ...signUpData, firstname: e.target.value })} />
                <br></br>
                <Form label="Last Name" id="lastname" value={signUpData.lastname} onChange={(e) => setSignUpData({ ...signUpData, lastname: e.target.value })} />
                <br></br>
                <Form label="Email address" id="email" value={signUpData.email} onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })} />
                <br></br>
                <Form label="Password" id="password" value={signUpData.password} onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })} />
              </Box>
            </Grid>
          </Container>
        );

      case 1:
        return (
          <Container maxWidth="lg" style={{ width: '70%' }}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Box>
                <h2>What is a family code?</h2>
                <p>
                  Celebrate Care groups your entire family together with a family
                  code. The first person from your family to create an account
                  will create a code and share it with the entire family.
                </p>
                <h3>Click next to either create a family code!</h3>
              </Box>
            </Grid>
          </Container>
        );
      case 2:
        return (
          <Container maxWidth="lg" style={{ width: '70%' }}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Box>
                <h2>Create a Family Code</h2>
                <h3>
                  If someone from your family has already created a family code,
                  please skip this step.
                </h3>
                <CodeModal />
              </Box>
            </Grid>
          </Container>
        );
      case 3:
        return (
          <Container maxWidth="lg" style={{ width: '30%' }}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Box>
                <h2>Enter Your Family Code </h2>
                <Form Form label="Family Code" id="familycode" value={signUpData.familycode} onChange={(e) => setSignUpData({ ...signUpData, familycode: e.target.value })}>
                  {/* <BasicTextFields label="Family Code" id="familycode" value={signUpData.familycode} onChange={(e) => setSignUpData({ ...signUpData, familycode: e.target.value })} /> */}
                </Form>
                <Form label="Grandparent First name" id="grandFirstName" value={signUpData.grandfirstname} onChange={(e) => setSignUpData({ ...signUpData, grandfirstname: e.target.value })} />
                <Form label="Grandparent Last name" id="grandLastName" value={signUpData.grandlastname} onChange={(e) => setSignUpData({ ...signUpData, grandlastname: e.target.value })} />
              </Box>
            </Grid>
          </Container>
        );
      default:
        return 'Unknown step';
    }
  }
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
    setSignUpData({ ...signUpData, havecode: true })

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
    <Container>
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel className={classes.stepper} {...labelProps}>
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              {/* <Container maxWidth="lg" style={{ width: '40.5%' }}>
                <Typography className={classes.instructions}>
                  All steps completed - you're finished
                </Typography>
                <Button variant="contained" href="/" onClick={signUpUser} className={classes.button}>
                  Go to Login Page
                </Button>
              </Container> */}
            </div>
          ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>
                <div>
                  <Container maxWidth="lg" style={{ width: '40.5%' }}>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.backbutton}
                    >
                      Back
                  </Button>
                    {isStepOptional(activeStep) && (
                      <Button
                        variant="contained"
                        onClick={handleSkip}
                        className={classes.button}
                      >
                        I already have a family code
                      </Button>
                    )}

                    <Button
                      variant="contained"
                      onClick={activeStep === steps.length - 1 ? signUpUser : handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Go to Login Page' : 'Next'}
                    </Button>
                  </Container>
                </div>
              </div>
            )}
        </div>
      </div>
    </Container>
  );
}
