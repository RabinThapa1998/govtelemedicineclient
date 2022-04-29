import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import FiscalYeardropdown from "./FiscalYeardropdown";
import registered from "/admitted.png";
import discharged from "/discharged.png";
import undercare from "/undercare.png";

const data = [
  {
    statuslogo: undercare,
    patientnumber: 30,
    title1: "patient",
    title2: "undercare",
  },
  {
    statuslogo: discharged,
    patientnumber: 25,
    title1: "patient",
    title2: "discharged",
  },
  {
    statuslogo: registered,
    patientnumber: 30,
    title1: "Today's",
    title2: "registered",
  },
];

export const PatientStatus = ({ patientdata }) => {
  return (
    <Stack direction={"column"}>
      <Stack direction={"row"} sx={{ alignItems: "center" }}>
        <img
          src={patientdata.statuslogo}
          alt="logo"
          style={{ height: "40px", width: "40px", objectFit: "contain" }}
        />
        <Stack
          direction={"column"}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Typography
            variant="p"
            color="initial"
            sx={{ textTransform: "capitalize" }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: "12px", marginBottom: "0px", lineHeight: "5px" }}
            >
              {patientdata.title1}
            </Typography>
            {patientdata.title2}
          </Typography>
        </Stack>
      </Stack>
      <Typography variant="h2" color="initial" sx={{ textAlign: "center" }}>
        {patientdata.patientnumber}
      </Typography>
    </Stack>
  );
};
const StatusSectionFiscalYear = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        p: "10px",
        maxWidth: "70vw",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
      }}
      className="bgstatus"
    >
      <Stack direction={"column"}>
        <Typography variant={"p"}>Quick Look For</Typography>
        <Typography variant={"p"}>Fiscal Year</Typography>
        <FiscalYeardropdown />
      </Stack>
      {data.map((each) => {
        return <PatientStatus patientdata={each} />;
      })}
    </Stack>
  );
};

export default StatusSectionFiscalYear;
