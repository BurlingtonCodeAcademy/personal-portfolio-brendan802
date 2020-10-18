import React, { useState } from "react";
import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div id="navbar">
      <Link to="#" id="menu-bars">
        <FaIcons.FaBars onClick={showSidebar} />
      </Link>
      <nav id={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul id="nav-menu-items">
          <li id="navbar-toggle">
            <Link to="#" id="menu-bars">
            </Link>
          </li>
  
          {NavbarData.map((item, index) => {
            return (
              <li key={index} id={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link> 
              </li>
            );
          })}

        </ul>
       
      </nav>
    </div>
  );
}

export default Navbar;
