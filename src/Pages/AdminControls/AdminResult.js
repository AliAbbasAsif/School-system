import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import CSDropDown from "../../Components/CSDropDown";
import CSSwitch from "../../Components/CSSwitch";
import CSButton from "../../Components/CSButton";

function AdminResult() {
  const [model, setModel] = useState({});
  const [coursestatus, setcoursestatus] = useState(false);
  const [resultData, setresultData] = useState([
    {
      name: "Abbas",
      marks: 75,
      rollno: 135,
      result: "Pass",
    },
    {
      name: "Abbas",
      marks: 75,
      rollno: 135,
      result: "Pass",
    },
    {
      name: "Abbas",
      marks: 75,
      rollno: 135,
      result: "Pass",
    },
    {
      name: "Abbas",
      marks: 75,
      rollno: 135,
      result: "Pass",
    },
    {
      name: "Abbas",
      marks: 75,
      rollno: 135,
      result: "Pass",
    },
    {
      name: "Abbas",
      marks: 75,
      rollno: 135,
      result: "Pass",
    },
    {
      name: "Abbas",
      marks: 75,
      rollno: 135,
      result: "Pass",
    },
  ]);
  let submitform = () => {
    model.isShowResult = coursestatus;
    model.result = resultData;
    console.log(model);
  };
  return (
    <div className="">
      <Box sx={{ width: "100%" }}>
        <Typography variant="h4">Create Result</Typography>
        <Box sx={{ p: 2 }}>
          <Grid container>
            <Grid md={4} item>
              <CSSwitch
                value={coursestatus}
                label={"courses"}
                onChange={(e) => setcoursestatus(e.target.checked)}
              />
            </Grid>
            <Grid md={8} item>
              <CSDropDown
                onChange={(e) => setModel({ ...model, course: e.target.value })}
                label={"Courses"}
                fullWidth
                datasource={[
                  {
                    id: "Web And Mobile Application",
                    displayname: "Web And Mobile Application",
                  },
                  {
                    id: "Graphics Designing",
                    displayname: "Graphics Designing",
                  },
                  {
                    id: "Freelancing",
                    displayname: "Freelancing",
                  },
                  {
                    id: "Hacking",
                    displayname: "Hacking",
                  },
                  {
                    id: "Flutter",
                    displayname: "Flutter",
                  },
                  {
                    id: "Python",
                    displayname: "Python",
                  },
                ]}
              />
            </Grid>
            <Grid md={12} item>
              <Box>
                <table>
                  {resultData.map((x, i) => (
                    <tr>
                      <td>{x.name}</td>
                      <td>{x.rollno}</td>
                      <td>{x.result}</td>
                      <td>{x.marks}</td>
                    </tr>
                  ))}
                </table>
              </Box>
            </Grid>
            <Grid md={12} item>
              <CSButton label={"Submit"} onClick={submitform} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default AdminResult;
