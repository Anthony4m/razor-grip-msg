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

        socket.on('node',message=>{
            setmessage(message)
        })
        socket.emit('react','hello from react')
    });

     const sendmessage = (e)=>{
         e.preventDefault()
         socket.emit("react",text);
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
