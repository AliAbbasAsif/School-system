import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import CSButton from "../../Components/CSButton";
import CSTextField from "../../Components/CSTextField";
function AdminQuiz() {
  const [model, setmodel] = useState({});
  const [isLoading, setLoader] = useState(false);
  let navigate = useNavigate();

  let fillmodel = (key, val) => {
    model[key] = val;
    setmodel({ ...model });
    console.log(model);
  };
  return (
    <div className="adminbg box">
      <Box sx={{ p: 2, width: "50%" }}>
        <Box sx={{ border: "2px solid white", borderRadius: "25px", p: 3 }}>
          <Typography color="inherit" variant="h4">
            Quiz Data
          </Typography>
          <Grid container spacing={2} sx={{ pt: 5 }}>
            <Grid item md={12}>
              <CSTextField
                label="Question"
                required={true}
                value={model.question}
                onChange={(e) => fillmodel("question", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <CSTextField
                label="Option 1"
                required={true}
                value={model.option_1}
                onChange={(e) => fillmodel("option_1", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <CSTextField
                label="Option 2"
                required={true}
                value={model.option_2}
                onChange={(e) => fillmodel("option_2", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <CSTextField
                label="Option 3"
                required={true}
                value={model.option_3}
                onChange={(e) => fillmodel("option_3", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <CSTextField
                label="Option 4"
                required={true}
                value={model.option_4}
                onChange={(e) => fillmodel("option_4", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <CSTextField
                label="Correct Answer"
                required={true}
                value={model.correctanswer}
                onChange={(e) => fillmodel("correctanswer", e.target.value)}
              />
            </Grid>

            <Grid item md={12}>
              <CSButton
                disabled={isLoading}
                // label=  {isLoading ? <CircularProgress color='inherit' /> : "Create Account"}
                label={"Send Data"}
                color={"success"}
                variant={"contained"}
                fullwidth
                //    onClick={coursedata}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default AdminQuiz;
