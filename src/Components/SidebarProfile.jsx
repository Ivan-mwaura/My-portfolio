import React from "react";
import "../Pages/style.scss"
import { Github } from "react-bootstrap-icons";
import {Linkedin} from "react-bootstrap-icons"
import {Twitter} from "react-bootstrap-icons"
import {Instagram} from "react-bootstrap-icons"
import {Discord} from "react-bootstrap-icons"


const SidebarProfile= () =>{
    return(
        <div className="sideprofile--container">
            <div className="profile">
                <img src ={"/Img/huskie_5.jfif"} className="profile-image" alt = {"missing"}/>
                <pre>Ivan Mwaura</pre>
            </div>
            <div className="icons" >
                <Github
                    size={30}
                    color ="white"
                    className="icon"
                />
                <br/>
                <br/>
                
                <Linkedin 
                    size={30}
                    color ="white"
                    className="icon"
                />
                <br/>
                <br/>
                <Twitter 
                    size={30}
                    color ="white"
                    className="icon"
                />
                <br/>
                <br/>
                <Instagram
                    size={30}
                    color ="white"
                    className="icon"
                />
                <br/>
                <br/>
                <Discord
                    size={30}
                    color ="white"
                    className="icon"
                />
            </div>
        </div>
    )
}
export default SidebarProfile;
