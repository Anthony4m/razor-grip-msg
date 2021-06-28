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

        socket.on("node",message=>{
            setMessage(message)
        })
        socket.emit("client","hello from client ")
    });
     const sendmessage = (e)=>{
         e.preventDefault()
         socket.emit("react",text);
         setClientMessage(text);
     }
     return message;
}

export default useSocketConnection;