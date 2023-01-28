import React from "react";
import Sidebar from "../Components/Sidebar";
import Mainpage from "../Components/MainPage";
const HomePage = () =>{
    return(
        <div className="homepage">
            <div className="container">
                <Sidebar/>
                <Mainpage/>
            </div>
        </div>
    )
}
export default HomePage;