import { Box, Button, Container, Grid, InputBase, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <>
      {/* Main Content */}
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Side Text */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold">
              The Best Way to Get Your New Job
            </Typography>
            <Typography variant="body1" mt={2}>
              Each month, more than 3 million job seekers turn to our website in
              their search for work, making over 140,000 applications every
              single day.
            </Typography>
          </Grid>

          {/* Right Side Image */}
          <Grid item xs={12} md={6}>
            <img
              src="/team-work.jpg"
              alt="Team work"
              style={{ borderRadius: "16px", width: "100%" }}
            />
          </Grid>
        </Grid>

        {/* Search Bar */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "8px 16px",
            }}
          >
            <InputBase placeholder="Location" />
            <InputBase placeholder="Keyword" sx={{ ml: 2 }} />
            <Button variant="contained" sx={{ ml: 2 }}>
              Search
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Hero;
