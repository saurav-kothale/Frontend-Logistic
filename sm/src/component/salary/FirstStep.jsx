import React, { useState, useContext } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./FirstStep.module.css";
import { MultiStepContext } from "../../contexts/StepContext";
import axios from "axios";
import { Step, Button } from "@material-ui/core";

const FirstStep = () => {

  const { setStep, setUserData, userData, currentStep, uploadedFile, setUploadedFile } =
    useContext(MultiStepContext);





  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFile({"file": acceptedFiles[0]});
    },
    multiple: false,
  });


  const handlChange = async (e) => {
    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/uploadfile",
        uploadedFile,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      // Update userData with the new data property
      setUserData({...userData, "file": uploadedFile["file"]});
      // console.log(userData);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };


  const handleNext = async () => {
    await handlChange(); // Wait for the file upload to complete
    // changeState();
    console.log(userData)
    setUploadedFile(uploadedFile)
    console.log("first step : ", uploadedFile)

    setStep(2);
    console.log("Handle Next fuction calling" + currentStep);
  };


  return (
    <div className={styles.container}>
      <div className={styles.uploadContainer}>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag and drop files here or click to browse.</p>
          <ul>{uploadedFile && <li>{uploadedFile.file.name}</li>}</ul>
        </div>
      </div>
      <div className={styles.nextButtonContainer}>
        
        <Button
          variant="contained"
          onClick={handleNext}
          color="primary"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default FirstStep;
