import React from 'react';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Certificate from './Components/Certificate';
import ContactMe from './Components/ContactMe';
import { useState } from 'react';
import './App.css'


function App() {
  let[changeColor,setChangeColor]=useState(localStorage.getItem("theme")===true);
  function changeTheme()
  {
    localStorage.setItem("theme",!changeColor);
    setChangeColor((prev)=>!prev);
  }
 
  return (
    <BrowserRouter>
    <Navbar dabaa={changeColor} changeTheme={changeTheme} />
    
    <Routes>
      <Route path="/" element={<Home dabaa={changeColor} changeTheme={changeTheme}/>}/>
      <Route path="/AboutMe" element={<AboutMe dabaa={changeColor} changeTheme={changeTheme}/>}/>
      <Route path="/Skills" element={<Skills dabaa={changeColor} changeTheme={changeTheme}/>}/>
      <Route path="/Projects" element={<Projects  dabaa={changeColor} changeTheme={changeTheme}/>}/>
      <Route path="/Certificate" element={<Certificate  dabaa={changeColor} changeTheme={changeTheme}/>}/>
      <Route path="/ContactMe" element={<ContactMe  dabaa={changeColor} changeTheme={changeTheme}/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
