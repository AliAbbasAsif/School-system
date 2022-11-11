import {
  Box,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../App.css";
import CSButton from "../../Components/CSButton";
import CSDropDown from "../../Components/CSDropDown";
import CSTextField from "../../Components/CSTextField";
import { getData, sendData } from "../../Config/firebasemethods";
import AddCircleIcon from "@mui/icons-material/AddCircle";
function AdminQuiz() {
  const [model, setmodel] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [isCreateQuiz, setIsCreateQuiz] = useState(false);
  const [optionsArr, setOptionsArr] = useState([]);
  const [currentOption, setCurrentOption] = useState("");
  const [correctOption, setCorrectOption] = useState(false);
  const [option, setOption] = useState("");
  const [options, setOptions] = useState([]);
  const [quizQuestionModel, setQuizQuestionModel] = useState({});
  const [listOfModels, setListOfModels] = useState([]);
  let createQuiz = () => {
    setIsCreateQuiz(true);
  };
  let addModel = () => {
    listOfModels.push(quizQuestionModel);
    setListOfModels([...listOfModels]);
    setQuizQuestionModel({});
    setOptions([]);
    // cleanerFunction();
    console.log(quizQuestionModel);
    console.log(listOfModels);
  };

  const cleanerFunction = () => {
    setQuizQuestionModel({});
    setOptions([]);
    setCorrectOption("");
  };
  let addOption = () => {
    setOptionsArr([...optionsArr, option]);
  };
  let fillmodel = (key, val) => {
    model[key] = val;
    setmodel({ ...model });
    console.log(model);
  };
  let sendQuizdata = () => {
    setLoading(true);
    sendData(model, "quizdata/")
      .then((success) => {
        console.log(success);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    console.log(model);
    console.log(quizQuestionModel);
  }, [model]);
  return (
    <div className="adminbg box">
      <Box sx={{ p: 4, width: "50%" }}>
        <Box sx={{ border: "2px solid #222", borderRadius: "25px", p: 3 }}>
          <Typography color="inherit" variant="h4">
            Quiz Data
          </Typography>
          <Grid container spacing={2} sx={{ pt: 5 }}>
            <Grid item md={6}>
              <CSTextField
                label="QuizName"
                required={true}
                value={model.quizname}
                onChange={(e) => fillmodel("quizname", e.target.value)}
              />
            </Grid>
            <Grid item md={6}>
              <CSTextField
                label="QuizMarks"
                required={true}
                disabled={isCreateQuiz}
                value={model.quizmarks}
                onChange={(e) => fillmodel("quizmarks", e.target.value)}
              />
            </Grid>
            <Grid item md={6}>
              <CSTextField
                label="Duration"
                disabled={isCreateQuiz}
                required={true}
                value={model.duration}
                onChange={(e) => fillmodel("duration", e.target.value)}
              />
            </Grid>
            <Grid item md={6}>
              <CSDropDown
               nodename="Courses"
               displayField="coursename"
               valueField="coursename"
                label="Course"
                required={true}
                // disabled={isCreateQuiz}
                value={model.course}
                onChange={(e) => fillmodel("course", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <Box style={{ display: "flex", justifyContent: "center" }}>
                <CSButton
                  label="Creat Quiz"
                  startIcon={<AddCircleIcon />}
                  onClick={createQuiz}
                  fullwidth
                />
              </Box>
            </Grid>

            {isCreateQuiz && (
              <Grid container spacing={2} sx={{ pt: 1.5 }}>
                <Grid item md={12}>
                  <CSTextField
                    label="Question"
                    required={true}
                    value={model.question}
                    onChange={(e) => {
                      setQuizQuestionModel({
                        ...quizQuestionModel,
                        question: e.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item md={12}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={(event) => {
                            setCorrectOption(event.target.checked);
                          }}
                          size="small"
                        />
                      }
                      label="Correct?"
                    />
                    <CSTextField
                      margin="0px 0px 0px 30px"
                      label="Add option"
                      required={true}
                      // fullWidth={true}
                      onChange={(e) => {
                        setCurrentOption(e.target.value);
                      }}
                    />
                  </div>
                  {options && options.length > 0 ? (
                    <div>
                      <List
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        {options.map((e, i) => (
                          <ListItemButton
                            style={{
                              border: "1px solid lightgrey",
                              fontWeight: "bolder",
                            }}
                            key={i}
                          >
                            OPTION {i + 1}:
                            <ListItemText
                              style={{
                                color: "#005fa8",
                                paddingLeft: "15px",
                              }}
                              primary={e}
                            />
                          </ListItemButton>
                        ))}
                      </List>
                    </div>
                  ) : null}
                  <CSButton
                    margin="10px 0px"
                    label="Add Option"
                    startIcon={<AddCircleIcon />}
                    onClick={() => {
                      if (currentOption !== "") {
                        if (correctOption) {
                          options.push(currentOption);
                          setOptions([...new Set([...options])], currentOption);
                          // fillData("correctOption", currentOption);
                          setQuizQuestionModel({
                            ...quizQuestionModel,
                            correctOption: currentOption,
                          });
                        } else {
                          // [...new Set([...options])];
                          options.push(currentOption);
                          setOptions([...new Set([...options])]);
                          // fillData("options", options);
                          setQuizQuestionModel({
                            ...quizQuestionModel,
                            options: options,
                          });
                        }
                      } else {
                        alert("The Option cannot be empty");
                      }
                    }}
                  />
                </Grid>

                <Grid item md={12}>
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <CSButton
                      label="Push Question"
                      startIcon={<AddCircleIcon />}
                      onClick={() => {
                        addModel();
                      }}
                      fullwidth
                    />
                  </Box>
                </Grid>
              </Grid>
            )}
          </Grid>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <CSButton
              // label="Submit"
              label={isLoading ? <CircularProgress /> : "Submit"}
              color={"primary"}
              padding="10px 40px"
              margin="20px"
              onClick={() => {
                fillmodel("QuizDetails", listOfModels);
                sendQuizdata();
                cleanerFunction();
                setIsCreateQuiz(false);
              }}
            />
          </div>
          {/* <EZ_Alert alertMessage={alertMessage} severity={severity} /> */}
        </Box>
      </Box>
    </div>
  );
}

export default AdminQuiz;
