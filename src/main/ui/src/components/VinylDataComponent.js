import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import VinylAPI from "../lib/VinylAPI";

const VinylComponent = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "artists", headerName: "Artists", width: 150 },
    { field: "songs", headerName: "Songs", width: 150 },
    { field: "year", headerName: "Year", width: 150 },
    { field: "price", headerName: "Price", width: 150 },
    {
      field: "productStatus",
      headerName: "Product Status",
      width: 150,
      valueFormatter: (vinyl) => vinyl.row?.productStatus?.status,
    },
    {
      field: "firstName",
      headerName: "Owner user",
      width: 130,
      valueFormatter: (vinyl) => vinyl.row?.user?.userName,
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={VinylAPI()}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
};

export default VinylComponent;
