import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import CSButton from "../Components/CSButton";
import CSDashboard from "../Components/CSDashboard";
import CSDropDown from "../Components/CSDropDown";
import CSTextField from "../Components/CSTextField";
import { sendData } from "../Config/firebasemethods";
import Navbar from "../Components/Navbar";
function RegistrationForm() {
  const [model, setmodel] = useState({});
  let fillmodel = (key, val) => {
    model[key] = val;
    setmodel({ ...model });
    console.log(model);
  };
  let date = new Date();
  let signin = () => {
    let df = model.birthdate.slice(0, 4);
    df = df * 1;
    let year = date.getFullYear();
    let diff = year - df;

    fillmodel("age", diff);
    fillmodel("registrationyear", date.getFullYear());
    fillmodel("registrationdate", date.getDate() + "-" + date.getMonth());
    fillmodel("isapprove", true);
    fillmodel("feessubmitted", true);
    fillmodel("category",'student' );

    sendData(model, "Forms/")
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // useEffect(()=>{

  // },[])
  return (
    <Box>
      <Navbar />
      <div className="box" style={{ position: 'relative', textAlign: 'center'}}>
        <Box sx={{ width: "75%", p: 3 }}>
          <Box sx={{ border: "2px solid #222", borderRadius: "25px", p: 3 }}>
            <Typography color="inherit" variant="h4">
              Registration Form
            </Typography>
            <Grid container spacing={2} sx={{ pt: 3 }}>
              <Grid item md={6}>
                <CSTextField
                  label="FirstName"
                  required={true}
                  value={model.firstname}
                  onChange={(e) => fillmodel("firstname", e.target.value)}
                />
              </Grid>
              <Grid item md={6}>
                <CSTextField
                  label="LastName"
                  value={model.lastname}
                  onChange={(e) => fillmodel("lastname", e.target.value)}
                />
              </Grid>
              <Grid item md={6}>
                <CSTextField
                  label="Email"
                  value={model.email}
                  onChange={(e) => fillmodel("email", e.target.value)}
                />
              </Grid>
              <Grid item md={6}>
                <CSTextField
                  label="Password"
                  type={'password'}
                  value={model.password}
                  onChange={(e) => fillmodel("password", e.target.value)}
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

              <Grid item md={6}>
                <CSDropDown
                  label="Section"
                  required
                  value={model.section}
                  onChange={(e) => fillmodel("section", e.target.value)}
                  datasource={[
                    {
                      id: "A",
                      displayname: "A",
                    },
                    {
                      id: "B",
                      displayname: "B",
                    },
                    {
                      id: "C",
                      displayname: "C",
                    },
                  ]}
                />
              </Grid>

              <Grid item md={6}>
                <CSTextField
                  type={"number"}
                  label="Contact Number"
                  value={model.contactnumber}
                  onChange={(e) => fillmodel("contactnumber", e.target.value)}
                />
              </Grid>
              <Grid item md={6}>
                <CSTextField
                  type={"number"}
                  label="Cnic Number"
                  value={model.cnicnumber}
                  onChange={(e) => fillmodel("cnicnumber", e.target.value)}
                />
              </Grid>

              <Grid item md={6}>
                <CSTextField
                  label="Father Name"
                  value={model.fathername}
                  onChange={(e) => fillmodel("fathername", e.target.value)}
                />
              </Grid>

              <Grid item md={6}>
                <CSTextField
                  type={"number"}
                  label="Father Cnic"
                  value={model.fathercnic}
                  onChange={(e) => fillmodel("fathercnic", e.target.value)}
                />
              </Grid>
              <Grid item md={6}>
                <CSTextField
                  type={"number"}
                  label="Father Contact"
                  value={model.fathercontact}
                  onChange={(e) => fillmodel("fathercontact", e.target.value)}
                />
              </Grid>
              <Grid item md={6}>
                <CSTextField
                  type={"number"}
                  label="Emergency Number"
                  value={model.emergencynumber}
                  onChange={(e) => fillmodel("emergencynumber", e.target.value)}
                />
              </Grid>

              <Grid item md={6}>
                <CSTextField
                  type={"date"}
                  // label="Date OF Birth"
                  helpertext={"Date of Birth"}
                  value={model.birthdate}
                  onChange={(e) => fillmodel("birthdate", e.target.value)}
                />
              </Grid>
              <Grid item md={6}>
                <CSButton
                  label={"Register"}
                  color={"success"}
                  variant={"contained"}
                  fullwidth
                  onClick={signin}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </Box>
  );
}

export default RegistrationForm;
