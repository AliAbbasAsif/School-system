import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CSButton from "../Components/CSButton";
import CSTextField from "../Components/CSTextField";
import { LoginUser } from "../Config/firebasemethods";

function Login() {
  const [model, setmodel] = useState({});
  const [loader, setloader] = useState(false);

  let navigate = useNavigate();
  let fillmodel = (key, val) => {
    model[key] = val;
    setmodel({ ...model });
    // console.log(model);
  };
  let login = () => {
    setloader(true);
    LoginUser(model)
      .then((success) => {
        // console.log(success);
        setloader(false);
        navigate(`/admin/students`, {
          state: success,
        });
      })
      .catch((err) => {
        console.log(err);
        setloader(false);
      });
  };
  return (
    <div
      className="header box"
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={{ width: "45%", pt: 2 }}>
        <Box sx={{ border: "2px solid #222", borderRadius: "25px", p: 3 }}>
          <Typography color="inherit" variant="h4">
            Login
          </Typography>
          <Grid container spacing={2} sx={{ pt: 5 }}>
            <Grid item md={12}>
              <CSTextField
                label="Email"
                required={true}
                value={model.email}
                type={"email"}
                onChange={(e) => fillmodel("email", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <CSTextField
                label="Password"
                required={true}
                value={model.password}
                type={"password"}
                onChange={(e) => fillmodel("password", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <CSButton
                label={loader ? <CircularProgress /> : "Login"}
                color={"success"}
                variant={"contained"}
                fullwidth
                onClick={login}
                disabled={loader}
              />
            </Grid>
          </Grid>
          <Grid sx={{ p: 1.5 }}>
            <Typography variant="span">Dont Have An Account ? </Typography>
            <Typography variant="span" sx={{ textDecoration: "underline" }}>
              SignUp
            </Typography>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Login;
