import React, { useState } from "react";
import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData";

function Navbar() {
   {/* Setting state on sidebar to aid in open/close*/}
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div id="navbar">
      <Link to="#" id="menu-bars">
        <FaIcons.FaBars onClick={showSidebar} />
      </Link>
       {/*Menu Toggle active/off . Menu Items will display or slide left*/}
      <nav id={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul id="nav-menu-items">
          <li id="navbar-toggle">
             {/*Menu Bar Icon */}
            <Link to="#" id="menu-bars">
            </Link>
          </li>
       {/*Mapping over menu data to retrieve item  /path */}
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
