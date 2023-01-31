import React, { useState } from "react";
import "../Pages/style.scss"
import { Github } from "react-bootstrap-icons";
import {Linkedin} from "react-bootstrap-icons"
import {Twitter} from "react-bootstrap-icons"
import {Instagram} from "react-bootstrap-icons"
import {Discord} from "react-bootstrap-icons"


const SidebarProfile= () =>{
    const [hoveredIcon, setHoveredIcon] = useState(null)
    const [rotate,setRotate] = useState(false)
    return(
        <div className="sideprofile--container">
            <div className="profile">
                <img src ={"/Img/huskie_5.jfif"} className="profile-image" alt = {"missing"}/>
                    <pre 
                    onMouseEnter={() => {setRotate(true)}}
                    onMouseLeave ={() => {setRotate(false)}}
                    className={rotate ? "rotate" : ""}>Ivan Mwaura</pre>
            </div>
            <div className="icons" >
                <div
                onMouseEnter = {()=>{setHoveredIcon("github")}}
                onMouseLeave = {()=> {setHoveredIcon(null)}}
                >
                <a href="https://github.com/Ivan-mwaura">
                <Github
                    size={30}
                    color = {hoveredIcon === "github" ? "#64ffda" : "white"}
                    className = "icon"
                
                />
                </a>
                </div>
                <br/>
                <br/>
                <div
                  onMouseEnter = {()=>{setHoveredIcon("linkedin")}}
                  onMouseLeave = {()=> {setHoveredIcon(null)}}
                >
                <Linkedin 
                    size={30}
                    color = {hoveredIcon === "linkedin" ? "#64ffda" : "white"}
                    className="icon"
                />
                </div>
                <br/>
                <br/>
                <div
                 onMouseEnter = {()=>{setHoveredIcon("twitter")}}
                 onMouseLeave = {()=> {setHoveredIcon(null)}}
                >
                <Twitter 
                    size={30}
                    color = {hoveredIcon === "twitter" ? "#64ffda" : "white"}
                    className="icon"
                />
                </div>
                <br/>
                <br/>
                <div
                 onMouseEnter = {()=>{setHoveredIcon("instagram")}}
                 onMouseLeave = {()=> {setHoveredIcon(null)}}
                >
                <Instagram
                    size={30}
                    color = {hoveredIcon === "instagram" ? "#64ffda" : "white"}
                    className="icon"
                />
                </div>
                <br/>
                <br/>
                <div
                onMouseEnter = {()=>{setHoveredIcon("discord")}}
                onMouseLeave = {()=> {setHoveredIcon(null)}}
                >
                <Discord
                    size={30}
                    color = {hoveredIcon === "discord" ? "#64ffda" : "white"}
                    className="icon"
                />
                </div>
            </div>
        </div>
    )
}
export default SidebarProfile;
