import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function FiscalYeardropdown() {
  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl size="small">
        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          //   label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>2078/79</MenuItem>
          <MenuItem value={20}>2077/78</MenuItem>
          <MenuItem value={30}>2076/77</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
