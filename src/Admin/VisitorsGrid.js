import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import * as Icons from "react-icons/fa";
import Navbar from './Navbar'
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import "./VisitorsGrid.css"

function VisitorsGrid() {
  const [rows, setRows] = useState([]);
  const [List ,setList] = useState(false);
  const Navigate = useNavigate();
  
  const   GuestList = () => {
     setList(true);
    Navigate("/guest");
  };

 
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('https://localhost:7194/api/Visitors/GetAllVistors');
      setRows(result.data);
 
    }
    fetchData();
  }, []);
  const columns = [
    // { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "place", headerName: "Place", width: 150 },
    { field: "mobileNumber", headerName: "Mobile Number", width: 150 ,hide: true},
    { field: "company", headerName: "Company", width: 200 ,hide: true},
    { field: "dateOfVisit", headerName: "Date Of Visit", width: 150,hide: true },
    { field: "purposeOfVisit", headerName: "Purpose Of Visit", width: 200,hide: true },
    { field: "email", headerName: 'Email' , width: 200 },
 
    { field: "inTime", headerName: "In time", width: 200 },
   
{
    field: 'timestamp',
    headerName: 'Out Time',
    width: 200,
    // renderCell: (params) => {
    //     const handleClick = () => {
    //       const currentTime = new Date().toLocaleTimeString();
    //       setTime(currentTime);
          
    //       axios.post(`https://localhost:7194/api/Visitors/VisitorCheckOut?id=${params.id}`, { time: currentTime });
    //     };
    //     return <button onClick={handleClick}>Check out</button>;
    //   },
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
    { field: "personToMeet", headerName: "Person To Meet", width: 200 },
    { field: "visitorPass", headerName: "Visitor Id", width: 200 },
    { field: "Assest", headerName: "", width: 200 },
    
    
  ];






  return (
    <div className='visitor-grid'>
<Navbar/>
<div className='visitorgrid-body'>

    <div className='visitorGrid-top'>
              <div className="List-btn-grp">
            <button   style= {{backgroundColor:"rgb(225, 232, 235)"}}  className= "List-btn">Visitors List</button>
            <button   onClick={() => {
                   
                 GuestList();
                 }}  className= "List-btn">Guest List</button>
<div class="dropdown">
<button   className= "List-btn">Contractors<Icons.FaCaretDown/></button>
  <div class="dropdown-content">
  <a href="employee"><Icons.FaChevronRight/>Employee</a>
  <a href="longTermContractors-list"><Icons.FaChevronRight/>Long Term Contractors</a>
  <a href="othersContractors-list"><Icons.FaChevronRight/>Other Contractors</a>
  </div>
</div>
    </div>


    <div className='icons'>
    <button onClick={() => {
                   
                   AddVisitor();
                   }}  className="add-btn">Add visitor</button>
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

export default VisitorsGrid;














