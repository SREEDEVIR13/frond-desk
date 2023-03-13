import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Route,Routes } from 'react-router-dom';


import Dummy from './Admin/Dummy';
import Navbar from './Admin/Navbar';

import Employee from './Admin/Employee';
import OtherContractors from './Admin/OtherContractors';
import LongTermContractors from './Admin/LongTermContractors';
import VisitorsListEdit from './Admin/VisitorsListEdit';


import AddLongTermContractor from './Admin/AddLongTermContractor';
import Navbar1 from './Admin/Navbar1';
import VisitorsGrid from './Admin/VisitorsGrid'
import GuestGrid from './Admin/GuestGrid'
import EmployeeGrid from './Admin/EmployeeGrid'
import LongTermGrid from './Admin/LongTermGrid';
import OtherTermGrid from './Admin/OtherTermGrid';
import Login from './Admin/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import VisitorForm from './User/VisitorForm'
import Logo from './User/logo/logo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

    <GoogleOAuthProvider clientId="22868032215-e31jse257qj7ua15kc1j3681s0utq80e.apps.googleusercontent.com">
      <Routes>
     
        <Route path='/' element={<VisitorsGrid/>}></Route>
        <Route path='/guest' element={<GuestGrid/>}></Route>
        <Route path='/employee' element={<EmployeeGrid/>}></Route>
        <Route path='/LongTerm' element={<LongTermGrid/>}></Route>
        <Route path='/othersContractors' element={<OtherTermGrid/>}></Route>
        <Route path='/dummy' element={<Dummy/>}></Route>
        <Route path='/visitor-list-Edit' element={<VisitorsListEdit></VisitorsListEdit>}></Route>
        <Route path='/navbar-list' element={<Navbar1></Navbar1>}></Route> 
    <Route path='/visitor-add'  element={<VisitorForm/>}></Route> 
    <Route path='/logo'element={<Logo/>}></Route> 
        <Route path='/employee-list' element={<Employee></Employee>}></Route>
        <Route path='/SSO' element={<Login></Login>}></Route>
        <Route path='/longTermContractors-list' element={<LongTermContractors></LongTermContractors>}></Route>
        <Route path='/othersContractors-list' element={<OtherContractors></OtherContractors>}></Route>
    
    
 <Route path='/add-long' element={<AddLongTermContractor/>}></Route>
      </Routes>
      </GoogleOAuthProvider>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

