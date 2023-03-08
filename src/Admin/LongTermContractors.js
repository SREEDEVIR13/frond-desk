import React, { useState, useEffect } from "react";
import * as Icons from "react-icons/fa";
 import "./LongTermContractors.css"
 import "./dummy.css"
 import Navbar from './Navbar'
 import { Table, TableHead, TableRow, TableCell, TableBody, Checkbox ,FormControlLabel,FormGroup} from '@material-ui/core';
 import { Visibility, VisibilityOff } from '@material-ui/icons';
 import {  useNavigate } from "react-router-dom";
 import axios from "axios";



  export default function LongTermContractors() {
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
    const [hideFromColumn, setHideFromColumn] = useState(true);
    const [hideToColumn, setHideToColumn] = useState(true);
    const [showHideCheckboxes, setShowHideCheckboxes] = useState(false);

    const [times, setTimes] = useState({});
  const [LongTermContractorsData,setLongTermContractorstData] =useState([])



  const   Employee= () => {
    setList(true);
    Navigate("/employee-list");
  };

  const   OtherContractors = () => {
    setList(true);
    Navigate("/othersContractors-list");
  };
  

  const     AddLongTermContractor = () => {
    // setList(true);
    Navigate("/add-Long");
  };

  function getLongTermContractorsList(){
    
    axios.get('https://localhost:7194/api/Visitors/GetAllVistors')
    .then((Response)=>{
      setLongTermContractorstData(Response.data);
        if(Response.data.length === 0){
            setInvitedStatusget(true);
        }
        console.log("Data:",Response.data);
    })
    
}
useEffect(()=>{
  // getLongTermContractorsList();
  const storedTimes = localStorage.getItem('checkOutTimes');
  if (storedTimes) {
    setTimes(JSON.parse(storedTimes));
  }
},[])
  
  const handleToggleHideCheckboxes = () => {
    setShowHideCheckboxes(!showHideCheckboxes);
  };
  return (
    <div className="LongTermContractors-page">
      <Navbar/>
    <div className='LongTermContractors-body'>
        <div className='LongTermContractors-top'>
        <div className="LongTermContractors-List-btn-grp">
          
            <button  onClick={() => {
                   
                  Employee();
                   }}    className= "LongTermContractors-List-btn">Employee</button>
            <button  style= {{backgroundColor:"rgb(225, 232, 235)"}}  className= "LongTermContractors-List-btn">Long Term Contractors</button>

<button  onClick={() => {
                   
                   OtherContractors();
                   }}   className= "LongTermContractors-List-btn">Other Contractors</button>
  

        </div>
        <div className="LongTermContractors-eyeIcon">
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
               <FormControlLabel control={
            <Checkbox
             checked={!hideFromColumn}
             onChange={() =>setHideFromColumn(!hideFromColumn)}
             inputProps={{ 'aria-label': 'Hide address column' }}
           />} label="From" />
           <FormControlLabel control={
            <Checkbox
             checked={!hideToColumn}
             onChange={() => setHideToColumn(!hideToColumn)}
             inputProps={{ 'aria-label': 'Hide address column' }}
           />} label="To" />
 </FormGroup>
  
            
           
          
            </div>
          </div>
        )}
      </div>
    {/* <label className='name'>Visitors List</label> */}
    <div className='LongTermContractors-icons'>
    <div className='LongTermContractors-icon'><Icons.FaSortAmountDown/>sort</div>
    <div className='LongTermContractors-icon'><Icons.FaFilter/>filter</div>
    <button onClick={() => {
                   
                   AddLongTermContractor();
                   }}   className="LongTermContractors-add-btn">Add Long Term Contractors</button>
    </div>
    </div>



    <div className='LongTermContractors-table'>
   
              <div className="LongTermContractors-table-container">
 
    
        
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
            <TableCell> in time</TableCell>
            <TableCell>out time</TableCell>
            {hidePersonToMeet&&<TableCell>Person to meet</TableCell>}
            {hideVisitorId&&<TableCell>visitor pass</TableCell>}
            {!hideAssetsColumn && <TableCell>  Assets</TableCell>}
            {!hideFromColumn && <TableCell> From</TableCell>}
            {!hideToColumn && <TableCell>  TO</TableCell>}
           
          </TableRow>
        </TableHead>
        <TableBody>
        {LongTermContractorsData.map((row) => {
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
           
   <TableCell>  {times[row.id] ? (
                 <span>{times[row.id]}</span>
              ) : (
                <button className="checkout-btn" onClick={() => handleClick(row.visitorId)}>Check out</button>
              )}</TableCell> 
            <TableCell>{row.personToMeet}</TableCell>
            {hideVisitorId&&   <TableCell>{row.visitorPass}</TableCell>}

            {!hideAssetsColumn &&   <TableCell> </TableCell>}
            {!hideFromColumn && <TableCell> {row.startdate}
</TableCell>}
            {!hideToColumn && <TableCell>{row.enddate}</TableCell>}


             
  

              
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

