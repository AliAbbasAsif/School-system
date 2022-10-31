import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../App.css";

function QuizApp() {
  return (
    <div className="quizbg box">
      <Box sx={{ p: 2.5 }}>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Box sx={{ border: "2px solid white", borderRadius: "15px", p: 5 }}>
              <Typography align="right">1 /10</Typography>
              <Typography variant="h3">
                Questions..........................
              </Typography>
              <Box sx={{pt:2}}>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <Typography>Options</Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Typography>Options</Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Typography>Options</Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Typography>Options</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default QuizApp;
