import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CSButton from "../../Components/CSButton";
import CSTextField from "../../Components/CSTextField";
import { sendData } from "../../Config/firebasemethods";

function Country() {
  const [model, setmodel] = useState({});
  let fillmodel = (key, val) => {
    model[key] = val;
    setmodel({ ...model });
    console.log(model);
  };
  const senddata = () => {
    fillmodel("status", true);
    sendData(model, "Country/")
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Box sx={{ p: 3, width: "80vw" }}>
        <Box sx={{ py: 6 }}>
          <Typography variant="h3" sx={{ py: 2 }} align="center">
            Country
          </Typography>
          <Box
            sx={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
              p: 4,
            }}
          >
            <Grid container spacing={3}>
              <Grid item md={6}>
                <CSTextField
                  label="Country Name"
                  required={true}
                  value={model.countryname}
                  onChange={(e) => fillmodel("countryname", e.target.value)}
                />
              </Grid>
              <Grid item md={6}>
                <CSTextField
                  label="Country Code"
                  required={true}
                  value={model.countrycode}
                  onChange={(e) => fillmodel("countrycode", e.target.value)}
                />
              </Grid>
              <Grid item md={6}>
                <CSTextField
                  label="Currency"
                  required={true}
                  value={model.currency}
                  onChange={(e) => fillmodel("currency", e.target.value)}
                />
              </Grid>
              <Grid item md={6}>
              <CSButton
                  label={"Send Data"}
                  color={"success"}
                  variant={"contained"}
                  fullwidth
                  onClick={senddata}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Country;
