import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <div className="navbar">
      <h2>Visitors Management System</h2>
      {location.pathname === "/visitor" && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      )}
      <button onClick={() => navigate("/visitor")}>Visitors List</button>
      <button onClick={() => navigate("/guest")}>Guest List</button>
      {/* ... */}
    </div>
  );
}

export default Navbar;
