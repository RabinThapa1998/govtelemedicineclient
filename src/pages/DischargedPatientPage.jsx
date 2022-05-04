import React from "react";
import { Box, Divider, Stack, Typography, Button } from "@mui/material";
import DischargedPatientDataTable from "../../utils/DischargedPatientDataTable";
import FiscalYeardropdown from "../../components/FiscalYeardropdown";

const DischargedPatientPage = () => {
  return (
    <Box>
      <Stack
        direction={"row"}
        bgcolor={"bggray.main"}
        sx={{
          width: "100%",
          borderRadius: "4px",
          height: "50px",
          alignItems: "center",
        }}
        p="10px"
        my="20px"
      >
        <Typography variant="body1" color="initial">
          Registered Patients /
        </Typography>
        <Typography variant="body1" color="initial">
          Total:13 Items
        </Typography>
      </Stack>
      <Stack direction={"row"} my="20px">
        <Stack direction={"row"} sx={{ alignItems: "center" }}>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontWeight: "bold" }}
          >
            Year
          </Typography>
          <FiscalYeardropdown />
        </Stack>
        <Stack direction={"row"} sx={{ alignItems: "center" }}>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontWeight: "bold" }}
          >
            District
          </Typography>
          <FiscalYeardropdown />
        </Stack>
        <Button variant="outlined" color="blackdropdown">
          Export Data
        </Button>
      </Stack>
      <DischargedPatientDataTable />
    </Box>
  );
};

export default DischargedPatientPage;
