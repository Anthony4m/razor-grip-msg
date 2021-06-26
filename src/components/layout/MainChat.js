import React from 'react';
import Sidebar from "./Sidebar";
import ChatPage from "./ChatPage";
import ChatForm from "./ChatForm";

const MainChat = ()=>{
    return(
        <main className="chat-view">
            <Sidebar/>
            <ChatPage/>
        </main>
    )
}
export default MainChat;