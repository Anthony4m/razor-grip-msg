import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./layout/Navbar";
import MainChat from "./layout/MainChat";
const Home = ()=>{
    return(
        <Router>
        <div className="home-view">
            <Navbar/>
            <MainChat/>
        </div>
        </Router>
    )
}
export default Home;