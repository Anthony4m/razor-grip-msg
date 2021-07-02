import React from "react";
import {useSocket} from "../context/ServerConnectionProvider";
import {ListGroup} from "react-bootstrap";

const Online = ()=>{
    const {usersOnline} = useSocket()
    return(
        <ListGroup variant = 'flush'>
            {usersOnline.map((userOnline,index)=>(
                <ListGroup.Item className="chat-list" key={index}>
                    {userOnline['usersOnline']}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default Online;