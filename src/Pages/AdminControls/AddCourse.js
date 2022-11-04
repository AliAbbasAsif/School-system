import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import CSButton from "../../Components/CSButton";
import CSDataGrid from "../../Components/CSDataGrid";
import CSDropDown from "../../Components/CSDropDown";
import CSTextField from "../../Components/CSTextField";
import { getData, sendData } from "../../Config/firebasemethods";
function AddCourse() {
  const [model, setmodel] = useState({});
  const [data, setData] = useState([]);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 160,
      heeaderClassName: "tabel-header",
    },
    {
      field: "coursename",
      headerName: "CourseName",
      width: 150,
      heeaderClassName: "tabel-header",
      editable: true,
    },
    {
      field: "duration",
      headerName: "Duration",
      width: 150,
      heeaderClassName: "tabel-header",
      editable: true,
    },
    {
      field: "noofquiz",
      headerName: "No Of Quizes",
      width: 110,
      heeaderClassName: "tabel-header",
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
      heeaderClassName: "tabel-header",
      editable: true,
    },
  ];
  let fillmodel = (key, val) => {
    model[key] = val;
    setmodel({ ...model });
    console.log(model);
  };
  const coursedata = () => {
    fillmodel("status", true);
    sendData(model, "Courses/")
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData("Courses")
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="adminbg box">
      <Box sx={{ p: 2, width: "100%" }}>
        <Box sx={{width:'50%'}}>
        <Box sx={{ border: "2px solid white", borderRadius: "25px", p: 3 }}>
          <Typography color="inherit" variant="h4">
            Courses
          </Typography>
          <Grid container spacing={2} sx={{ pt: 5 }}>
            <Grid item md={6}>
              <CSTextField
                label="Course Name"
                required={true}
                value={model.coursename}
                onChange={(e) => fillmodel("coursename", e.target.value)}
              />
            </Grid>
            <Grid item md={6}>
              <CSTextField
                label="Duration"
                required={true}
                value={model.duration}
                onChange={(e) => fillmodel("duration", e.target.value)}
              />
            </Grid>
            <Grid item md={6}>
              <CSTextField
                label="fee"
                required={true}
                value={model.fee}
                onChange={(e) => fillmodel("fee", e.target.value)}
              />
            </Grid>
            <Grid item md={6}>
              <CSTextField
                label="noofQuiz"
                required={true}
                value={model.noofquiz}
                onChange={(e) => fillmodel("noofquiz", e.target.value)}
              />
            </Grid>
            <Grid item md={6}>
              <CSDropDown
                label="Course"
                required={true}
                value={model.course}
                onChange={(e) => fillmodel("status", e.target.value)}
                datasource={[
                  {
                    id: "true",
                    displayname: "True",
                  },
                  {
                    id: "false",
                    displayname: "False",
                  },
                ]}
              />
            </Grid>
            <Grid item md={6}>
              <CSTextField
                label="Lead Trainer"
                required={true}
                value={model.leadtrainer}
                onChange={(e) => fillmodel("leadtrainer", e.target.value)}
              />
            </Grid>

            <Grid item md={6}>
              <CSTextField
                label="Assistant 1"
                required={true}
                value={model.assistant_1}
                onChange={(e) => fillmodel("assistant_1", e.target.value)}
              />
            </Grid>
            <Grid item md={6}>
              <CSTextField
                label="Assistant 2"
                required={true}
                value={model.assistant_2}
                onChange={(e) => fillmodel("assistant_2", e.target.value)}
              />
            </Grid>
            <Grid item md={6}>
              <CSTextField
                label="Assistant 3"
                required={true}
                value={model.assistant_3}
                onChange={(e) => fillmodel("assistant_3", e.target.value)}
              />
            </Grid>
            <Grid item md={6}>
              <CSTextField
                label="Assistant 4"
                required={true}
                value={model.assistant_4}
                onChange={(e) => fillmodel("assistant_4", e.target.value)}
              />
            </Grid>

            <Grid item md={12}>
              <CSButton
                // disabled={isLoading}
                // label=  {isLoading ? <CircularProgress color='inherit' /> : "Create Account"}
                label={"Send Data"}
                color={"success"}
                variant={"contained"}
                fullwidth
                onClick={coursedata}
              />
            </Grid>
          </Grid>
        </Box>
        </Box>
       

        <Box sx={{ py: 3 }}>
          <Typography variant="h5" align="center">
            Course Added
          </Typography>
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

export default AddCourse;
