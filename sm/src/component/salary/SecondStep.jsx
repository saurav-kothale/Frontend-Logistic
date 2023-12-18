import React, { useContext, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { MultiStepContext } from "../../contexts/StepContext";
// import styles from "./FirstStep.module.css";
import axios from "axios";
import { saveAs } from "file-saver";
import styles from "./SecondStep.module.css";
// import Box from '@mui/material/Box';

const SecondStep = () => {
  const { setStep, userData, setUserData,fileId, setFileId, fileName, setFileName,} = useContext(MultiStepContext);
  const [downloadLink, setDownloadLink] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/calculate_zomato_surat",
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
        }
      );

      console.log(response);
        
      setFileId(response.data.file_id)
      setFileName(response.data.file_name)


      setUserData("");
      // setStep(1)
    } catch (error) {
      console.error("unexpected error", error);
    }
  };


  return (
    <div className={styles.TextFieldContainer}>
      {/* <Textarea aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" /> */}
      <div className={styles.formContainer}>
        <form>
          <div className={styles.firstRow}>
            <div class="col-auto">
              <label for="inputPassword2" class="visually-hidden">
                From Order
              </label>
              <input
                type="number"
                class="form-control"
                id="inputPassword2"
                placeholder="From Order : 1"
                value={userData["first_order_from"] || ""}
                onChange={(e) =>
                  setUserData({ ...userData, first_order_from: e.target.value })
          }
              />
            </div>

            <div class="col-auto">
              <label for="inputPassword2" class="visually-hidden">
                To Order:19
              </label>
              <input
                type="number"
                class="form-control"
                id="inputPassword2"
                placeholder="To Order : 19"
                value={userData["first_order_to"] || ""}
                onChange={(e) =>
                  setUserData({ ...userData, first_order_to: e.target.value })
                }
                
              />
            </div>

            <div class="col-auto">
              <label for="inputPassword2" class="visually-hidden">
                Week Amount
              </label>
              <input
                type="number"
                class="form-control"
                id="inputPassword2"
                placeholder="Week Amount : 20"
                value={userData["first_week_amount"] || ""}
                onChange={(e) =>
                  setUserData({ ...userData, first_week_amount: e.target.value })
                }
                
              />
            </div>

            <div class="col-auto">
              <label for="inputPassword2" class="visually-hidden">
                Weekend Amount
              </label>
              <input
                type="number"
                class="form-control"
                id="inputPassword2"
                placeholder="Weekend Amount : 22"
                value={userData["first_weekend_amount"] || ""}
                onChange={(e) =>
                  setUserData({ ...userData, first_weekend_amount: e.target.value })
                }
                
              />
            </div>
          </div>
          <div className={styles.secondRow}>
          <div class="col-auto">
              <label for="inputPassword2" class="visually-hidden">
                From Order
              </label>
              <input
                type="number"
                class="form-control"
                id="inputPassword2"
                placeholder="From Order : 20"
                value={userData["second_order_from"] || ""}
                onChange={(e) =>
                  setUserData({ ...userData, second_order_from: e.target.value })
                }
                
              />
            </div>

            <div class="col-auto">
              <label for="inputPassword2" class="visually-hidden">
                To Order
              </label>
              <input
                type="number"
                class="form-control"
                id="inputPassword2"
                placeholder="To Order : 25"
                value={userData["second_order_to"] || ""}
                onChange={(e) =>
                setUserData({ ...userData, second_order_to: e.target.value })
                }
                
              />
            </div>

            <div class="col-auto">
              <label for="inputPassword2" class="visually-hidden">
                Week Amount
              </label>
              <input
                type="number"
                class="form-control"
                id="inputPassword2"
                placeholder="Week Amount : 25"
                value={userData["second_week_amount"] || ""}
                onChange={(e) =>
                  setUserData({ ...userData, second_week_amount: e.target.value })
                }
              />
            </div>

            <div class="col-auto">
              <label for="inputPassword2" class="visually-hidden">
                Weekend Amount
              </label>
              <input
                type="number"
                class="form-control"
                id="inputPassword2"
                placeholder="Weekend Amount : 27"
                value={userData["second_weekend_amount"] || ""}
                onChange={(e) =>
                  setUserData({ ...userData, second_weekend_amount: e.target.value })
                }
              />
            </div>
          </div>

          <div className={styles.thirdRow}>
          <div class="col-auto">
              <label for="inputPassword2" class="visually-hidden">
                Amount Grether than
              </label>
              <input
                type="number"
                class="form-control"
                id="inputPassword2"
                placeholder="Order Grether than : 26"
                value={userData["order_grether_then"] || ""}
                onChange={(e) =>
                  setUserData({ ...userData, order_grether_then: e.target.value })
                }
              />
            </div>

            <div class="col-auto">
              <label for="inputPassword2" class="visually-hidden">
                Week Amount
              </label>
              <input
                type="number"
                class="form-control"
                id="inputPassword2"
                placeholder="Week Amount : 30"
                value={userData["week_amount"] || ""}
                onChange={(e) =>
                  setUserData({ ...userData, week_amount: e.target.value })
                }
              />
            </div>

            <div class="col-auto">
              <label for="inputPassword2" class="visually-hidden">
              Weekend Amount
              </label>
              <input
                type="number"
                class="form-control"
                id="inputPassword2"
                placeholder="Weekend Amount : 32"
                value={userData["weekend_amount"] || ""}
                onChange={(e) =>
                  setUserData({ ...userData, weekend_amount: e.target.value })
                }
                
              />
            </div>

            
          </div>

          <div className={styles.fourthRow}>
          <div class="col-auto">
              <label for="inputPassword2" class="visually-hidden">
                Maximum Rejection 
              </label>
              <input
                type="number"
                class="form-control"
                id="inputPassword2"
                placeholder="Maximum Rejection : 2"
                value={userData["maximum_rejection"] || ""}
                onChange={(e) =>
                  setUserData({ ...userData, maximum_rejection: e.target.value })
                }
              />
            </div>

            <div class="col-auto">
              <label for="inputPassword2" class="visually-hidden">
                Rejection Amount
              </label>
              <input
                type="number"
                class="form-control"
                id="inputPassword2"
                placeholder="Rejection Amount : 10"
                value={userData["rejection_amount"] || ""}
                onChange={(e) =>
                  setUserData({ ...userData, rejection_amount: e.target.value })
                }
                
              />
            </div>

            <div class="col-auto">
              <label for="inputPassword2" class="visually-hidden">
                Maximum Bad Orders
              </label>
              <input
                type="number"
                class="form-control"
                id="inputPassword2"
                placeholder="Maximum Bad Orders : 2"
                value={userData["maximum_bad_orders"] || ""}
                onChange={(e) =>
                  setUserData([{ ...userData, maximum_bad_orders: e.target.value }])
                }
                
              />
            </div>

            <div class="col-auto">
              <label for="inputPassword2" class="visually-hidden">
                Bad Order Amount
              </label>
              <input
                type="number"
                class="form-control"
                id="inputPassword2"
                placeholder="Bad Order Amount : 10"
                value={userData["bad_order_amount"] || ""}
                onChange={(e) =>
                  setUserData({ ...userData, bad_order_amount: e.target.value })
                }
                
              />
            </div>
          </div>
          <div>
        <br></br>
        <div className={styles.buttonContainer}>
        <Button variant="contained" onClick={() => setStep(1)} color="primary">
          Previous
        </Button>
        <span>  </span>
        <Button variant="contained" onClick={handleSubmit} color="primary">
          Submit
        </Button> 
        </div>
        
      </div>
        

          
        </form>
        {/* <TextField
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
        <Button variant="contained" onClick={handleSubmit} color="primary">
          Submit
        </Button> */}
      </div>
    </div>
  );
};

export default SecondStep;
