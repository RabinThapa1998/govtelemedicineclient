import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import DistrictDataTable, {
  CustomDistrictDataTable,
} from "../utils/DistrictDataTable";

const Districtwisehospitalreportbody = () => {
  return (
    <Stack direction={"column"}>
      {/* <DistrictDataTable /> */}
      <CustomDistrictDataTable />
    </Stack>
  );
};

export default Districtwisehospitalreportbody;
