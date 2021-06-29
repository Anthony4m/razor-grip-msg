import React from 'react';
import Sidebar from "./Sidebar";

const MainChat = ({username})=>{
    return(
        <div className="d-flex main-chat">
            <Sidebar username={username}/>
        </div>

)
}
export default MainChat;