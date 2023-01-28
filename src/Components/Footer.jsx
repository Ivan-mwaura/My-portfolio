import React from "react"
import "../Pages/style.scss"
import { Github } from "react-bootstrap-icons";
import {Linkedin} from "react-bootstrap-icons"
import {Twitter} from "react-bootstrap-icons"
import {Instagram} from "react-bootstrap-icons"
import {Discord} from "react-bootstrap-icons"

const Footer = () => {
    return(
        <div className="footer">
           <div className="footer-content">
             <Github
                    size={30}
                    color ="white"
                    className="icon"
                />
                
                
                <Linkedin 
                    size={30}
                    color ="white"
                    className="icon"
                />
                
                <Twitter 
                    size={30}
                    color ="white"
                    className="icon"
                />
                
                <Instagram
                    size={30}
                    color ="white"
                    className="icon"
                />
              
                <Discord
                    size={30}
                    color ="white"
                    className="icon"
                />
            </div>
        </div>
    )
}
export default Footer;