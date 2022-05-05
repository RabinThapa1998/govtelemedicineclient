import React, { createElement, useState } from "react";
import {
  Box,
  Divider,
  Stack,
  Typography,
  Button,
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";

import RegistrationDetails from "../../components/RegistrationDetails";
import GeneralExamination from "../../components/GeneralExamination";
import DermatologyDetails from "../../components/DermatologyDetails";
import LabTests from "../../components/LabTests";
import Queries from "../../components/Queries";
import ReferTo from "../../components/ReferTo";
export const BlueCircle = ({ number }) => {
  return (
    <Box
      sx={{
        height: "60px",
        width: "60px",
        borderRadius: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "60px",
        minHeight: "60px",
      }}
      bgcolor={"primary.main"}
    >
      <Typography
        variant="body1"
        color="common.white"
        sx={{ fontSize: "30px" }}
      >
        {number}.
      </Typography>
    </Box>
  );
};

export const VerticalLine = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "1px",
        borderLeft: "2px solid #2384F5",
      }}
    ></Box>
  );
};

const sectionsData = [
  { sectionname: RegistrationDetails },
  { sectionname: GeneralExamination },
  { sectionname: DermatologyDetails },
  { sectionname: LabTests },
  { sectionname: Queries },
  { sectionname: ReferTo },
];
const DynamicSections = (elementName) => {
  return React.createElement(elementName, null, null);
};
const NewAdmission = () => {
  return (
    <Box>
      <Stack direction={"column"} mt={"60px"}>
        {sectionsData.map((eachSection, key) => {
          return (
            <Stack direction={"row"}>
              <Stack
                direction={"column"}
                sx={{
                  alignItems: "center",
                  marginTop: "-25px",
                  marginRight: "20px",
                }}
              >
                <BlueCircle number={key + 1} />
                <VerticalLine />
              </Stack>
              {DynamicSections(eachSection.sectionname)}
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};

export default NewAdmission;
