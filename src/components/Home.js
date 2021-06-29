import React from 'react';
import MainChat from "./layout/MainChat";
import {useAuth0} from "@auth0/auth0-react";

const Home = ()=>{
    // const message = useSocketConnection();
    // console.log(message)
    const {user} = useAuth0();
    return(
        <div className="home-view">
            {/*<Navbar/>*/}
            <MainChat username={user.given_name}/>
        </div>
    )
}
export default Home;