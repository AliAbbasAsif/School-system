import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import CSButton from "../../Components/CSButton";
import CSDropDown from "../../Components/CSDropDown";
import CSTextField from "../../Components/CSTextField";
import { sendData } from "../../Config/firebasemethods";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CheckBox } from "@mui/icons-material";
function AdminQuiz() {
  const [model, setmodel] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [options, setOptions] = useState([]);
  const [currentOption, setCurrentOption] = useState("");
  const [correctOption, setCorrectOption] = useState(false);
  let navigate = useNavigate();

  let fillmodel = (key, val) => {
    model[key] = val;
    setmodel({ ...model });
    console.log(model);
  };
  let sendQuizdata = () => {
    setLoading(true);
    sendData(model, "quizdata/")
      .then((success) => {
        setLoading(false);
        console.log(success);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  useEffect(() => {
    console.log(model);
  }, [model]);
  return (
    <div className="adminbg box">
      <Box sx={{ p: 4, width: "50%" }}>
        <Box sx={{ border: "2px solid white", borderRadius: "25px", p: 3 }}>
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
                value={model.quizmarks}
                onChange={(e) => fillmodel("quizmarks", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <CSTextField
                label="Duration"
                required={true}
                value={model.duration}
                onChange={(e) => fillmodel("duration", e.target.value)}
              />
            </Grid>
            <Grid item md={6}>
              <CSButton label="Add Quiz" startIcon={<AddCircleIcon />} />
            </Grid>

            <Grid item md={12}>
              <CSTextField
                label="Question"
                required={true}
                value={model.question}
                onChange={(e) => fillmodel("question", e.target.value)}
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
                  onChange={(e) => {
                    setCurrentOption(e.target.value);
                  }}
                />
              </div>
              {
                <ul>
                  {options.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              }
              <CSButton
                label="Add Option"
                startIcon={<AddCircleIcon />}
                onClick={() => {
                  if (correctOption) {
                    options.push(currentOption);
                    setOptions([...new Set([...options])], currentOption);
                    fillmodel("correctOption", currentOption);
                  } else {
                    // [...new Set([...options])];
                    options.push(currentOption);
                    setOptions([...new Set([...options])]);
                    fillmodel("options", options);
                  }
                }}
              />
            </Grid>
          </Grid>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CSButton
              label="Submit"
              color={"primary"}
              padding="10px 40px"
              margin="20px"
              onClick={() => {
                sendQuizdata(model, "quizData");
              }}
            />
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default AdminQuiz;
