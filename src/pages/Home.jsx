import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import DepartmentDetailsSection from "../../components/DepartmentDetailsSection";
import DistrictwisehospitalreportSection from "../../components/DistrictwisehospitalreportSection";
import StatusSection from "../../components/StatusSection";

const Home = () => {
  return (
    <Box>
      <StatusSection />
      <DepartmentDetailsSection />
      <DistrictwisehospitalreportSection />
    </Box>
  );
};

export default Home;
