import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import DepartmentDetailsCards from "./DepartmentDetailsCards";

const data = [
  {
    departmentname: "emergency",
    dischargedpatient: 2,
    patientundercare: 10,
    todayregister: 5,
    color: "error.main",
  },
  {
    departmentname: "general surgery",
    dischargedpatient: 2,
    patientundercare: 10,
    todayregister: 5,
    color: "primary.main",
  },
  {
    departmentname: "Obg gyn",
    dischargedpatient: 2,
    patientundercare: 10,
    todayregister: 5,
    color: "primary.main",
  },
  {
    departmentname: "cardio",
    dischargedpatient: 2,
    patientundercare: 10,
    todayregister: 5,
    color: "primary.main",
  },
  {
    departmentname: "eye",
    dischargedpatient: 2,
    patientundercare: 10,
    todayregister: 5,
    color: "primary.main",
  },
  {
    departmentname: "pregnancy",
    dischargedpatient: 2,
    patientundercare: 10,
    todayregister: 5,
    color: "primary.main",
  },
  {
    departmentname: "ortho",
    dischargedpatient: 2,
    patientundercare: 10,
    todayregister: 5,
    color: "primary.main",
  },
  {
    departmentname: "pediatric",
    dischargedpatient: 2,
    patientundercare: 10,
    todayregister: 5,
    color: "primary.main",
  },
];

const DepartmentDetailsSection = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "repeat(2,1fr)",
        gridTemplateColumns: "repeat(4,1fr)",
        columnGap: "80px",
        rowGap: "20px",
        marginTop: "35px",
      }}
    >
      {data.map((each) => {
        return (
          <DepartmentDetailsCards
            departmentname={each.departmentname}
            dischargedpatient={each.dischargedpatient}
            patientundercare={each.patientundercare}
            todayregister={each.todayregister}
            color={each.color}
          />
        );
      })}
    </Box>
  );
};

export default DepartmentDetailsSection;
