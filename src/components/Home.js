import React from 'react';
import MainChat from "./layout/MainChat";
import {useAuth0} from "@auth0/auth0-react";
import {ChatsProvider} from "../context/ChatsProvider";
import {SocketProvider} from '../context/ServerConnectionProvider';

const Home = ()=>{
    const {user} = useAuth0();
    return(
        <SocketProvider sendor={user.email}>
            <ChatsProvider sendor={user.given_name}>
                <div className="home-view">
                    <MainChat username={user.email}/>
                </div>
            </ChatsProvider>
        </SocketProvider>

    )
}
export default Home;