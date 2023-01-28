import React from "react";
import "../Pages/style.scss"
import { Link ,Routes,Route} from "react-router-dom";
import Profile from "../Components/ProfilePage";
import About from "../Components/About";
import Projects from "../Components/Projects"
import Contact from "../Components/Contact";
import Resume from "../Components/Resume"
import {Justify} from "react-bootstrap-icons"
import {X} from "react-bootstrap-icons";
import useCollapse from "react-collapsed";
import {Navigate} from "react-router-dom";

const Navbar = () =>{
   
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return(
    <div className="Navbar--container">
        <nav className="Navbar">  
          <div className="collapsible">
            <div className="header" {...getToggleProps()}>
             <button

                >
                    {isExpanded ? <X
                    size={40}
                    color ="white"
                    />: <Justify
                    size={40}
                    color ="#64ffda"

                />}</button> 
              </div >
              <div{...getCollapseProps()}>
                    <div className="content">
                        <ol>
                            <li><Navigate to="/about"/>About</li>
                            <li><Link  to ="/profile" className="link">Profile</Link></li>
                            <li><Link Nav ="/contact" className="link">Contact</Link></li>
                            <li><Link to = "/project" className="link">Projects</Link></li>
                            <li><Link to = "/resume" className="link">Resume</Link></li>
                        </ol>
                    </div>
              </div>

           </div>
             
            <button><Link to = "/resume" className="link">Resume</Link></button>
            <button><Link to = "/project" className="link">Projects</Link></button>
            <button><Link to ="/contact" className="link">Contact</Link></button>
            <button><Link to ="/profile" className="link">Profile</Link></button>
            <button><Link to ="/about" className="link">About</Link></button>
   
        </nav>
        <Routes>
           <Route path="/profile" element ={<Profile/>}/>
           <Route path="/about" element = {<About/>}/>
           <Route path="/contact" element ={<Contact/>}/>
           <Route path ="/project" element ={<Projects/>}/>
           <Route path = "/resume" element ={<Resume/>}/>
        </Routes>
    </div>
    )
}
export default Navbar;