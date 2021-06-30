import React from 'react';
import Sidebar from "./Sidebar";
import ChatPage from "./ChatPage";
import {useChats} from "../../context/ChatsProvider";


const MainChat = ({username})=>{
    const {selectedChat} = useChats()
    return(
        <div className="d-flex main-chat">
            <Sidebar username={username}/>
            {selectedChat && <ChatPage/>}
        </div>

)
}
export default MainChat;