import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Navbar,
  NavbarBrand,
} from 'reactstrap';

function NavigationBar(props) {
    // const [drop, setdrop] = useState();

  return (
    <>
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
        <Navbar style={{
            // height: "40px",
            width: "100%",
            padding: "0%",
            display: "flex",
            // flexDirection: "row",
            // justifyContent: "space-evenly",
            // alignItems: "center",
            // textDecoration: "none",
            background: "var(--senary)"
        }}>

            <NavbarBrand style={{ color: "var(--nonary)"}}>mikemuncy.com</NavbarBrand>

            <NavLink to="/" style={{ color: "var(--denary)", textDecoration: "none" }}>HOME</NavLink>

            <NavLink to="/about" style={{ color: "var(--denary)", textDecoration: "none" }}>ABOUT</NavLink>

            <NavLink to="/learning" style={{ color: "var(--denary)", textDecoration: "none" }}>LEARNING</NavLink>

            <NavLink to="/projects" style={{ color: "var(--denary)", textDecoration: "none" }}>PROJECTS</NavLink>

        </Navbar>
        
    </div>    
    </>
  );
}


export default NavigationBar;