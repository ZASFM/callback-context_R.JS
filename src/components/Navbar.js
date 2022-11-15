import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg'

const Navbar=()=>{
   return (
      <div>
         <Link to="/">
            <img src={logo} alt="logo"/>
         </Link>
         
         <Link to="/">
            Home
         </Link>

         <Link to="/about">
            About
         </Link>
      </div>
   )
}

export default Navbar;