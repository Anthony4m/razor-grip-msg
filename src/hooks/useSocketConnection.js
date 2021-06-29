import React, {useEffect, useState} from 'react';
import socketIOClient from "socket.io-client";

const ENDPOINT = 'http://127.0.0.1:3001/'

const useSocketConnection = () =>{
     const socket = socketIOClient(ENDPOINT)
     const [message,setMessage] = useState('')
     const [clientMessage,setClientMessage] = useState('')
     const [text,setText] = useState('')
    useEffect(()=>{
        console.log('here')

        socket.on("message",message=>{
            setMessage(message)
        })
        socket.emit("client","hello from client ")
    },[]);
     return message;
}

export default useSocketConnection;