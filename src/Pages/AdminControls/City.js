import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CSButton from "../../Components/CSButton";
import CSDataGrid from "../../Components/CSDataGrid";
import CSDropDown from "../../Components/CSDropDown";
import CSTextField from "../../Components/CSTextField";
import { getData, sendData } from "../../Config/firebasemethods";

function City() {
  const [model, setmodel] = useState({});
  const [data, setData] = useState([]);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 220,
      heeaderClassName: "tabel-header",
    },
    {
        field: "cityname",
        headerName: "City Name",
        width: 120,
        heeaderClassName: "tabel-header",
      },
    {
        field: "citycode",
        headerName: "City Code",
        width: 80,
        heeaderClassName: "tabel-header",
      },
    {
        field: "countrycode",
        headerName: "Country Name",
        width: 120,
        heeaderClassName: "tabel-header",
      },
     
  ];
  let fillmodel = (key, val) => {
    model[key] = val;
    setmodel({ ...model });
    console.log(model);
  };
  const senddata = () => {
    fillmodel("status", true);
    sendData(model, "City/")
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let getdt = () => {
    getData("City")
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getdt();
  }, []);
  return (
    <div>
      <Box sx={{ p: 3, width: "90vw" }}>
        <Box sx={{ py: 6 }}>
          <Typography variant="h3" sx={{ py: 2 }} align="center">
            Cities
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
                <CSDropDown
                  nodename="Country"
                  displayField="countryname"
                  valueField="countryname"
                  label="Country"
                  required={true}
                  //   value={model.countrycode}
                  onChange={(e) => fillmodel("countrycode", e.target.value)}
                />
              </Grid>
              <Grid item md={6}>
                <CSTextField
                  label="City Name"
                  required={true}
                  value={model.cityname}
                  onChange={(e) => fillmodel("cityname", e.target.value)}
                />
              </Grid>
              <Grid item md={6}>
                <CSTextField
                  label="City Code"
                  required={true}
                  value={model.citycode}
                  onChange={(e) => fillmodel("citycode", e.target.value)}
                />
              </Grid>

              <Grid item md={6}>
                <CSButton
                  // disabled={isLoading}
                  // label=  {isLoading ? <CircularProgress color='inherit' /> : "Create Account"}
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
      <Box sx={{ p: 3, width: "90vw" }}>
        <Box
          sx={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
            p: 4,
          }}
        >
             {data && data.length > 0 ? (
            <CSDataGrid rows={data} columns={columns} />
          ) : (
            <Box
              style={{
                height: "50vh",
                display: "flex",
                justifyContentr: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress size={"100px"} />
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}

export default City;
