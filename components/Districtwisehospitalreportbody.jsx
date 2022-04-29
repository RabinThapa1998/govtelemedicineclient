import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import DistrictDataTable from "../utils/DistrictDataTable";

const Districtwisehospitalreportbody = () => {
  return (
    <Stack direction={"row"}>
      <DistrictDataTable />
    </Stack>
  );
};

export default Districtwisehospitalreportbody;
