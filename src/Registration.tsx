import React from "react";
import { Box, Button, Container, Typography, TextField } from "@mui/material";

function Registration() {
  return (
    <Box
      sx={{
        background: `url("//images.ctfassets.net/rz1oowkt5gyp/6bFuTiN5YQ78rFkHb3aJlo/b608362…/white-wave-mobile.svg") center bottom -0.5px / 100% 24% no-repeat scroll padding-box border-box, linear-gradient(60deg, rgb(82, 67, 170), rgb(237, 80, 180)) 0% 0% / auto no-repeat scroll padding-box border-box rgb(82, 67, 170)`,
        height: "100vh",
      }}
    >
      <Container
        sx={{
          width: "1200px",
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "5rem",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{
              color: "white",
              whiteSpace: "pre-line",
              lineHeight: "1.25",
              fontWeight: "500",
            }}
          >
            Trello brings all your{"\n"} tasks, teammates, and{"\n"} tools
            together
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              whiteSpace: "pre-line",
              marginBottom: "20px",
            }}
          >
            Keep everything in the same place — even if your team{"\n"} isn’t.
          </Typography>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <TextField
              // fullWidth
              variant="outlined"
              placeholder="email"
              sx={{
                width: "20rem",
                borderRadius: "5px",
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "white",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "transparent",
                  },
              }}
            />
            <Button variant="contained" sx={{ textTransform: "inherit" }}>
              Sign up - it`s free
            </Button>
          </Box>
        </Box>
        <Box>asdasd</Box>
      </Container>
    </Box>
  );
}

export default Registration;
