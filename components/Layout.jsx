import { Box } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ px: "24px" }}>{children}</Box>
    </Box>
  );
};

export default Layout;
