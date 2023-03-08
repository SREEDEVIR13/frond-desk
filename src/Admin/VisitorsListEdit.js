import React, { useState, useEffect } from "react";
import * as Icons from "react-icons/fa";
 import "./VisitorsList.css"
 import "./dummy.css"
 import Navbar from './Navbar'
 import { Table, TableHead, TableRow, TableCell, TableBody, Checkbox } from '@material-ui/core';
 import { Visibility, VisibilityOff } from '@material-ui/icons';
 import {  useNavigate } from "react-router-dom";
 import { AiOutlineDownload} from "react-icons/ai";




  export default function VisitorsListEdit() {
    const [List ,setList] = useState(false);
    const Navigate = useNavigate();
    const [hideAssetsColumn, setHideAssestColumn] = useState(true);
    const [hideMobileNumberColumn, setHideMobileNumberColumn] = useState(true);
    const [hideCompanyColumn, setHideCompanyColumn] = useState(true);
    const [hideDateofVisitColumn, setHideDateofVisitColumn] = useState(true);
    const [hidePurposeofvisitColumn, setHidePurposeofvisitColumn] = useState(true);
    const [hideNameColumn, setHideNameColumn] = useState(true);
    const [hidePlaceColumn, setHidePlaceColumn] = useState(true);
    const [showHideCheckboxes, setShowHideCheckboxes] = useState(false);
    const   GuestList = () => {
      setList(true);
      Navigate("/guest-list");
    };
   
  
    
   
    const handleToggleHideCheckboxes = () => {
      setShowHideCheckboxes(!showHideCheckboxes);
    };
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
    <a href="employee-list">Employee</a>
    <a href="longTermContractors-list">Long Term Contractors</a>
    <a href="othersContractors-list">Other Contractors</a>
    </div>
  </div>
          </div>
          <div className="eyeIcon">
          {showHideCheckboxes ? (
            <Visibility onClick={handleToggleHideCheckboxes} />
          ) : (
            <Visibility onClick={handleToggleHideCheckboxes} />
          )}
         
          {showHideCheckboxes && (
            <div style={{ display: 'flex' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Checkbox
                  checked={!hideNameColumn}
                  onChange={() => setHideNameColumn(!hideNameColumn)}
                  inputProps={{ 'aria-label': 'Hide age column' }}
                /> 
                
                <Checkbox
                  checked={!hidePlaceColumn}
                  onChange={() => setHidePlaceColumn(!hidePlaceColumn)}
                  inputProps={{ 'aria-label': 'Hide address column' }}
                />
                 <Checkbox
                  checked={!hideCompanyColumn}
                  onChange={() => setHideCompanyColumn(!hideCompanyColumn)}
                  inputProps={{ 'aria-label': 'Hide address column' }}
                />
                 <Checkbox
                  checked={!hideMobileNumberColumn}
                  onChange={() => setHideMobileNumberColumn(!hideMobileNumberColumn)}
                  inputProps={{ 'aria-label': 'Hide address column' }}
                />
                 <Checkbox
                  checked={!hideDateofVisitColumn}
                  onChange={() => setHideDateofVisitColumn(!hideDateofVisitColumn)}
                  inputProps={{ 'aria-label': 'Hide address column' }}
                />
                 <Checkbox
                  checked={!hidePurposeofvisitColumn}
                  onChange={() => setHidePurposeofvisitColumn(!hidePurposeofvisitColumn)}
                  inputProps={{ 'aria-label': 'Hide address column' }}
                />
                
                 <Checkbox
                  checked={!hideAssetsColumn}
                  onChange={() => setHideAssestColumn(!hideAssetsColumn)}
                  inputProps={{ 'aria-label': 'Hide address column' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>Name</span><br></br><br></br>
              <span>Place</span><br></br><br></br>
                <span>Company</span><br></br>
                <span>MobileNUmber</span><br></br>
                <span>DateofVisit</span><br></br>
                <span>Purposeofvisit</span><br></br>
                <span>Assets</span>
            
              </div>
            </div>
          )}
        </div>
      {/* <label className='name'>Visitors List</label> */}
      <div className='icons'>
      <div className='icon'><Icons.FaSortAmountDown/>sort</div>
      <div className='icon'><Icons.FaFilter/>filter</div>
      <button  className="add-btn">Add visitor</button>
      </div>
      </div>
  
  
  
      <div className='table'>
     
                <div className="table-container">
          <table>
            <thead>
              <tr>
              <th> </th>
              {!hideNameColumn && <th>Name</th>}
              {!hidePlaceColumn && <th> place</th>}
              {!hideMobileNumberColumn && <th> Mobile Number</th>}
              {!hideCompanyColumn && <th>Company</th>}
              {!hideDateofVisitColumn&& <th> Date of visit</th>}
              {!hidePurposeofvisitColumn&& <th> Purpose of visit</th>}
              <th>In Time</th>
              <th>Out Time</th>
              <th>Person to meet</th>
              <th>visitor Id</th>
              {!hideAssetsColumn && <th> Assets</th>}
              <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Icons.FaUserCircle></Icons.FaUserCircle></td>
                {!hideNameColumn && <td>Name</td>}
                {!hidePlaceColumn && <td> place</td>}
                {!hideMobileNumberColumn && <td> Mobile Number</td>}
              {!hideCompanyColumn && <td>Company</td>}
              {!hideDateofVisitColumn&& <td> Date of visit</td>}
              {!hidePurposeofvisitColumn&& <td> Purpose of visit</td>}
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              {!hideAssetsColumn && <td> xxx</td>}
              <td><Icons.FaEdit/></td>
              </tr>
              <tr>
                
                <td><Icons.FaUserCircle></Icons.FaUserCircle></td>
                {!hideNameColumn && <td>Name</td>}
                {!hidePlaceColumn && <td> place</td>}
                {!hideMobileNumberColumn && <td> Mobile Number</td>}
              {!hideCompanyColumn && <td>Company</td>}
              {!hideDateofVisitColumn&& <td> Date of visit</td>}
              {!hidePurposeofvisitColumn&& <td> Purpose of visit</td>}
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              {!hideAssetsColumn && <td> xxx</td>}
              <td><Icons.FaEdit/></td>
              </tr>
              <tr>
                <td><Icons.FaUserCircle></Icons.FaUserCircle></td>
                {!hideNameColumn && <td>Name</td>}
                {!hidePlaceColumn && <td> place</td>}
                {!hideMobileNumberColumn && <td> Mobile Number</td>}
              {!hideCompanyColumn && <td>Company</td>}
              {!hideDateofVisitColumn&& <td> Date of visit</td>}
              {!hidePurposeofvisitColumn&& <td> Purpose of visit</td>}
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              {!hideAssetsColumn && <td> xxx</td>}
              <td><Icons.FaEdit/></td>
              </tr>
              <tr>
                <td><Icons.FaUserCircle></Icons.FaUserCircle></td>
                {!hideNameColumn && <td>Name</td>}
                {!hidePlaceColumn && <td> place</td>}
                {!hideMobileNumberColumn && <td> Mobile Number</td>}
              {!hideCompanyColumn && <td>Company</td>}
              {!hideDateofVisitColumn&& <td> Date of visit</td>}
              {!hidePurposeofvisitColumn&& <td> Purpose of visit</td>}
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              {!hideAssetsColumn && <td> xxx</td>}
              <td><Icons.FaEdit/></td>
              </tr>
             <tr>
                <td><Icons.FaUserCircle></Icons.FaUserCircle></td>
                {!hideNameColumn && <td>Name</td>}
                {!hidePlaceColumn && <td> place</td>}
                {!hideMobileNumberColumn && <td> Mobile Number</td>}
              {!hideCompanyColumn && <td>Company</td>}
              {!hideDateofVisitColumn&& <td> Date of visit</td>}
              {!hidePurposeofvisitColumn&& <td> Purpose of visit</td>}
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              <td>xxx</td>
              {!hideAssetsColumn && <td> xxx</td>}
              <td><Icons.FaEdit/></td>
              </tr>
          
             

             
           
              ...
            </tbody>
          </table>
        </div>
  
          </div>
          
         
<div className='btn'><button  className="add-btn">   <AiOutlineDownload/>Report</button></div>   
      
  </div>
  </div>
  
    )
  }

