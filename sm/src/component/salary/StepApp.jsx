import { useContext, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep';
// import ThirdStep from './components/ThirdStep';
import { Stepper, StepLabel, Step} from '@material-ui/core';
import { MultiStepContext } from "../../contexts/StepContext"
// import FileUpload from './components/FileUpload';
import styles from "./StepApp.module.css"
import FourthStep from './FourthStep';

function StepApp() {
  
    const{currentStep} = useContext(MultiStepContext)
  
    function ShowStep(step){
      console.log(step)
      switch(step){
        case 1:
          return <FirstStep/>
  
        case 2:
          return <SecondStep/>
  
        case 3:
          return <ThirdStep/>

        case 4:
          return <FourthStep/>
      }
    }
    return (
      // <StepContext>
        <div className={styles.MainContainer}>
        <div className={styles.stepContainer}>
          <Stepper style={{width: "18%"}} activeStep={currentStep-1} orientation='horizontal'>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        <div className={styles.stepContentContainer}>
          {ShowStep(currentStep)}
        </div>
        
  
      </div>
      // </StepContext>
      
    );
  }
  
  export default StepApp;