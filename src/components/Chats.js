import React from 'react';
import {ListGroup} from "react-bootstrap";
import {useChats} from "../context/ChatsProvider";

const Chats = ()=>{
    const {chats,selectChatIndex} = useChats();
    return(
        <ListGroup  variant = 'flush'>
            {chats.map((chat,index)=>(
                <ListGroup.Item className="chat-list" key={index}
                                active={chat.selected}
                action
                                onClick={()=> selectChatIndex(index)}
                >
                    {chat.recipients.map(recipient=>recipient.name).join(',')}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}
export default Chats;