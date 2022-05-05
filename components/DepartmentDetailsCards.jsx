import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DepartmentDetailsCards = ({
  departmentname,
  dischargedpatient,
  patientundercare,
  todayregister,
  color,
}) => {
  const navigate = useNavigate();
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
          onClick={() => navigate("/newadmission")}
        >
          new
        </Button>
      </Stack>
      <Stack direction={"column"} bgcolor="bggray.main" sx={{ py: "10px" }}>
        <Button sx={{ width: "100%", borderRadius: "0" }} size="small">
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-between",
              width: "100%",
            }}
            m={0}
            p={0}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{ whiteSpace: "nowrap", textTransform: "capitalize" }}
            >
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
        </Button>
        <Button sx={{ width: "100%", borderRadius: "0" }} size="small">
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-between",
              width: "100%",
            }}
            m={0}
            p={0}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{ whiteSpace: "nowrap", textTransform: "capitalize" }}
            >
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
        </Button>
        <Button sx={{ width: "100%", borderRadius: "0" }} size="small">
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-between",
              width: "100%",
            }}
            m={0}
            p={0}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{ whiteSpace: "nowrap", textTransform: "capitalize" }}
            >
              Today Register
            </Typography>
            <Typography
              variant="body1"
              color="error"
              sx={{
                fontWeight: "600",
                width: "20%",
                textAlign: "center",
              }}
            >
              {todayregister}
            </Typography>
          </Stack>
        </Button>
      </Stack>
    </Stack>
  );
};

export default DepartmentDetailsCards;
