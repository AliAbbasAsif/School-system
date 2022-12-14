import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CSDataGrid from "../../Components/CSDataGrid";
import { checkUser, getData } from "../../Config/firebasemethods";
import "../../App.css";
import { setUserId } from "firebase/analytics";
import { useNavigate, useParams } from "react-router-dom";

function Students() {
  const [data, setData] = useState([]);
  // const [fullpageloader, setfullpageloader] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
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
      field: "age",
      headerName: "AGE",
      width: 110,
      type: "number",
      heeaderClassName: "tabel-header",
      editable: true,
    },
    {
      field: "contactnumber",
      headerName: "ContactNumber",
      width: 130,
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
    {
      field: "registrationyear",
      headerName: "Registration Year",
      width: 180,
      heeaderClassName: "tabel-header",
      editable: true,
    },
  ];
  useEffect(() => {
    // setfullpageloader(true);
    getData("Forms")
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // checkUser()
    //   .then((res) => {
    //     console.log(res);
    //     if (params.id == res) {
    //       setfullpageloader(false);
    //       setUserId(res);
    //     } else {
    //       setfullpageloader(false);
    //       navigate("/");
    //     }
    //   })
      // .catch((err) => {
      //   console.log(err);
      // });
  }, []);
  return (
  // fullpageloader ? (
  //   <>
  //     <CircularProgress sx={{width:'70%'}}/>
  //     <h1>Checking admin Verification Thank you for your patience ....</h1>
  //   </>
  // ) : (
    <div className="box">
      <Box sx={{ p: 3, width: "87vw" }}>
        <Box sx={{ py: 6 }}>
          <Typography variant="h3" sx={{ py: 2 }} align="center">
            Students Login
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

export default Students;
