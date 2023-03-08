import React, { useState, useEffect } from "react";
import * as Icons from "react-icons/fa";
 import "./Employee.css"
 import "./dummy.css"
 import axios from "axios";

 import Navbar from './Navbar'
 import { Table, TableHead, TableRow, TableCell, TableBody, Checkbox ,FormControlLabel,FormGroup} from '@material-ui/core';
 import { Visibility, VisibilityOff } from '@material-ui/icons';
 import {  useNavigate } from "react-router-dom";
  export default function Employee() {
  const [List ,setList] = useState(false);
  const Navigate = useNavigate();
  const [hideInTimeColumn, setHideInTimeColumn] = useState(true);
  const [hideOutTimeColumn, setHideOutTimeColumn] = useState(true);
  const [hideCompanyColumn, setHideCompanyColumn] = useState(true);
  const [hideDateofVisitColumn, setHideDateofVisitColumn] = useState(true);
  const[hideVisitorId, setHideVisitorId] = useState(true);
  const [hidePurposeofvisitColumn, setHidePurposeofvisitColumn] = useState(true);
  const [hideNameColumn, setHideNameColumn] = useState(true);
  const [hidePlaceColumn, setHidePlaceColumn] = useState(true);
  const [showHideCheckboxes, setShowHideCheckboxes] = useState(false);
  const [employeeData,setEmployeeData] =useState([])
  const [times, setTimes] = useState({});
  const   OtherContractors = () => {
    setList(true);
    Navigate("/othersContractors-list");
  };

  const   LongTermContractors = () => {
    setList(true);
    Navigate("/longTermContractors-list");
  };
  
  
  const handleToggleHideCheckboxes = () => {
    setShowHideCheckboxes(!showHideCheckboxes);
  };

  
  function getEmployeeList(){

 axios.get('https://localhost:7194/api/Contractor/GetEmployeeContractor')
    
    .then((Response)=>{
      setEmployeeData(Response.data);
      console.log(employeeData);
       
        console.log("Data:",Response.data);
    })
    
}
useEffect(()=>{
  getEmployeeList();
  const storedTimes = localStorage.getItem('checkOutTimes');
  if (storedTimes) {
    setTimes(JSON.parse(storedTimes));
  }
},[])
const handleClick = (id) => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  setTimes(prevTimes => ({...prevTimes, [id]: time}));
  localStorage.setItem('checkOutTimes', JSON.stringify({...times, [id]: time}));
  // setTime(new Date().toLocaleTimeString());
  axios.post(`https://localhost:7194/api/Contractor/ContractorEmployeeCheckOut?id=${id}`)
  
  .then((response) => {
    console.log("hello")
  })
}
  return (
    <div className="Employee-page">
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
        <div className="Employee-eyeIcon">
        {showHideCheckboxes ? (
          <Visibility onClick={handleToggleHideCheckboxes} />
        ) : (
          <VisibilityOff onClick={handleToggleHideCheckboxes} />
        )}
       
        {showHideCheckboxes && (
          // <div style={{ display: 'flex' }}>
          <div className="checkbox">
            {/* <div style={{ display: 'flex', flexDirection: 'column' }}> */}
            <div className="column">

            <FormGroup>
      <FormControlLabel control={
              <Checkbox
              defaultChecked
                onChange={() => setHideNameColumn(!hideNameColumn)}
                inputProps={{ 'aria-label': 'Hide age column' }}
              /> } label="Name" />
               <FormControlLabel control={
              <Checkbox
              defaultChecked
                onChange={() => setHideDateofVisitColumn(!hideDateofVisitColumn)}
                inputProps={{ 'aria-label': 'Hide age column' }}
              /> } label="Date Of Visit" />
      <FormControlLabel  control={<Checkbox
                 defaultChecked
                onChange={() => setHideInTimeColumn(!hideInTimeColumn)}
                inputProps={{ 'aria-label': 'Hide address column' }}
              />} label="in time" />

<FormControlLabel control={  <Checkbox
                defaultChecked
                onChange={() => setHideOutTimeColumn(!hideOutTimeColumn)}
                inputProps={{ 'aria-label': 'Hide address column' }}
            
              />} label="out Time" />
<FormControlLabel control={
            <Checkbox
            defaultChecked
             onChange={() => setHideVisitorId(!hideVisitorId)}
             inputProps={{ 'aria-label': 'Hide address column' }}
           />} label="Visitor Id" />

    </FormGroup>


           
              
              
            </div>
            
          </div>
        )}
      </div>
    {/* <label className='name'>Visitors List</label> */}
    <div className='Employee-icons'>
    <div className='Employee-icon'><Icons.FaSortAmountDown/>sort</div>
    <div className='Employee-icon'><Icons.FaFilter/>filter</div>
    <button  className="Employee-add-btn">Add Employee</button>
    </div>
    </div>



    <div className='Employee-table'>
   

              <div className="Employee-table-container">
       
          <Table>
        <TableHead>
          <TableRow>
       
         
          <TableCell> </TableCell>
       {hideNameColumn &&   <TableCell> Name </TableCell>}
       
        
       {hideDateofVisitColumn&& <TableCell>  Date of visit</TableCell>}
       {hideInTimeColumn && <TableCell> In Time</TableCell>}
            
       {hideOutTimeColumn && <TableCell> Out Time</TableCell>}
            {hideVisitorId&&<TableCell>visitor Id</TableCell>}
        
        
  
           
          </TableRow>
        </TableHead>
        <TableBody>
        {employeeData.map((row) => {
                            return (<>
            <TableRow key={row.id}>

            <TableCell><Icons.FaUser/></TableCell>
            
            {hideNameColumn &&   <TableCell> {row.fullName
}</TableCell>}
            {hideDateofVisitColumn&&  <TableCell> {row.dateOfVisit}</TableCell>}
            {hideInTimeColumn && <TableCell> {row.checkInTime}</TableCell>}
            {/* {hideOutTimeColumn && <TableCell> </TableCell>} */}
           

   <TableCell>  {times[row.id] ? (
                 <span>{times[row.id]}</span>
              ) : (
                <button className="checkout-btn" onClick={() => handleClick(row.visitorId)}>Check out</button>
              )}</TableCell> 
       
       {hideVisitorId&&<TableCell>{row.id}</TableCell>}
         



             
  

              
            </TableRow></>
            )
        })}
        </TableBody>
       
      </Table>
      </div>

        </div>
           
      </div>

        </div>
        
          
    



  )
}

