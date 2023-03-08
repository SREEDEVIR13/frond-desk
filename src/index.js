import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Route,Routes } from 'react-router-dom';
import VisitorsList from './Admin/VisitorsList';
// import VisitorsList2 from './Admin/VisitorsList2';
import Dummy from './Admin/Dummy';
import Navbar from './Admin/Navbar';
import GuestList from './Admin/GuestList';
import Employee from './Admin/Employee';
import OtherContractors from './Admin/OtherContractors';
import LongTermContractors from './Admin/LongTermContractors';
import VisitorsListEdit from './Admin/VisitorsListEdit';
import AddVisitor from './Admin/AddVisitor';

import AddLongTermContractor from './Admin/AddLongTermContractor';
import Navbar1 from './Admin/Navbar1';
import VisitorsGrid from './Admin/VisitorsGrid'
import GuestGrid from './Admin/GuestGrid'
import EmployeeGrid from './Admin/EmployeeGrid'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<VisitorsList/>}></Route>
        <Route path='/visitor' element={<VisitorsGrid/>}></Route>
        <Route path='/guest' element={<GuestGrid/>}></Route>
        <Route path='/employee' element={<EmployeeGrid/>}></Route>
        <Route path='/dummy' element={<Dummy/>}></Route>
        <Route path='/visitor-list-Edit' element={<VisitorsListEdit></VisitorsListEdit>}></Route>
        <Route path='/navbar-list' element={<Navbar1></Navbar1>}></Route> 
        <Route path='/guest-list' element={<GuestList></GuestList>}></Route>
        <Route path='/employee-list' element={<Employee></Employee>}></Route>
        <Route path='/longTermContractors-list' element={<LongTermContractors></LongTermContractors>}></Route>
        <Route path='/othersContractors-list' element={<OtherContractors></OtherContractors>}></Route>
        <Route path='/add-visitor' element={<AddVisitor/>}></Route>
 <Route path='/add-long' element={<AddLongTermContractor/>}></Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

