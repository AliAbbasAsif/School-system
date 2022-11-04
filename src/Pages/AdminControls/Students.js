import {
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CSDataGrid from "../../Components/CSDataGrid";
import { getData } from "../../Config/firebasemethods";
import '../../App.css'

function Students() {
  const [data, setData] = useState([]);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      heeaderClassName: "tabel-header",
    },
    {
      field: "firstname",
      headerName: "FirstName",
      width: 150,
      heeaderClassName: "tabel-header",
      editable: true,
    },
    {
      field: "lastname",
      headerName: "LastName",
      width: 150,
      heeaderClassName: "tabel-header",
      editable: true,
    },
    {
      field: "age",
      headerName: "AGE",
      width: 110,
      type: "number",
      heeaderClassName: "tabel-header",
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 180,
      heeaderClassName: "tabel-header",
      editable: true,
    },
  ];
  useEffect(() => {
    getData("Forms")
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="box">
        <Box sx={{width:'100%'}}>
        <Typography align="center" variant="h4">
        Students
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
     
      {/* <Grid container spacing={3}>
          {data.map((e) => (
            <Grid item md={12}>
              <Card>
                <CardContent>
                  <Typography variant="p" sx={{ pr: 50 }}>
                    {e.firstname}
                    {e.lastname}
                  </Typography>

                  <Box sx={{ pt: 0.3 }}>
                    <Typography variant="p">
                      ContactNumber: {e.contactnumber}
                    </Typography>
                  </Box>
                  <Box sx={{ pt: 0.3 }}>
                    <Typography variant="p">
                      Date Of Birth: {e.birthdate}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid> */}
    </div>
  );
}

export default Students;
