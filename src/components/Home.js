import React from 'react';
import Navbar from "./layout/Navbar";
import MainChat from "./layout/MainChat";
import useSocketConnection from "../hooks/useSocketConnection";

const Home = ()=>{
    const message = useSocketConnection();
    console.log(message)
    return(
        <div className="home-view">
            <Navbar/>
            <MainChat/>
        </div>
    )
}
export default Home;