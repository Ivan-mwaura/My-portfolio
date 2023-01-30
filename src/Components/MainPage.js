import React from "react";
import "../Pages/style.scss"
import Navbar from "../Components/Navbar";
import { Routes,Route } from "react-router-dom";
import Profile from "../Components/ProfilePage";
import About from "../Components/About";
import Projects from "../Components/Projects"
import Contact from "../Components/Contact";
import Resume from "../Components/Resume"
/*import Footer from "../Components/Footer";*/


const Mainpage= () =>{
    
    return(
        <div className="main--page">
          <Navbar/>
          <Routes>
           <Route path="/" element ={<Profile/>} />
           <Route path="/about" element = {<About/>}/>
           <Route path="/contact" element ={<Contact/>}/>
           <Route path ="/project" element ={<Projects/>}/>
           <Route path = "/resume" element ={<Resume/>}/>
           <Route path="*" default element = {<Profile/>} />
        </Routes>
        </div>
    )
}
export default Mainpage;