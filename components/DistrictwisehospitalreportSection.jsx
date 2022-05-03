import React, { useState } from "react";
import { Box, Collapse, Stack, Typography, Button } from "@mui/material";
import Districtwisehospitalreportheading from "./Districtwisehospitalreportheading";
import Districtwisehospitalreportbody from "./Districtwisehospitalreportbody";

const DistrictwisehospitalreportSection = () => {
  return (
    <Box>
      <Districtwisehospitalreportheading />
      <Districtwisehospitalreportbody />
    </Box>
  );
};

export default DistrictwisehospitalreportSection;
