import {
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getData } from "../../Config/firebasemethods";
import "../../App.css";
import CSDataGrid from "../../Components/CSDataGrid";

function AdminTrainer() {
  const [data, setData] = useState([]);
  const [fullpageloader, setfullpageloader] = useState(false);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 200,
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
      field: "contactnumber",
      headerName: "Contact",
      width: 110,
      type: "number",
      heeaderClassName: "tabel-header",
      editable: true,
    },
    {
      field: "course",
      headerName: "Course",
      width: 140,
      type: "number",
      heeaderClassName: "tabel-header",
      editable: true,
    },
    {
      field: "qualification",
      headerName: "Qualification",
      width: 140,
      heeaderClassName: "tabel-header",
      editable: true,
    },
    {
      field: "otherqualification",
      headerName: "OtherQualification",
      width: 180,
      heeaderClassName: "tabel-header",
      editable: true,
    },
    {
      field: "cnicnumber",
      headerName: "Cnic Number",
      width: 160,
      heeaderClassName: "tabel-header",
      editable: true,
    },
  ];
  useEffect(() => {
    setfullpageloader(true);
    getData("Trainer Forms")
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
    <div className="box">
      <Box sx={{ p: 3, width: "80vw" }}>
        <Box sx={{ py: 6 }}>
          <Typography variant="h3" sx={{ py: 2 }} align="center">
            Trainers
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

export default AdminTrainer;
