import React from "react";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, Container } from "@mui/material";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";

const styleButton = {
  fontFamily: "Playpen Sans",
  color: "rgb(23, 43, 77)",
  outline: "none",
  display: "flex",
  alignItems: "center",
  padding: "0 20px 0 0",
  // marginRight: "40px",
  transition: "ease 0.1s",
  "&:hover": {
    color: "rgb(0, 101, 255)",
  },
};

function Header() {
  function capitalizeFirstLetter(btnName: string) {
    return btnName.charAt(0).toUpperCase() + btnName.slice(1).toLowerCase();
  }

  return (
    <>
      <Box>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            height: "60px",
            margin: "0px auto",
            maxWidth: "1320px !important",
          }}
        >
          <WifiTetheringIcon
            style={{
              color: "rgb(0, 82, 204)",
              cursor: "pointer",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              whiteSpace: "nowrap",
              marginRight: "20px",
              cursor: "pointer",
            }}
          >
            <Typography sx={{ color: "rgb(0, 82, 204)", fontWeight: "600" }}>
              PRO-PLANNER
            </Typography>
            <Typography sx={{ fontWeight: "800" }}> Application</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button sx={styleButton}>
              {capitalizeFirstLetter("Features")}
              <ExpandMoreIcon />
            </Button>
            <Button sx={styleButton}>
              Solutions
              <ExpandMoreIcon />
            </Button>
            <Button sx={styleButton}>
              Plans
              <ExpandMoreIcon />
            </Button>
            <Button sx={styleButton}>Pricing</Button>
            <Button sx={styleButton}>
              Resources
              <ExpandMoreIcon />
            </Button>
          </Box>

          <Box sx={{ marginLeft: "auto" }}>
            <Button
              sx={{
                fontFamily: "Playpen Sans",
                fontWeight: "600",
                letterSpacing: "1px",
                wordSpacing: "5px",
                padding: "20px 35px",
                color: "white",
                whiteSpace: "nowrap",
                backgroundColor: "#172b4d",
                transition: "ease 0.1s",
                "&:hover": {
                  color: "white",
                  outline: "none",
                  backgroundColor: "#172b4d",
                  opacity: "0.8",
                },
              }}
            >
              Перейти к доскам
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Header;
