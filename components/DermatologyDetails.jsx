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

const generalexamination = [
  {
    label: "Systemic Examination",
    elementname: TextField,
    disabled: false,
    multiline: true,
    rows: 4,
    fullWidth: true,
  },
  {
    label: "Character of Skin Lesion",
    elementname: TextField,
    disabled: false,
    type: "number",
    fullWidth: true,
  },
  {
    label: "Color",
    elementname: TextField,
    disabled: false,
  },
  {
    label: "Loss of Sensation",
    elementname: TextField,
    disabled: false,
  },
  {
    label: "Loss of Sensation",
    elementname: TextField,
    disabled: false,
  },
  {
    label: "Loss of Sensation",
    elementname: TextField,
    disabled: false,
  },
  {
    label: "Loss of Sensation",
    elementname: TextField,
    disabled: false,
  },
  {
    label: "Loss of Sensation",
    elementname: TextField,
    disabled: false,
  },
  {
    label: "Loss of Sensation",
    elementname: TextField,
    disabled: false,
  },
];

export const CustomElement = ({ element, children, props }) => {
  const [value, setValue] = useState(null);
  props.value = value;
  props.onChange = (e) => setValue(e.target.value);

  return React.createElement(element, props, children);
};

export const CustomSelectElement = ({ element, children, props }) => {
  const [value, setValue] = useState(`${props.label == "Sex" ? "male" : null}`);

  props.value = value;
  console.log(props);
  props.onChange = (e) => setValue(e.target.value);
  return React.createElement(element, props, children);
};
const DermatologyDetails = () => {
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
          Dermatology Details
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {generalexamination.map((each, key) => {
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
    </Box>
  );
};

export default DermatologyDetails;
