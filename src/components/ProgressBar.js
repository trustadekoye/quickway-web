import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector from '@mui/material/StepConnector';

const steps = ['Select campaign settings', 'Create an ad', 'Create an ad'];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const totalSteps = () => {
    return steps.length;
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep} connector={<StepConnector />}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              onClick={handleStep(index)}
              sx={{
                backgroundColor: '#5CAAAA',
                padding: '10px',
                borderRadius: '10px',
                color: '#5CAAAA',
                '& .MuiStepIcon-root.MuiStepIcon-active, & .MuiStepIcon-root.MuiStepIcon-completed': {
                    color: 'transparent',
                    border: '2px solid #5CAAAA',
                },
              }}
            >
                {/* {index + 1} */}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
