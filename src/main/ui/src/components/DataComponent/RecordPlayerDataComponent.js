import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import RecordPlayerAPI from "../../lib/RecordPlayerAPI";

const RecordPlayerComponent = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "model", headerName: "Model", width: 150 },
    { field: "brand", headerName: "Brand", width: 150 },
    { field: "year", headerName: "Year", width: 150 },
    { field: "price", headerName: "Price", width: 150 },
    {
      field: "productStatus",
      headerName: "Product Status",
      width: 150,
      valueFormatter: (recordPlayer) => recordPlayer.row?.productStatus?.status,
    },
    {
      field: "user",
      headerName: "Owner user",
      width: 130,
      valueFormatter: (recordPlayer) => recordPlayer.row?.user?.userName,
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={RecordPlayerAPI()}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
};

export default RecordPlayerComponent;
