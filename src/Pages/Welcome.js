import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CSButton from "../Components/CSButton";
import bgimage from "../Images/—Pngtree—learning character network course vector_5771231.png";

function Welcome() {
  return (
    <div>
      <Box>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Box sx={{ display: "flex", p: 4 }}>
              <img
                src="https://cdn.elearningindustry.com/wp-content/uploads/2021/03/a6504a260e7db544ce07a94edea7451d.png"
                width={"9%"}
              />
              <Typography
                sx={{ fontFamily: "fantasy", ml: 2 }}
                style={{ color: "#393E46" }}
                variant="h4"
              >
                Master
              </Typography>
              <Typography
                sx={{ mt: 2.5, fontWeight: "600" }}
                style={{ color: "crimson" }}
                variant="h4"
              >
                Study
              </Typography>
            </Box>

            <Box sx={{ pt: 15, px: 6 }}>
              <Typography
                variant="h3"
                sx={{ fontWeight: "600" }}
                style={{ color: "#2146C7" }}
              >
                THE MOST PROGRESSIVE
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: "600" }}
                style={{ color: "crimson" }}
              >
                Education
              </Typography>
            </Box>
            <Box sx={{px:15,py:6,display:'flex'}}>
              <Button
                style={{ backgroundColor: "#2146C7", color: "white",boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px' }}
                sx={{ p: 2, borderRadius: "35px",mr:5 }}
              >
                <Typography variant="body1" sx={{ fontWeight: "500" }}>
                  Get Started
                </Typography>
              </Button>
              <Button
                style={{ backgroundColor: "crimson", color: "white" ,boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px'}}
                sx={{ p: 2, borderRadius: "35px" }}
              >
                <Typography variant="body1" sx={{ fontWeight: "400" }}>
                  Get Started
                </Typography>
              </Button>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box sx={{ p: 3, mt: 6 }}>
              <img src={bgimage} height="100%" width="100%" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Welcome;
