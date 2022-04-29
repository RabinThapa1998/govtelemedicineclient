import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import StatusSectionFiscalYear from "./StatusSectionFiscalYear";
import govtelelogo from "/nepgovlogo.png";

const StatusSection = () => {
  return (
    <Stack direction={"row"} sx={{ alignItems: "center", marginTop: "25px" }}>
      <Stack
        direction={"row"}
        sx={{ maxWidth: "30vw", width: "100%", alignItems: "center" }}
      >
        <img
          src={govtelelogo}
          alt="government-logo"
          style={{ height: "96px", width: "111px" }}
        />
        <Stack
          direction={"column"}
          sx={{ textAlign: "center", marginLeft: "50px" }}
        >
          <Typography
            variant="p"
            sx={{ textTransform: "capitalize", fontSize: "12px" }}
          >
            Government of Nepal
          </Typography>
          <Typography
            variant="p"
            sx={{ textTransform: "capitalize", fontSize: "12px" }}
          >
            Ministry of health & Population
          </Typography>
          <Typography
            variant="p"
            sx={{ textTransform: "capitalize", fontSize: "12px" }}
          >
            Department of health services
          </Typography>
          <Typography
            variant="p"
            sx={{
              textTransform: "capitalize",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Curative service division
          </Typography>
          <Typography
            variant="p"
            sx={{
              textTransform: "capitalize",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Telemedicine system
          </Typography>
        </Stack>
      </Stack>
      <StatusSectionFiscalYear />
    </Stack>
  );
};

export default StatusSection;
