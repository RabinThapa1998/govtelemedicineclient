import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Divider, Stack, Typography } from "@mui/material";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    headerClassName: "datagridheader",
  },
  {
    field: "prhospital",
    headerName: "PR. Hospital",
    width: 400,
    headerClassName: "datagridheader",
  },
  {
    field: "noofpatientdischarge",
    headerName: "No of Patient Discharge",
    type: "number",
    width: 400,
    headerClassName: "datagridheader",
  },
  {
    field: "total",
    headerName: "Total",
    type: "number",
    width: 400,
    headerClassName: "datagridheader",
  },
];

const rows = [
  { id: 1, prhospital: "Achham", noofpatientdischarge: 3, total: 35 },
  {
    id: 2,
    prhospital: "Argakachhi",
    noofpatientdischarge: 1,
    total: 42,
  },
  { id: 3, prhospital: "Baglung", noofpatientdischarge: 2, total: 45 },
  { id: 4, prhospital: "Baitadi", noofpatientdischarge: 5, total: 16 },
  {
    id: 5,
    prhospital: "Bakhe",
    noofpatientdischarge: 2,
    total: null,
  },
  { id: 6, prhospital: "Chitwan", noofpatientdischarge: null, total: 150 },
  { id: 7, prhospital: "Dang", noofpatientdischarge: 2, total: 44 },
  { id: 8, prhospital: "Dhangadi", noofpatientdischarge: 4, total: 36 },
  { id: 9, prhospital: "Gorkha", noofpatientdischarge: 1, total: 65 },
];

export default function DistrictDataTable() {
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

export function CustomDistrictDataTable() {
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          height: "82px",
          alignItems: "center",
          justifyContent: "space-around",
          borderRadius: "20px",
          boxShadow: " 9px 14px 14px -10px rgba(11, 34, 62, 0.37);",
          padding: "0px 40px",
        }}
        bgcolor="primary.main"
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: "white",
              height: "60%",
              margin: "auto",
              width: "2px",
            }}
          />
        }
        direction={"row"}
      >
        <Typography
          variant="body1"
          color="common.white"
          sx={{ fontSize: "24px", width: "20%", textAlign: "center" }}
        >
          PR.Hospital
        </Typography>
        <Typography
          variant="body1"
          color="common.white"
          sx={{ fontSize: "24px", width: "30%", textAlign: "center" }}
        >
          No. of Patient Discharge
        </Typography>
        <Typography
          variant="body1"
          color="common.white"
          sx={{ fontSize: "24px", width: "30%", textAlign: "center" }}
        >
          Patient Admitted
        </Typography>
        <Typography
          variant="body1"
          color="common.white"
          sx={{ fontSize: "24px", width: "20%", textAlign: "center" }}
        >
          Total
        </Typography>
      </Stack>
      {/* datatable-starts-below */}
      <Stack
        sx={{
          width: "100%",
          height: "82px",
          alignItems: "center",
          justifyContent: "space-around",
          borderRadius: "20px",
          padding: "0px 40px",
          margin: "20px 0px",
          boxShadow: " 5px 5px 5px -6px rgba(11, 34, 62, 0.37);",
        }}
        bgcolor="primary.light"
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: "black",
              height: "60%",
              margin: "auto",
              width: "2px",
            }}
          />
        }
        direction={"row"}
      >
        <Typography
          variant="body1"
          // color="common.white"
          sx={{ fontSize: "24px", width: "20%", textAlign: "center" }}
        >
          Aachham
        </Typography>
        <Typography
          variant="body1"
          // color="common.white"
          sx={{ fontSize: "24px", width: "30%", textAlign: "center" }}
        >
          ---
        </Typography>
        <Typography
          variant="body1"
          // color="common.white"
          sx={{ fontSize: "24px", width: "30%", textAlign: "center" }}
        >
          25
        </Typography>
        <Typography
          variant="body1"
          // color="common.white"
          sx={{ fontSize: "24px", width: "20%", textAlign: "center" }}
        >
          25
        </Typography>
      </Stack>
    </>
  );
}
