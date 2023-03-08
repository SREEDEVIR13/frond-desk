import React, { useState, useEffect } from "react";
import * as Icons from "react-icons/fa";
 import "./VisitorsList.css"
 import "./dummy.css"
 import Navbar from './Navbar'
 import { Table, TableHead, TableRow, TableCell, TableBody, Checkbox ,FormControlLabel,FormGroup} from '@material-ui/core';
 import { Visibility, VisibilityOff } from '@material-ui/icons';
 import {  useNavigate } from "react-router-dom";
 import axios from "axios";

 
  export default function VisitorsList() {
  const [List ,setList] = useState(false);
  const Navigate = useNavigate();
  const [hideAssetsColumn, setHideAssestColumn] = useState(true);
  const [hideMobileNumberColumn, setHideMobileNumberColumn] = useState(true);
  const [hideCompanyColumn, setHideCompanyColumn] = useState(true);
  const [hideDateofVisitColumn, setHideDateofVisitColumn] = useState(true);
  const [hidePersonToMeet, setHidePersonToMeetColumn] = useState(true);
  const [hidePurposeofvisitColumn, setHidePurposeofvisitColumn] = useState(true);
const[hideVisitorId, setHideVisitorId] = useState(true);
  const [hideNameColumn, setHideNameColumn] = useState(true);
  const [hidePlaceColumn, setHidePlaceColumn] = useState(true);
  const [showHideCheckboxes, setShowHideCheckboxes] = useState(false);
  const [visitorData,setvisitorData] =useState([])
  const [times, setTimes] = useState({});

  const [id, setId] = useState(null);
  const   GuestList = () => {
    setList(true);
    Navigate("/guest-list");
  };
  const  AddVisitor = () => {
    // setList(true);
    Navigate("/add-visitor");
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    console.log(`You clicked ${option}`);
    setIsOpen(false);
  };
  function getVisitorList(){
    
    const headers = {
      
      "Content-Type": "multipart/form-data",
      
  }
    axios.get('https://localhost:7194/api/Visitors/GetAllVistors',{
      headers:headers
    })
    .then((Response)=>{
      setvisitorData(Response.data);
        if(Response.data.length === 0){
            setInvitedStatusget(true);
        }
        console.log("Data:",Response.data);
    })
    
}
useEffect(()=>{
  getVisitorList();
  const storedTimes = localStorage.getItem('checkOutTimes');
  if (storedTimes) {
    setTimes(JSON.parse(storedTimes));
  }
},[])
  const handleToggleHideCheckboxes = () => {
    setShowHideCheckboxes(!showHideCheckboxes);
  };
//   function getHostedTrips(){
//     axios.get('https://localhost:7194/api/Visitors/GetAllVistors')
//     .then((Response)=>{
//         setTripData(Response.data);
//         if(Response.data.length === 0){
//             setInvitedStatusget(true);
//         }
//         console.log("Data:",Response.data);
//     })
    
// }
//  const [time, setTime] = useState();
  
  const handleClick = (visitorId) => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    setTimes(prevTimes => ({...prevTimes, [visitorId]: time}));
    localStorage.setItem('checkOutTimes', JSON.stringify({...times, [visitorId]: time}));
    // setTime(new Date().toLocaleTimeString());
    axios.post(`https://localhost:7194/api/Visitors/VisitorCheckOut?id=${visitorId}`)
    .then((response) => {
      console.log("hello")
    })
  }
  return (
    <div className="admin-page">
      <Navbar/>
    <div className='body'>
        <div className='top'>
        <div className="List-btn-grp">
            <button   style= {{backgroundColor:"rgb(225, 232, 235)"}}  className= "List-btn">Visitors List</button>
            <button   onClick={() => {
                   
                 GuestList();
                 }}  className= "List-btn">Guest List</button>
            {/* <button   className= "List-btn"onClick={toggleDropdown}>Contractors<Icons.FaCaretDown/></button>
            {isOpen && (
        <ul>
           <li onClick={() => {
                   
                   GuestList();
                   }}  >Option 1</li>
          <li onClick={() => handleOptionClick('Option 2')}>Option 2</li>
          <li onClick={() => handleOptionClick('Option 3')}>Option 3</li>
        </ul>
      )} */}
<div class="dropdown">
<button   className= "List-btn">Contractors<Icons.FaCaretDown/></button>
  <div class="dropdown-content">
  <a href="employee-list"><Icons.FaChevronRight/>Employee</a>
  <a href="longTermContractors-list"><Icons.FaChevronRight/>Long Term Contractors</a>
  <a href="othersContractors-list"><Icons.FaChevronRight/>Other Contractors</a>
  </div>
</div>
        </div>
        <div className="eyeIcon">
        {showHideCheckboxes ? (
          <Visibility onClick={handleToggleHideCheckboxes} />
        ) : (
          <VisibilityOff onClick={handleToggleHideCheckboxes} />
        )}
       
        {showHideCheckboxes && (
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
   <FormControlLabel  control={<Checkbox
             checked={!hidePlaceColumn}
             onChange={() => setHidePlaceColumn(!hidePlaceColumn)}
             inputProps={{ 'aria-label': 'Hide address column' }}
           />} label="Place" />

<FormControlLabel control={  <Checkbox
        defaultChecked
             onChange={() => setHideCompanyColumn(!hideCompanyColumn)}
             inputProps={{ 'aria-label': 'Hide address column' }}
         
           />} label="Company" />
<FormControlLabel control={  
            <Checkbox
             checked={!hideMobileNumberColumn}
             onChange={() => setHideMobileNumberColumn(!hideMobileNumberColumn)}
             inputProps={{ 'aria-label': 'Hide address column' }}
           />} label="Mobile Number" />
<FormControlLabel control={
            <Checkbox
             checked={!hideDateofVisitColumn}
             onChange={() => setHideDateofVisitColumn(!hideDateofVisitColumn)}
             inputProps={{ 'aria-label': 'Hide address column' }}
           />} label="Date of visit" />
           <FormControlLabel control={
            <Checkbox
            defaultChecked
             onChange={() => setHidePersonToMeetColumn(!hidePersonToMeet)}
             inputProps={{ 'aria-label': 'Hide address column' }}
           />} label="person to meet" />

<FormControlLabel control={
            <Checkbox
            defaultChecked
             onChange={() => setHideVisitorId(!hideVisitorId)}
             inputProps={{ 'aria-label': 'Hide address column' }}
           />} label="Visitor Id" />
<FormControlLabel control={ <Checkbox
         defaultChecked
             onChange={() => setHidePurposeofvisitColumn(!hidePurposeofvisitColumn)}
             inputProps={{ 'aria-label': 'Hide address column' }}
           />} label="Purpose of visit" />
<FormControlLabel control={
            <Checkbox
             checked={!hideAssetsColumn}
             onChange={() => setHideAssestColumn(!hideAssetsColumn)}
             inputProps={{ 'aria-label': 'Hide address column' }}
           />} label="Assests" />
 </FormGroup>


            </div>
           
          </div>
        )}
      </div>
    {/* <label className='name'>Visitors List</label> */}
    <div className='icons'>
    <div className='icon'><Icons.FaSortAmountDown/>sort</div>
    <div className='icon'><Icons.FaFilter/>filter</div>
    <button onClick={() => {
                   
                   AddVisitor();
                   }}  className="add-btn">Add visitor</button>
    </div>
    </div>



    <div className='table'>
   
              <div className="table-container">
       
          <Table>
        <TableHead>
          <TableRow>
       
         
          <TableCell> </TableCell>
          {/* <TableCell> Name </TableCell> */}
          {hideNameColumn &&   <TableCell> Name</TableCell>}
          {!hidePlaceColumn &&   <TableCell> place</TableCell>}
          {!hideMobileNumberColumn &&  <TableCell> Mobile Number</TableCell>}
          {hideCompanyColumn && <TableCell> Company</TableCell>}
            {!hideDateofVisitColumn&& <TableCell>  Date of visit</TableCell>}
            {hidePurposeofvisitColumn&&<TableCell>  Purpose of visit</TableCell>}
            <TableCell> In time</TableCell>
            <TableCell>out time</TableCell>
            {hidePersonToMeet&&<TableCell>Person to meet</TableCell>}
            {hideVisitorId&&<TableCell>visitor Id</TableCell>}
            {!hideAssetsColumn && <TableCell>  Assets</TableCell>}
  
           
          </TableRow>
        </TableHead>
        <TableBody>
        {visitorData.map((row) => {
                            return (<>
            <TableRow key={row.id}>

            <TableCell><Icons.FaUser/></TableCell>
            
         {/* <TableCell>{row.name}</TableCell> */}
         {hideNameColumn &&   <TableCell> {row.name}</TableCell>}
              {!hidePlaceColumn &&   <TableCell> {row.place}</TableCell>}
              {!hideMobileNumberColumn &&   <TableCell> {row.mobileNumber}</TableCell>}
            {hideCompanyColumn &&  <TableCell>{row.company}</TableCell>}
            {!hideDateofVisitColumn&&  <TableCell> {row.dateOfVisit}</TableCell>}
            {hidePurposeofvisitColumn&&   <TableCell>{row.purposeOfVisit}</TableCell>}
            <TableCell>{row.inTime}</TableCell>
            {/* <TableCell>  {time ? <p>{time}</p> : <button className="checkout-btn"  onClick={() => {
                   handleClick (row.visitorId);
                 
                  }}>Checkout</button>}
      </TableCell> */}
   <TableCell>  {times[row.id] ? (
                 <span>{times[row.id]}</span>
              ) : (
                <button className="checkout-btn" onClick={() => handleClick(row.visitorId)}>Check out</button>
              )}</TableCell> 
            {hidePersonToMeet&&<TableCell>{row.personToMeet}</TableCell>}
            {hideVisitorId&&   <TableCell>{row.visitorPass}</TableCell>}

            {!hideAssetsColumn &&   <TableCell> </TableCell>}



             
  

              
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

