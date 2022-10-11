import React from "react";
import { NavLink } from "react-router-dom";


const Menu = () =>{


    return(
        <>
        <NavLink exact activeClassName="active-class" to="/">About Us</NavLink>
        <NavLink exact activeClassName = "active-class" to = "/contact">Contact Us</NavLink>
        <NavLink to="/user" >User</NavLink>
        </>
    );
};
export default Menu;