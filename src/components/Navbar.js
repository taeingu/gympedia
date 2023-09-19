import React from "react";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

import Logo from "../assets/images/logo.png";

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: "123px", xs: "40px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
    }}
    px="20px"
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: "100px", margin: "0px 20px" }}
      />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#fff",
          borderBottom: "3px solid #ED5D2C",
        }}
      >
        <Typography fontSize="28px">
          Home
        </Typography>
        
      </Link>
      <a href="#exercises" style={{ textDecoration: "none", color: "#fff" }}>
      <Typography fontSize="28px">
          Exercises
        </Typography>
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
