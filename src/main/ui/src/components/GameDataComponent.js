import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import VideoGameAPI from "../lib/VideoGameAPI";

const GameComponent = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "gender", headerName: "Gender", width: 150 },
    { field: "developer", headerName: "developer", width: 150 },
    { field: "price", headerName: "Price", width: 150 },
    {
      field: "productStatus",
      headerName: "Product Status",
      width: 150,
      valueFormatter: (game) => game.row?.productStatus?.status,
    },
    {
      field: "firstName",
      headerName: "Owner user",
      width: 130,
      valueFormatter: (game) => game.row?.user?.userName,
    },
    
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={VideoGameAPI()}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
};

export default GameComponent;
