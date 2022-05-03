import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Box } from "@mui/material";
import Collapse from "@mui/material/Collapse";

export default function Dropdown({ dropdownname, dropdownitems }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color={"blackdropdown"}
        endIcon={<span class="material-symbols-outlined">expand_more</span>}
        sx={{ textTransform: "capitalize" }}
      >
        {dropdownname}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        transitionDuration={100}
      >
        {dropdownitems.map((each) => {
          return <MenuItem onClick={handleClose}>{each}</MenuItem>;
        })}
      </Menu>
    </div>
  );
}

export function ViewFullReportDropdown({ dropdownname, dropdownitems }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "265px" }}>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<span class="material-symbols-outlined">expand_more</span>}
        sx={{ textTransform: "capitalize", width: "100%" }}
        variant={"contained"}
        color={"whitedropdown"}
      >
        {dropdownname}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        transitionDuration={100}
      >
        {dropdownitems.map((each) => {
          return <MenuItem onClick={handleClose}>{each}</MenuItem>;
        })}
      </Menu>
    </Box>
  );
}
