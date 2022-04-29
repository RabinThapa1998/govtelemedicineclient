import { Box, Stack, Typography, Avatar } from "@mui/material";
import React from "react";
import Dropdown from "../utils/Dropdown";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        justifyContent: "space-between",
        height: "72px",
        alignItems: "center",
        px: "24px",
      }}
      bgcolor={"primary.light"}
    >
      <Stack direction={"row"}>
        <Typography
          variant="h5"
          color={"primary"}
          sx={{ fontWeight: "bold", marginRight: "50px" }}
        >
          Kathmandu DH
        </Typography>
        <Dropdown
          dropdownname="New Admission"
          dropdownitems={["admission1", "admission2", "addmission3"]}
        />
        <Dropdown
          dropdownname="Under care"
          dropdownitems={["admission1", "admission2", "addmission3"]}
        />
        <Dropdown
          dropdownname="Discharged patient"
          dropdownitems={["admission1", "admission2", "addmission3"]}
        />
        <Dropdown
          dropdownname="Manage"
          dropdownitems={["admission1", "admission2", "addmission3"]}
        />
      </Stack>
      <Stack
        direction={"row"}
        spacing={2}
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <span class="material-symbols-outlined">mail</span>
        <span class="material-symbols-outlined">notifications</span>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Stack direction={"column"} spacing={0}>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontWeight: "600" }}
          >
            John Doe
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: "12px", fontWeight: "500", lineHeight: "14px" }}
          >
            User Type: Admin
          </Typography>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: "12px", fontWeight: "500", lineHeight: "14px" }}
          >
            Last Login: 2079/01/15
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Navbar;
