import React, {useEffect, useState} from 'react';
import './App.css';
import socketIOClient from "socket.io-client";
import Home from "./components/Home";

//backend server port connector
const ENDPONT = 'http://127.0.0.1:3001';

function App() {
    const socket = socketIOClient(ENDPONT);
    const [message,setmessage] = useState('')
    const [clientMessage, setClientMessage] = useState('')
    const [text,setText] = useState('')
    useEffect(()=>{
        console.log("here")
        //indicate handshake has occured between client and server
        socket.on('node',message=>{
            setmessage(message)
        })
        //message sent to server
        socket.emit('client','hello from client')
    });

     const sendmessage = (e)=>{
         e.preventDefault()
         socket.emit("client",text);
         setClientMessage(text);
     }
  return (
    <div className="App">
        {/*<LoginBtn/>*/}
      <Home/>
    </div>
  );
}

export default App;
