import React, { useState } from "react";
import App from "../App"
import Dashboard from "../component/dashboard";
import StepApp from "../component/salary/StepApp";

export const MultiStepContext = React.createContext();
const StepContext = (props) => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const [fileId, setFileId] = useState(null)
  const [fileName, setFileName] = useState(null)

  return (    
      <MultiStepContext.Provider
        value={{
          currentStep,
          setStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          fileId,
          setFileId,
          fileName,
          setFileName
        }}
      >
        {props.children}
      </MultiStepContext.Provider>
  );
};

export default StepContext;
