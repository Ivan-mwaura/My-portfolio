import React, { useState } from "react";
import { Github } from "react-bootstrap-icons";
import data from "../Data";
import "../Pages/style.scss"

const Projects = () =>{
    const [datas] = useState(data)
    const [hoveredIcon, setHoveredIcon] = useState(null)
return(
<div className="projects--herosection">
    <div className="projects--heading">
        <p className="projects--paragraph">Here are some of my projects</p>
    </div>
    <div className="projects">
        
        {datas.map(dt =>{
            return(
                <div className="projects--container">
                    <h1><a href = {dt.check} target="_blank " >{dt.name}</a></h1>
                    <p className="projects--git--icon"
                     onMouseEnter = {()=>{setHoveredIcon("github")}}
                     onMouseLeave = {()=> {setHoveredIcon(null)}}
                    ><a href = {dt.github} target="_blank " >
                        <Github 
                         color = {hoveredIcon === "github" ? "#64ffda" : "white"}
                          size = {30}  
                          className="github"
                        />
                    </a></p>
                    <p className="projects--description">{dt.description}</p>
                    <p className="projects--tech">
                        <p></p>
                        <ol>Tech used:
                            <li>{dt.tech[1]}</li>
                            <li>{dt.tech[2]}</li>
                            <li>{dt.tech[3]}</li>
                            <li>{dt.tech[4]}</li><br/>
                            <li>{dt.tech[5]}</li>
                        </ol>
                    </p>
                </div>
            )
        })}
    </div>
 </div>
)   
}
export default Projects;