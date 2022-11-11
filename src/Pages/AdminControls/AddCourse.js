import { Box, Chip, CircularProgress, Grid, Typography } from "@mui/material";
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
  const [Assistant, SetAssistant] = useState("");
  const [listofAssistant, SetlistofAssistant] = useState([]);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 200,
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
      field: "fee",
      headerName: "Fees",
      width: 110,
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
      field: "leadtrainer",
      headerName: "Lead Trainer",
      width: 110,
      heeaderClassName: "tabel-header",
      editable: true,
    },
    {
      field: "Assistants",
      headerName: "Assistants",
      width: 220,
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
        <Box sx={{ width: "60%", p: 3 }}>
          <Box sx={{ border: "2px solid #222", borderRadius: "25px", p: 3 }}>
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
                  label="Status"
                  required={true}
                  value={model.status}
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
                  label="Assistant "
                  required={true}
                  onChange={(e) => {
                    SetAssistant(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6}>
                <CSButton
                  label={"Add Assistant"}
                  color={"success"}
                  variant={"contained"}
                  onClick={() => {
                    listofAssistant.push(Assistant);
                    SetlistofAssistant([...listofAssistant]);
                    setmodel({ ...model, Assistants: [...listofAssistant] });
                  }}
                />
              </Grid>
              <Grid item md={12}>
              <Box sx={{px:1}}>
                  {
                    listofAssistant.map((x,id)=>(
                      <Chip label={`Assistant ${id+1}:${x}` } sx={{m:0.3,backgroundColor:'purple',color:'white'}} />
                    ))
                  }
                </Box>
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
