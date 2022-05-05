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
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";

const labTest = [
  {
    label: "Gyn Obj",
    elementname: FormControlLabel,
    disabled: false,
  },
  {
    label: "Eye",
    elementname: FormControlLabel,
    disabled: false,
  },
  {
    label: "General Surgery",
    elementname: FormControlLabel,
    disabled: false,
  },
];

export const CustomCheckBox = ({ each }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={handleChange} />}
      label={each.label}
    />
  );
};

const ReferTo = () => {
  return (
    <Box
      sx={{
        border: "1px solid #2384F5",
        position: "relative",
        width: "100%",
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
          Refer to
        </Typography>
      </Box>
      <FormControlLabel control={<Checkbox />} label={"Select All"} />

      <Grid container spacing={2} sx={{ width: "50%" }}>
        {labTest.map((each, key) => {
          return (
            <Grid item xs={3} key={key}>
              <CustomCheckBox each={each} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ReferTo;
