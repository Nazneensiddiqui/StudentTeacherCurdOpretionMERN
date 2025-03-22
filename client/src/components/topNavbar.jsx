import React, { useState } from "react";
import "../css/topNavbar.css";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">myschool</div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#">Download App</a></li>
        <li><a href="#">Sign In</a></li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search your wish here" />
        <FaSearch className="search-icon" />
      </div>
      <div className="icons">
        <span>Academic</span>
        <span>Early Career</span>
        <span>Edutainment</span>
        <span>Print Rich</span>
        <span>Maker</span>
        <span>Info Hub</span>
      </div>
    </nav>
  );
};

export default Navbar;

// const Navbar = () => {
//     return (
//       <nav className="navbar">
//         <div className="text-lg font-bold">Download App</div>
//         <div className="text-lg font-bold">Sign In</div>
//       </nav>
//     );
//   };
//   export default Navbar;