import React from 'react';
import Sidebar from "./Sidebar";
import ChatPage from "./ChatPage";

const MainChat = ({name,senderMessage,receiverMessage})=>{
    return(
        <main className="chat-view">
            <Sidebar/>
            <ChatPage name={name} receiverMessage={receiverMessage}/>
        </main>
    )
}
export default MainChat;