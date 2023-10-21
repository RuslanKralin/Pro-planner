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

          <Button sx={styleButton}>
            {capitalizeFirstLetter("Возможности")}
            <ExpandMoreIcon style={{ marginRight: "10px" }} />
          </Button>
          <Button sx={styleButton}>
            Решения
            <ExpandMoreIcon style={{ marginRight: "10px" }} />
          </Button>
          <Button sx={styleButton}>
            Планы
            <ExpandMoreIcon style={{ marginRight: "10px" }} />
          </Button>
          <Button sx={styleButton}>
            Ресурсы
            <ExpandMoreIcon style={{ marginRight: "10px" }} />
          </Button>

          <Box sx={{ marginLeft: "326px" }}>
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
