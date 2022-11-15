import {
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { getData } from "../Config/firebasemethods";

function Courses() {
  const [data, setData] = useState([]);
  const [fullpageloader, setfullpageloader] = useState(false);
  let navigate = useNavigate();
  let teleport = (e) => {
    // console.log(e)
    navigate('/quiz', {
      state: {
          item:{e}
      }
  })
  };
  useEffect(() => {
    setfullpageloader(true);
    getData("Courses")
      .then((res) => {
        console.log(res);
        setfullpageloader(false);
        setData(res);
      })
      .catch((err) => {
        setfullpageloader(false);
        console.log(err);
      });
  }, []);
  
  return fullpageloader ? (
    <Box sx={{ ml: 50 }}>
      <CircularProgress sx={{ width: "70%" }} size="250px" />
      <h1>Getting Data Thank you for your patience ....</h1>
    </Box>
  ) : (
    <div>
      <Navbar />
      <Box sx={{ p: 4.5 }}>
        <Grid container spacing={2}>
          {data.map((e) => (
            <Grid item md={3} sx={6}>
              <Card
                onClick={() => teleport(e)}
                sx={{
                  backgroundColor: "#222",
                  color: "aliceblue",
                  cursor: "pointer",
                }}
              >
                <CardContent>
                  <Typography variant="h6" align="center">
                    {e.coursename}
                  </Typography>
                  <Typography variant="body1" align="center">
                    Duration : {e.duration} months
                  </Typography>
                  <Typography variant="body1" align="center">
                    Fees : {e.fee}$
                  </Typography>
                  <Typography variant="body1" align="center">
                    No Of Quizes : {e.noofquiz}
                  </Typography>
                  <Typography variant="body1" align="center">
                    LeadTrainer : {e.leadtrainer}
                  </Typography>
                  <Typography variant="p" align="center">
                    Assistants :{e.Assistants}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Courses;
