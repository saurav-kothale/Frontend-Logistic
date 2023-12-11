import React, { useContext, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { MultiStepContext } from "../../contexts/StepContext";
// import styles from "./FirstStep.module.css";
import axios from "axios";
import { saveAs } from "file-saver";
import styles from "./SecondStep.module.css"
// import Box from '@mui/material/Box';

const SecondStep = () => {
  const { setStep, userData, setUserData } = useContext(MultiStepContext);
  const [downloadLink, setDownloadLink] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/updated_upload",
        {
          file: userData["file"],
          first_order_from: userData["first_order_from"],
          first_order_to: userData["first_order_to"],
          first_week_amount: userData["first_week_amount"],
          first_weekend_amount: userData["first_weekend_amount"],
          second_order_from: userData["second_order_from"],
          second_order_to: userData["second_order_to"],
          second_week_amount: userData["second_week_amount"],
          second_weekend_amount: userData["second_weekend_amount"],
          amount_grether_than: userData["amount_grether_than"],
          week_amount: userData["week_amount"],
          weekend_amount: userData["week_amount"],
          maximum_rejection: userData["maximum_rejection"],
          rejection_amount: userData["rejection_amount"],
          maximum_bad_orders: userData["maximum_bad_orders"],
          bad_order_amount: userData["bad_order_amount"],
        },

        {
          headers: { "Content-Type": "multipart/form-data" },
          responseType: "blob"
        }
      );

      console.log(response)
      saveAs(new Blob([response.data]), "modified_data.xlsx");

      setUserData("")
      // setStep(1)

    } catch (error) {
      console.error("unexpected error", error);
    }
  };

  const handleDownload = () => {
    // Trigger download by creating an anchor element
    const link = document.createElement("a");
    link.href = downloadLink;
    link.download = "modified_data.xlsx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.TextFieldContainer}>
      {/* <Textarea aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" /> */}
      <div>
        <TextField
          label="From Order"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["first_order_from"] || ""}
          onChange={(e) =>
            setUserData({ ...userData, first_order_from: e.target.value })
          }
        />
        <TextField
          label="To Order"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["first_order_to"] || ""}
          onChange={(e) =>
            setUserData({ ...userData, first_order_to: e.target.value })
          }
        />

        

        <TextField
          label="Week Amount"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["first_week_amount"] || ""}
          onChange={(e) =>
            setUserData({ ...userData, first_week_amount: e.target.value })
          }
        />

        <TextField
          label="Weekend Amount"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["first_weekend_amount"] || ""}
          onChange={(e) =>
            setUserData({ ...userData, first_weekend_amount: e.target.value })
          }
        />
      </div>

      <div>
        <TextField
          label="From Order"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["second_order_from"] || ""}
          onChange={(e) =>
            setUserData({ ...userData, second_order_from: e.target.value })
          }
        />

        <TextField
          label="To Order"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["second_order_to"] || ""}
          onChange={(e) =>
            setUserData({ ...userData, second_order_to: e.target.value })
          }
        />

        <TextField
          label="Week Amount"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["second_week_amount"] || ""}
          onChange={(e) =>
            setUserData({ ...userData, second_week_amount: e.target.value })
          }
        />

        <TextField
          label="Weekend Amount"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["second_weekend_amount"] || ""}
          onChange={(e) =>
            setUserData({ ...userData, second_weekend_amount: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Order Greaterthan"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["order_grether_then"] || ""}
          onChange={(e) =>
            setUserData({ ...userData, order_grether_then: e.target.value })
          }
        />

        <TextField
          label="Week Amount"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["week_amount"] || ""}
          onChange={(e) =>
            setUserData({ ...userData, week_amount: e.target.value })
          }
        />

        <TextField
          label="Weekend Amount"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["weekend_amount"] || ""}
          onChange={(e) =>
            setUserData({ ...userData, weekend_amount: e.target.value })
          }
        />
      </div>
      <div>
        <TextField
          label="Rejection Orders"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["maximum_rejection"] || ""}
          onChange={(e) =>
            setUserData({ ...userData, maximum_rejection: e.target.value })
          }
        />

        <TextField
          label="Rejection Order Amount"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["rejection_amount"] || ""}
          onChange={(e) =>
            setUserData({ ...userData, rejection_amount: e.target.value })
          }
        />

        <TextField
          label="Bad Orders"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["maximum_bad_orders"] || ""}
          onChange={(e) =>
            setUserData([{ ...userData, maximum_bad_orders: e.target.value }])
          }
        />

        <TextField
          label="Bad Orders Amount"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData["bad_order_amount"] || ""}
          onChange={(e) =>
            setUserData({ ...userData, bad_order_amount: e.target.value })
          }
        />
      </div>
      <div>
        <Button variant="contained" onClick={() => setStep(1)} color="primary">
          Previous
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          color="primary"
        >
          Submit
        </Button>

      </div>
    </div>
  );

};

export default SecondStep;