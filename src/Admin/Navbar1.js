import React, { useState } from 'react';
// import "./AdminHeader.css";
import"./Navbar1.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import * as Icons from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
function AdminHeader() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Perform search using searchQuery
    console.log(`Searching for ${searchQuery}`);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <header className="admin-header">
      <img alt="" src="/swagatLogo3.png" className="swagat-logo" />
      <div className="home-Icon">
        <AiFillHome className="home-icon" size={"3ch"} />
      </div>
    </header>
  );
}

export default AdminHeader;