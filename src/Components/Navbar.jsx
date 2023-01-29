import React from "react";
import "../Pages/style.scss"
import { Link } from "react-router-dom";
import {Justify} from "react-bootstrap-icons"
import {X} from "react-bootstrap-icons"
import useCollapse from "react-collapsed";

const Navbar = () =>{
   
    
    const { getCollapseProps, getToggleProps, isExpanded,setExpanded} = useCollapse();

    const handleMenuClick = ()=>{
       setExpanded(!isExpanded)
    }
  
    return(
    <div className="Navbar--container">
        <nav className="Navbar">  
          <div className="collapsible">
            <div className="header" {...getToggleProps()}>
             <button

                >
                    {isExpanded ? <X
                    size={40}
                    color ="#64ffda"
                    />: <Justify
                    size={40}
                    color ="#64ffda"

                />}</button> 
              </div >
              <div {...getCollapseProps()}>
                    <div className="content">


                        <ol>
                            <li onClick={handleMenuClick}><Link to = "/about" className="link" ><span className="number">01. </span>About</Link></li>
                            <li onClick={handleMenuClick}><Link to ="/" className="link"><span className="number">02. </span>Profile</Link></li>
                            <li onClick={handleMenuClick}><Link to ="/contact" className="link"><span className="number">03. </span>Contact</Link></li>
                            <li onClick={handleMenuClick}><Link to = "/project" className="link"><span className="number">04. </span>Projects</Link></li>
                            <li onClick={handleMenuClick}><Link to = "/resume" className="link"><span className="number">05. </span>Resume</Link></li>
                        </ol>
                    </div>
              </div>

           </div>
             
            <button><Link to = "/resume" className="link-button">Resume</Link></button>
            <button><Link to = "/project" className="link"><span className="number">04. </span>Projects</Link></button>
            <button><Link to ="/contact" className="link"><span className="number">03. </span>Contact</Link></button>
            <button><Link to ="/about" className="link"><span className="number">02. </span>About</Link></button>
            <button><Link to ="/" className="link"><span className="number">01. </span>Profile</Link></button>
            
        </nav>
       
    </div>
    )
}
export default Navbar;