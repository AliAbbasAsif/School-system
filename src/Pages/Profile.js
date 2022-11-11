import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar";

function Profile() {
  return (
    <div>
      <Navbar />
      <Box>
        <Grid container spacing={2}>
          <Box sx={{ p: 10 , display:'flex',justifyContent:'center',alignItems:'center' }}>
            <Grid item md={12} sx={{ width: "100%" }}>
              <Box
                sx={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                  p: 3,
                  borderRadius:'15px'
                }}
              >
                <Box
                  sx={{
                    // justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <img
                    style={{ borderRadius: "15px" }}
                    src="https://i.redd.it/prr1ahlv11g41.jpg"
                    height="100px"
                    width="100px"
                  />
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{ ml: 4, fontWeight: "bold", fontSize: "26px" }}
                    >
                      UserXYZ
                    </Typography>
                    <Typography variant="body1" sx={{ ml: 4, color: "gray" }}>
                      Senior Software Engineer
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    mt: 3,
                    display: "flex",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ ml: 4, textDecoration: "underline" }}
                  >
                    About
                  </Typography>
                  <Typography variant="p" sx={{ ml: 4, width:'25%',color: "grey" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean viverra molestie dui ac consectetur. Maecenas felis
                    ligula, porttitor ultricies augue vitae, cursus laoreet
                    ante. Aenean id libero euismod, hendrerit dui ut, sodales
                    mi. Integer ut
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </div>
  );
}

export default Profile;
