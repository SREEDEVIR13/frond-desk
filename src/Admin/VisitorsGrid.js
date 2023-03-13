import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid,  GridCellEditStopReasons} from '@mui/x-data-grid';
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
  const   AddVisitor= () => {
 
    Navigate("/logo");
  };
 
  useEffect(() => {
    async function fetchData() {
      debugger
      const result = await axios.get('https://localhost:7194/api/Visitors/GetAllVistors');

      console.log(result);
      setRows(result.data);
 
    }
    fetchData();
  }, []);

  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const filteredRows = searchText
    ? rows.filter((row) =>
        Object.values(row).some((value) =>
          value.toLowerCase().includes(searchText.toLowerCase())
        )
      )
    : rows;

  const columns = [
    // { field: "id", headerName: "ID", width: 90 },
    { field: "photo", renderCell:(params)=>{return(<img style={{width:'100px'}} src={params.row.photo} />)},headerName:"image", width: 200 },
    
    { field: "name", headerName: "Name", width: 150 },
    { field: "place", headerName: "Place", width: 150 },
    { field: "mobileNumber", headerName: "Mobile Number", width: 150 ,hide: true},
    { field: "company", headerName: "Company", width: 200 ,hide: true},
    { field: "dateOfVisit", headerName: "Date Of Visit", width: 150,hide: true },
    { field: "purposeOfVisit", headerName: "Purpose Of Visit", width: 200,hide: true },
    { field: "email", headerName: 'Email' , width: 200 },
    // { field: "ischeckout", headerName: 'ischeckout' , width: 200,hide:true },
 
    { field: "inTime", headerName: "In time", width: 200 , editable: true},
    // {
    //   field: 'inTime',
    //   headerName: 'Last Login',
    //   type: 'time',
    //   width: 220,
    //   editable: true,
    // },
   
{
    field: 'timestamp',
    headerName: 'Out Time',
    width: 200,
  
    renderCell: (params) => {
      // debugger
      console.log(params);
      const [time, setTime] = useState("");
      const [clicked, setClicked] = useState(false);
      const [isCheckout,setCheckout] = useState(false);
      //setCheckout(params.row.ischeckout);
      
      const handleClick = () => {
        const currentTime = new Date().toLocaleTimeString([], { hour12: true, hourCycle: "h23" });
        setTime(currentTime);
        setClicked(true);
          
        axios.post(`https://localhost:7194/api/Visitors/VisitorCheckOut?id=${params.row.visitId}`, { time: currentTime });
      };
      
      return (
        <>{!clicked?
          <>
          {params.row.ischeckout?<div>{params.row.outTime}</div>
          :<div><button className='checkout-btn' onClick={handleClick}>Check out</button></div>}
          </>:<div>
            {time}
          </div>
          }
        </>
      );
    },
    },
    { field: "personToMeet", headerName: "Person To Meet", width: 200 ,hide: true },
    { field: "visitorPass", headerName: "Visitor Id", width: 200 },

    
  ];






  return (
    <div className='visitor-grid'>
      <Navbar onSearch={handleSearch} />
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
  <a href="LongTerm"><Icons.FaChevronRight/>Long Term Contractors</a>
  <a href="othersContractors"><Icons.FaChevronRight/>Other Contractors</a>
  </div>
</div>
    </div>


    <div className='icons'>
    <button onClick={() => {
                   
                   AddVisitor();
                   }}  className="add-btn">Add visitor</button>
    </div>
    </div>

    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
       rows={filteredRows} 
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
      
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </div>
    </div>
  );
}

export default VisitorsGrid;














