import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Divider, Stack, Typography, Button } from "@mui/material";
const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
    headerClassName: "datagridheader",
  },
  {
    field: "reg",
    headerName: "Reg",
    width: 200,
    headerClassName: "datagridheader",
  },
  {
    field: "regdate",
    headerName: "Reg Date",
    width: 100,
    headerClassName: "datagridheader",
  },
  {
    field: "healthfacility",
    headerName: "Health Facility",
    type: "string",
    width: 300,
    headerClassName: "datagridheader",
  },
  {
    field: "category",
    headerName: "Category",
    type: "string",
    width: 200,
    headerClassName: "datagridheader",
  },
  {
    field: "patientname",
    headerName: "Patient Name",
    type: "string",
    width: 100,
    headerClassName: "datagridheader",
  },
  {
    field: "mobile",
    headerName: "Mobile",
    type: "string",
    width: 100,
    headerClassName: "datagridheader",
  },
  {
    field: "entryon",
    headerName: "Entry on",
    type: "string",
    width: 200,
    headerClassName: "datagridheader",
  },
  {
    field: "button",
    headerName: "Edit/Delete",

    width: 200,
    headerClassName: "datagridheader",
    renderCell: (params) => (
      <Stack direction={"row"}>
        <Button variant="contained" color="primary" size="small">
          Edit
        </Button>
        <Button
          variant="contained"
          color="success"
          size="small"
          disableElevation
          sx={{ marginLeft: "10px" }}
        >
          Details
        </Button>
      </Stack>
    ),
  },
];

const rows = [
  {
    id: 1,
    reg: "TM7852585#855",
    regdate: "09/01/2079",
    healthfacility: "RANGSI HP, Putha Uttanganga Rural Municipality Rukum east",
    category: "General_examination, Obsetric,Surgery",
    patientname: "sita gharti",
    mobile: "986205857",
    entryon: "2022-04-22 09:49:07",
  },
  {
    id: 2,
    reg: "TM7852585#855",
    regdate: "09/01/2079",
    healthfacility: "RANGSI HP, Putha Uttanganga Rural Municipality Rukum east",
    category: "General_examination, Obsetric,Surgery",
    patientname: "sita gharti",
    mobile: "986205857",
    entryon: "2022-04-22 09:49:07",
  },
  {
    id: 3,
    reg: "TM7852585#855",
    regdate: "09/01/2079",
    healthfacility: "RANGSI HP, Putha Uttanganga Rural Municipality Rukum east",
    category: "General_examination, Obsetric,Surgery",
    patientname: "sita gharti",
    mobile: "986205857",
    entryon: "2022-04-22 09:49:07",
  },
  {
    id: 4,
    reg: "TM7852585#855",
    regdate: "09/01/2079",
    healthfacility: "RANGSI HP, Putha Uttanganga Rural Municipality Rukum east",
    category: "General_examination, Obsetric,Surgery",
    patientname: "sita gharti",
    mobile: "986205857",
    entryon: "2022-04-22 09:49:07",
  },
];

export default function DischargedPatientDataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection={false}
        hideFooterSelectedRowCount={true}
      />
    </div>
  );
}
