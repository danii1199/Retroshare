import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import GameConsoleAPI from "../lib/GameConsoleAPI";

const GameConsoleComponent = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "year", headerName: "Year", width: 150 },
    { field: "price", headerName: "Price", width: 150 },
    { field: "user", headerName: "User", width: 130 },
    { field: "productStatus", headerName: "Product Status", width: 150 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={GameConsoleAPI()}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
};

export default GameConsoleComponent;
