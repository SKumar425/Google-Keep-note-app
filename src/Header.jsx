import React from "react";
import logo from './Images/logo.png';

function Header() {
  return (
    <div className="header">
       <img  src={logo} alt="logo" width='50' height='50'/>
       <h1>Google Keep</h1>
    </div>
  );
}

export default Header;