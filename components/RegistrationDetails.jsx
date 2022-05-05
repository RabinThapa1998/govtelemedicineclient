import React, { useState } from "react";
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

const registrationDetails = [
  {
    label: "Reg Date",
    elementname: TextField,
    value: "19/01/2019",
    disabled: true,
  },
  {
    label: "Reg No",
    elementname: TextField,
    value: "TMZ123123213#123",
    disabled: true,
  },
  {
    label: "Full Name",
    elementname: TextField,
    disabled: false,
  },
  {
    label: "Age",
    elementname: TextField,
    type: "number",
    disabled: false,
  },
  {
    label: "Caste Code",
    elementname: TextField,
    type: "number",
    disabled: false,
  },
  {
    label: "Sex",
    elementname: TextField,
    type: "number",
    disabled: false,
    select: true,
    options: ["male", "female", "others"],
    fullWidth: true,
  },
  {
    label: "Mobile",
    elementname: TextField,
    type: "tel",
    disabled: false,
  },
  {
    label: "Education",
    elementname: TextField,
    select: true,
    options: ["primary", "+2", "bachelors"],
    disabled: false,
    fullWidth: true,
  },
  {
    label: "Occupation",
    elementname: TextField,
    select: true,
    options: ["Doctor", "Pilot", "Engineer"],
    disabled: false,
    fullWidth: true,
  },
  {
    label: "Remarks",
    elementname: TextField,
    disabled: false,
  },
];

const addressData = [
  {
    label: "Province",
    elementname: TextField,
    select: true,
    options: ["1", "2", "3"],
    disabled: false,
    fullWidth: true,
  },
  {
    label: "District",
    elementname: TextField,
    select: true,
    options: ["Morang", "Jhapa", "Kathmandu"],
    disabled: false,
    fullWidth: true,
  },
  {
    label: "Municipality",
    elementname: TextField,
    select: true,
    options: ["Pathari", "Damak", "Biratnagar"],
    disabled: false,
    fullWidth: true,
  },
  {
    label: "Ward",
    elementname: TextField,
    select: true,
    options: ["1", "2", "3"],
    disabled: false,
    fullWidth: true,
  },
  {
    label: "Tole",
    elementname: TextField,
    select: true,
    options: ["Sunakhari", "manohara", "mahadev"],
    disabled: false,
    fullWidth: true,
  },
];
export const CustomElement = ({ element, children, props }) => {
  const [value, setValue] = useState(null);
  props.value = value;
  props.onChange = (e) => setValue(e.target.value);

  return React.createElement(element, props, children);
};

export const CustomSelectElement = ({ element, children, props }) => {
  let defaultValue;
  if (props.label == "Sex") {
    defaultValue = "male";
  } else if (props.label == "Education") {
    defaultValue = "bachelors";
  } else if (props.label == "Occupation") {
    defaultValue = "Engineer";
  } else if (props.label == "Province") {
    defaultValue = 1;
  } else if (props.label == "Ward") {
    defaultValue = 1;
  } else {
    defaultValue = null;
  }
  const [value, setValue] = useState(defaultValue);

  props.value = value;
  console.log(props);
  props.onChange = (e) => setValue(e.target.value);
  return React.createElement(element, props, children);
};

const RegistrationDetails = () => {
  return (
    <Box
      sx={{
        border: "1px solid #2384F5",
        position: "relative",
      }}
      mb={10}
      p={8}
    >
      <Box
        bgcolor={"darkblue.main"}
        sx={{
          width: "auto",
          position: "absolute",
          top: "-30px",
          left: "-1px",
          zIndex: "10",
          height: "60px",
          margin: "auto",
          borderRadius: "100px",
          display: "flex",
          alignItems: "center",
        }}
        px={2}
      >
        <Typography
          variant="body1"
          color="common.white"
          sx={{
            position: "relative",
            fontSize: "24px",
            margin: "auto auto",
            textAlign: "center",
            height: "auto",
            fontWeight: "bold",
          }}
        >
          Registration Details
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {registrationDetails.map((each, key) => {
          console.log(each);
          if (!each.select) {
            return (
              <Grid item xs={3} key={key}>
                <CustomElement
                  element={each.elementname}
                  props={each}
                  children={null}
                />
              </Grid>
            );
          } else {
            const MenuItems = each.options.map((each, key) => {
              return (
                <MenuItem key={key} value={each}>
                  {each}
                </MenuItem>
              );
            });
            return (
              <Grid item xs={3} key={key}>
                <CustomSelectElement
                  element={each.elementname}
                  props={each}
                  children={MenuItems}
                />
              </Grid>
            );
          }
        })}
      </Grid>
      <Typography
        variant="body1"
        color="initial"
        sx={{ fontSize: "24px" }}
        mt={"40px"}
        mb={"10px"}
      >
        Address
      </Typography>
      <Grid container spacing={2}>
        {addressData.map((each) => {
          const MenuItems2 = each.options.map((each, key) => {
            return (
              <MenuItem key={key} value={each}>
                {each}
              </MenuItem>
            );
          });
          return (
            <Grid item xs={3}>
              <CustomSelectElement
                element={each.elementname}
                props={each}
                children={MenuItems2}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default RegistrationDetails;
