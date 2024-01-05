import React, { useContext, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { MultiStepContext } from "../../contexts/StepContext";
// import styles from "./FirstStep.module.css";
import axios from "axios";
import { saveAs } from "file-saver";
import styles from "./SecondStep.module.css";
import style from './Bluedart.module.css'
// import Box from '@mui/material/Box';

const BluedartStep = () => {
  const { setStep, userData, setUserData, fileId, fileName } =
    useContext(MultiStepContext);

  const [downloadLink, setDownloadLink] = useState(null);

  console.log("Fourth Step file_id and file_name", fileId, fileName);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/calculate_bluedart/${fileId}/${fileName}`,
        {
          file_id: fileId,
          file_name: fileName,
          file: userData["file"],
          from_order_document : userData["from_order_document"],
          to_order_document:userData["to_order_document"],
          first_amount_document : userData["first_amount_document"],
          second_condition_from_document:userData["second_condition_from_document"],
          second_condition_to_document : userData["second_condition_to_document"],
          second_condition_amount_document : userData["second_condition_amount_document"],
          third_condition_from_document : userData["third_condition_from_document"],
          third_condition_to_document : userData["third_condition_to_document"],
          third_condtion_amount_document : userData["third_condtion_amount_document"],
          order_greater_than_document : userData["order_greater_than_document"],
          order_amount_document : userData["order_amount_document"],
          from_order_parcel : userData["from_order_parcel"],
          to_order_parcel : userData["to_order_parcel"],
          first_amount_parcel : userData["first_amount_parcel"],
          second_condition_from_parcel : userData["second_condition_from_parcel"],
          second_condition_to_parcel : userData["second_condition_to_parcel"],
          second_condition_amount_parcel : userData["second_condition_amount_parcel"],
          third_condition_from_parcel : userData["third_condition_from_parcel"],
          third_condition_to_parcel : userData["third_condition_to_parcel"],
          third_condtion_amount_parcel : userData["third_condtion_amount_parcel"], 
          order_greater_than_parcel : userData["order_greater_than_parcel"],
          order_amount_parcel : userData["order_amount_parcel"]
        },

        {
          headers: { "Content-Type": "multipart/form-data" },
          responseType: "blob",
        }
      );

      saveAs(new Blob([response.data]), "modified_data.xlsx");

      console.log(response);

      //   setFileId(response.data.file_id)
      //   setFileName(response.data.file_name)

      setUserData("");
      //   setStep()
    } catch (error) {
      console.error("unexpected error", error);
    }
    console.log("clicked")
  };

  return (
    <div className={styles.TextFieldContainer}>
      {/* <Textarea aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" /> */}
      <div className={styles.formContainer}>
        <form>
          <div>
          
          <div>
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
                  value={userData["from_order_document"] || ""}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      from_order_document: e.target.value,
                    })
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
                  value={userData["to_order_document"] || ""}
                  onChange={(e) =>
                    setUserData({ ...userData, to_order_document: e.target.value })
                  }
                />
              </div>

              <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">
                  Amount
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Week Amount : 20"
                  value={userData["first_amount_document"] || ""}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      first_amount_document : e.target.value,
                    })
                  }
                />
              </div>

              {/* <div class="col-auto">
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
            </div> */}
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
                  value={userData["second_condition_from_document"] || ""}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      second_condition_from_document: e.target.value,
                    })
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
                  value={userData["second_condition_to_document"] || ""}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      second_condition_to_document: e.target.value,
                    })
                  }
                />
              </div>

              <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">
                  Amount
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Week Amount : 25"
                  value={userData["second_condition_amount_document"] || ""}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      second_condition_amount_document: e.target.value,
                    })
                  }
                />
              </div>

              {/* <div class="col-auto">
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
            </div> */}
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
                  value={userData["third_condition_from_document"] || ""}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      third_condition_from_document: e.target.value,
                    })
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
                  value={userData["third_condition_to_document"] || ""}
                  onChange={(e) =>
                    setUserData({ ...userData, third_condition_to_document: e.target.value })
                  }
                />
              </div>

              <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">
                  Amount
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Week Amount : 25"
                  value={userData["third_condtion_amount_document"] || ""}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      third_condtion_amount_document: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className={styles.thirdRow}>
              <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">
                  Order Grether than
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Order Grether than : 26"
                  value={userData["order_greater_than_document"] || ""}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      order_greater_than_document: e.target.value,
                    })
                  }
                />
              </div>

              <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">
                  Amount
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Week Amount : 30"
                  value={userData["order_amount_document"] || ""}
                  onChange={(e) =>
                    setUserData({ ...userData, order_amount_document: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div  className={style.secondFormContainer}>
            <div className={styles.firstRow}>
              <div class="col-auto">
                {/* <label for="inputPassword2" class="visually-hidden">
                  From Order
                </label> */}
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="From Order : 1"
                  value={userData["from_order_parcel"] || ""}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      from_order_parcel: e.target.value,
                    })
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
                  value={userData["to_order_parcel"] || ""}
                  onChange={(e) =>
                    setUserData({ ...userData, to_order_parcel: e.target.value })
                  }
                />
              </div>

              <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">
                  Amount
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Week Amount : 20"
                  value={userData["first_amount_parcel"] || ""}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      first_amount_parcel: e.target.value,
                    })
                  }
                />
              </div>

              {/* <div class="col-auto">
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
            </div> */}
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
                  value={userData["second_condition_from_parcel"] || ""}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      second_condition_from_parcel: e.target.value,
                    })
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
                  value={userData["second_condition_to_parcel"] || ""}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      second_condition_to_parcel: e.target.value,
                    })
                  }
                />
              </div>

              <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">
                  Amount
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Week Amount : 25"
                  value={userData["second_condition_amount_parcel"] || ""}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      second_condition_amount_parcel: e.target.value,
                    })
                  }
                />
              </div>

              {/* <div class="col-auto">
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
            </div> */}
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
                  value={userData["third_condition_from_parcel"] || ""}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      third_condition_from_parcel: e.target.value,
                    })
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
                  value={userData["third_condition_to_parcel"] || ""}
                  onChange={(e) =>
                    setUserData({ ...userData, third_condition_to_parcel: e.target.value })
                  }
                />
              </div>

              <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">
                  Amount
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Week Amount : 25"
                  value={userData["third_condtion_amount_parcel"] || ""}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      third_condtion_amount_parcel: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className={styles.thirdRow}>
              <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">
                  Order Grether than
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Order Grether than : 26"
                  value={userData["order_greater_than_parcel"] || ""}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      order_greater_than_parcel: e.target.value,
                    })
                  }
                />
              </div>

              <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">
                  Amount
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Week Amount : 30"
                  value={userData["order_amount_parcel"] || ""}
                  onChange={(e) =>
                    setUserData({ ...userData, order_amount_parcel: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div>
            <br></br>
            <div className={styles.buttonContainer}>
              <Button
                variant="contained"
                onClick={() => setStep(6)}
                color="primary"
              >
                Previous
              </Button>
              <span> </span>
              <Button
                variant="contained"
                onClick={handleSubmit}
                color="primary"
              >
                Submit
              </Button>
            </div>
          </div>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default BluedartStep;

