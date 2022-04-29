import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

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
