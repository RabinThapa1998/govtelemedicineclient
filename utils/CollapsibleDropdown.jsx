import React, { useState } from "react";
import { Box, Collapse, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CollapsibleDropdown = ({ dropdownname, dropdownitems }) => {
  let navigate = useNavigate();

  const [checked, setChecked] = useState(false);

  return (
    <Box sx={{ position: "relative" }}>
      <Button
        onClick={() => {
          setChecked(!checked);
        }}
        sx={{
          textTransform: "capitalize",
          height: "70px",
          borderRadius: "0px",
        }}
        color={"blackdropdown"}
        endIcon={<span class="material-symbols-outlined">expand_more</span>}
      >
        {dropdownname}
      </Button>
      <Box
        sx={{
          position: "absolute",
          bottom: "10",
          zIndex: "100",
        }}
      >
        <Collapse orientation="vertical" in={checked} collapsedSize={0}>
          <Stack
            sx={{
              backgroundColor: "white",
              width: "200px",
              height: "auto",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
              borderRadius: "5px",
            }}
            direction="column"
            spacing={0}
          >
            {dropdownitems.map((eachitem) => {
              if (dropdownname == "Discharged patient") {
                return (
                  <Button
                    size="small"
                    color={"blackdropdown"}
                    onClick={() => {
                      navigate("/dischargedpatient");
                      setChecked(!checked);
                    }}
                  >
                    {eachitem}
                  </Button>
                );
              } else {
                return (
                  <Button
                    size="small"
                    color={"blackdropdown"}
                    onClick={() => setChecked(!checked)}
                  >
                    {eachitem}
                  </Button>
                );
              }
            })}
          </Stack>
        </Collapse>
      </Box>
    </Box>
  );
};

export default CollapsibleDropdown;
