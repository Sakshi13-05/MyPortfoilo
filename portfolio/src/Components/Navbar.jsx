import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdPriceChange } from "react-icons/md";
import "./Common.css";

import { TbExchange } from "react-icons/tb";

function Navbar(props) {
   
  return (
  <div className='common' theme={props .dabaa? "dark":"light"}> 
    <nav className="navbar">
    
      <MdPriceChange className="rotating-icon fas-fa-sync"size={90}/>
      <div className="navbar-links">
        <Link to="/" className="link" >Home</Link>
        <Link to="/AboutMe" className="link" >AboutMe</Link>
        <Link to="/Skills" className="link" >Skills</Link>
        <Link to="/Projects" className="link" >Projects</Link>
        <Link to="/Certificate" className="link" >Certificate</Link>
        <Link to="/ContactMe" className="link" >ContactMe</Link>
        <button onClick={props.changeTheme}><TbExchange size={30}/></button>
      </div>
    </nav>
    </div> 
    
  );
}

export default Navbar;