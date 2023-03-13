
import Dummy from './Admin/Dummy';

import './App.css';
import Navbar from './Admin/Navbar';

import TableGrid from './Admin/TableGrid';
import { Button } from '@material-ui/core';
import {Route,Routes } from 'react-router-dom';
function App() {
  return (
<div className="App">
      <Routes>
        <Route path='/admin-dashboard' element={<AdminDashboard></AdminDashboard>}></Route>
 
        <Route path='/navbar-list' element={<Navbar></Navbar>}></Route> 

       </Routes>
    </div>
  );
}

export default App;
