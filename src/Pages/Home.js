import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CSDashboard from "../Components/CSDashboard";
import { getData } from "../Config/firebasemethods";

function Home() {
  const [data, setData] = useState([]);
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
    <div>
      <CSDashboard
        heading={"School"}
        workarea={
          <Box sx={{ p: 1.5 }}>
            <Grid container spacing={3}>
              {data.map((e) => (
                <Grid item md={3}>
                  <Card sx={{ backgroundColor: "#222", color: "aliceblue" }}>
                    <CardContent>
                      <Typography variant="h6" align="center">{e.coursename}</Typography>
                      <Typography variant="body1" align="center" >Duration : {e.duration} months</Typography>
                      <Typography variant="body1" align="center">Fees : {e.fee}$</Typography>
                      <Typography variant="body1" align="center">No Of Quizes : {e.noofquiz}</Typography>
                      <Typography variant="body1" align="center">LeadTrainer : {e.leadtrainer}</Typography>
                      <Typography variant="p" align="center">Assistants : {e.assistant_1},{e.assistant_2},{e.assistant_3},{e.assistant_4}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        }
      />
    </div>
  );
}

export default Home;
