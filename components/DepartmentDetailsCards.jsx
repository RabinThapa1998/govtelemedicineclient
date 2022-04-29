import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

const DepartmentDetailsCards = ({
  departmentname,
  dischargedpatient,
  patientundercare,
  todayregister,
  color,
}) => {
  return (
    <Stack
      direction={"column"}
      sx={{
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          height: "54px",
          px: "8px",
        }}
        bgcolor={color}
      >
        <Typography
          variant="h6"
          color="common.white"
          sx={{ textTransform: "capitalize", fontWeight: "600" }}
        >
          {departmentname}
        </Typography>

        <Button
          variant="contained"
          sx={{
            borderRadius: "100px",
            width: "64px",
            height: "21px",
            textTransform: "capitalize",
          }}
          size="small"
          color={"greenbutton"}
          startIcon={<span class="material-symbols-outlined">add</span>}
        >
          new
        </Button>
      </Stack>
      <Stack
        direction={"column"}
        bgcolor="bggray.main"
        sx={{ px: "8px", py: "10px" }}
      >
        <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
          <Typography variant="body1" color="initial">
            Discharged Patient
          </Typography>
          <Typography
            variant="body1"
            color="error"
            sx={{ fontWeight: "600", width: "20%", textAlign: "center" }}
          >
            {dischargedpatient}
          </Typography>
        </Stack>
        <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
          <Typography variant="body1" color="initial">
            Patient Under Care
          </Typography>
          <Typography
            variant="body1"
            color="error"
            sx={{ fontWeight: "600", width: "20%", textAlign: "center" }}
          >
            {patientundercare}
          </Typography>
        </Stack>
        <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
          <Typography variant="body1" color="initial">
            Today Register
          </Typography>
          <Typography
            variant="body1"
            color="error"
            sx={{ fontWeight: "600", width: "20%", textAlign: "center" }}
          >
            {todayregister}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DepartmentDetailsCards;
