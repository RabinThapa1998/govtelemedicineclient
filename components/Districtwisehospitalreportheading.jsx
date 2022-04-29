import React from "react";
import districtwisebg from "/districtwisebg.jpg";
import { Box, Stack, Typography } from "@mui/material";
import { ViewFullReportDropdown } from "../utils/Dropdown";

const Districtwisehospitalreportheading = () => {
  return (
    <Stack
      sx={{
        position: "relative",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "80px -24px",
        padding: "24px",
      }}
      direction={"row"}
    >
      <img
        src={districtwisebg}
        alt="background"
        style={{
          height: "100%",
          width: "100%",
          backgroundSize: "cover",
          position: "absolute",
          top: "0px",
          left: "0px",
          zIndex: "0",
        }}
      />
      <Typography
        variant="h4"
        color="common.white"
        sx={{ position: "relative", zIndex: "1", fontWeight: "bold" }}
      >
        District Wise Hospital Report
      </Typography>
      <ViewFullReportDropdown
        dropdownname={"view full report"}
        dropdownitems={["one", "two", "three"]}
      />
    </Stack>
  );
};

export default Districtwisehospitalreportheading;
