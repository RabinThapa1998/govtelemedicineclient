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
  Paper,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";

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

const Queries = () => {
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
          Queries
        </Typography>
      </Box>
      <Typography
        variant="body1"
        color="initial"
        sx={{ fontSize: "20px" }}
        ml={-5}
        mt={-2}
        mb={2}
      >
        Questions for the HUB
      </Typography>
      <Stack spacing={6}>
        <TextField
          sx={{ height: "50px", width: "100%" }}
          my={2}
          label="Question 1"
          fullWidth
          multiline
          rows={2}
        />
        <TextField
          sx={{ height: "50px", width: "100%" }}
          my={2}
          label="Question 2"
          fullWidth
          multiline
          rows={2}
        />
        <Button
          variant="contained"
          sx={{ width: "20%", borderRadius: "50px" }}
          size={"large"}
          color="error"
          startIcon={
            <span
              className="material-symbols-outlined"
              sx={{ fontSize: "24px", fontWeight: "700" }}
            >
              add
            </span>
          }
        >
          <Typography
            variant="body1"
            color="common.white"
            sx={{ whiteSpace: "nowrap", fontSize: "20px" }}
          >
            Add Questions
          </Typography>
        </Button>
      </Stack>
    </Box>
  );
};

export default Queries;
