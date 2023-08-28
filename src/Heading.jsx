import { useState } from 'react';
import React from 'react';
import TeslaLogo from './images/logo.svg';
import CloseIcon from "@mui/icons-material/Close"
// import './Tesla.css'


function Heading() {
  const[sidemenu,setSideMenu]= useState(false)

function handleMenu(e){
e.preventDefault()
setSideMenu(!sidemenu)
}

  return (
    <>
    <div className="header">
    <img src={TeslaLogo} alt="" />
        <ul>
          <li><a href="">Model 3</a></li>
          <li><a href="">Model S</a></li>
          <li><a href="">Model X</a></li>
          <li><a href="">Model Y</a></li>
          <li><a href="">Solar Panel</a></li>
          <li><a href="">Solar Roof</a></li>
        </ul>
        <ul className='SecondMenu'>
            <li><a href="">Shop</a></li>
            <li><a href="">Account</a></li>
            <li><a href="" onClick={handleMenu}>Menu</a></li>
            
        </ul>
        <ul className="sidebar" style={{ right: sidemenu ? "0" : "-250px" }}>
        <CloseIcon className="closeIcon" onClick={handleMenu} />
        <li><a href="">Model 3</a></li>
          <li><a href="">Model S</a></li>
          <li><a href="">Model X</a></li>
          <li><a href="">Model Y</a></li>
          <li><a href="">Solar Panel</a></li>
          <li><a href="">Solar Roof</a></li>
          <li><a href=""></a>Existing Inventory</li>
          <li><a href=""></a>Used Inventory</li>
          <li> <a href="">Trade In</a></li>
        <li><a href="">Test Drive</a> </li>
        <li><a href="">Powerwall</a></li>
        <li><a href="">Commercial Energy</a> </li>
        </ul>
    
        </div>
    
    </>
  )
}


export default Heading