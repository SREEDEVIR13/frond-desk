import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import * as Icons from "react-icons/fa";
import Navbar from './Navbar'
import axios from "axios";
import { Button } from '@mui/material';

import {  useNavigate } from "react-router-dom";
// const [List ,setList] = useState(false);
import "./GuestList.css"

function EmployeeGrid() {
  const [rows, setRows] = useState([]);

  const Navigate = useNavigate();



  const   VisitorsList = () => {
    // setList(true);
    Navigate("/visitor");
  };


 
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('https://localhost:7194/api/Contractor/GetEmployeeContractor');
      setRows(result.data);
    }
    fetchData();
  }, []);
  const columns = [
    // { field: "id", headerName: "ID", width: 90 },
    { field: "fullName", headerName: "Name", width: 150 },
   
    { field: "dateOfVisit", headerName: "Date Of Visit", width: 150,hide: true },
    
    { field: "checkInTime", headerName: "In time", width: 200 },
   
{
    field: 'timestamp',
    headerName: 'Out Time',
    width: 200,
    
    renderCell: (params) => {
      const [time, setTime] = useState("");
      const [clicked, setClicked] = useState(false);
      
      const handleClick = () => {
        const currentTime = new Date().toLocaleTimeString([], { hour12: true, hourCycle: "h23" });
        setTime(currentTime);
        setClicked(true);
          
        axios.post(`https://localhost:7194/api/Visitors/VisitorCheckOut?id=${params.id}`, { time: currentTime });
      };
      
      return (
        <>
          {!clicked && <button onClick={handleClick}>Check out</button>}
          {time && <div>{time}</div>}
        </>
      );
    },
    },
   
    { field: "visitorPass", headerName: "Visitor Id", width: 200 },
  
    
    
  ];






  return (
    <div className='Employee-grid'>
<Navbar/>
<div className='Employee-body'>

    <div className='Employee-top'>
    <div className="Employee-List-btn-grp">
          
          <button   style= {{backgroundColor:"rgb(225, 232, 235)"}}   className= "Employee-List-btn">Employee</button>
          <button   onClick={() => {
                 
                 LongTermContractors();
                 }}  className= "Employee-List-btn">Long Term Contractors</button>

<button  onClick={() => {
                 
                 OtherContractors();
                 }}   className= "Employee-List-btn">Other Contractors</button>


      </div>


    <div className='Employee-icons'>
    <button onClick={() => {
                   
                   AddVisitor();
                   }}  className="Employee-add-btn">Add Employee</button>
    </div>
    </div>

    <Box sx={{ height: 520, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        
        pageSize={10}
        rowsPerPageOptions={[5, 10, 25]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
    </div>
    </div>
  );
}

export default EmployeeGrid;














