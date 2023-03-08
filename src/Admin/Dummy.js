import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";

function App() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("https://localhost:7194/api/Visitors/GetAllVistors");
      setRows(result.data);
    }
    fetchData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "body", headerName: "Body", width: 500 },
    {
      field: "timestamp",
      headerName: "Timestamp",
      width: 150,
      renderCell: (params) => {
        return (
          <button onClick={() => handleClick(params.row.id)}>Show Time</button>
        );
      },
    },
  ];

  const handleClick = (visitorId) => {
    const date = new Date();
    const timestamp = date.toISOString();
  axios.post("https://localhost:7194/api/Visitors/VisitorCheckOut?id=",
{
      visitorId,
      timestamp,
    })
    .then((response) => {
      console.log(response);
      // handle successful response
    })
    .catch((error) => {
      console.log(error);
      // handle error
    });
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}

export default App;