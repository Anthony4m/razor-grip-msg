import React from 'react';
import MainChat from "./layout/MainChat";
import {useAuth0} from "@auth0/auth0-react";
import {ChatsProvider} from "../context/ChatsProvider";
import {SocketProvider} from '../context/ServerConnectionProvider';

const Home = ()=>{
    // const message = useSocketConnection();
    // console.log(message)
    const {user} = useAuth0();
    return(
        <SocketProvider sendor={user.given_name}>
            <ChatsProvider sendor={user.given_name}>
                <div className="home-view">
                    {/*<Navbar/>*/}
                    <MainChat username={user.given_name}/>
                </div>
            </ChatsProvider>
        </SocketProvider>

    )
}
export default Home;