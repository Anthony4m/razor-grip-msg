import React, {useState} from 'react';
import useSocketConnection from "../../hooks/useSocketConnection";
import socketIOClient from "socket.io-client";


const ENDPOINT = 'http://127.0.0.1:3001/'
const ChatPage = ({name,receiverMessage})=>{
    const socket = socketIOClient(ENDPOINT)
     const [senderMessage,setSenderMessage] = useState('');
     const [inputText,setInputText] = useState('');
    const receivedmessage = useSocketConnection();
    const handleReceived = (message)=>{
        const div = document.createElement('div');
        div.classList.add('receiver-messages','chat-bubble');
        div.innerHTML = ` <p className="meta">${name} <span>9:12pm</span></p>
                 <p className="message">${message}</p>`
        // setSenderMessage(inputText)
        // useSocketConnection()
        //Sender Message Text
        document.querySelector('.chats').appendChild(div);
    }
     const handleSenderMessage = (e)=>{
         e.preventDefault();
          const div = document.createElement('div');
          div.classList.add('sender-messages','chat-bubble');
          div.innerHTML = ` <p className="meta">${name} <span>9:12pm</span></p>
                 <p className="message">${senderMessage}</p>`
         // setSenderMessage(inputText)
         // useSocketConnection()
         //Sender Message Text
         document.querySelector('.chats').appendChild(div);
         socket.emit('senderMessage',senderMessage)
         setSenderMessage('');
     }
     return(
         <div className="chats-page">
         <div className="chats">
             {/*{receiverMessage && <div>*/}
             {/*    {(receiverMessage.map(message)=>(*/}
             {/*        <div className="sender-messages chat-bubble">*/}
             {/*        <p className="meta">{name} <span>9:12pm</span></p>*/}
             {/*        <p className="message">{receiverMessage}</p>*/}
             {/*        </div>*/}
             {/*        ))}</div>}*/}
             {receivedmessage && handleReceived(receivedmessage)
             // <div>
             //     <div className="receiver-messages chat-bubble">
             //     <p className="meta">{name} <span>9:12pm</span></p>
             //     <p className="message">{receivedmessage}</p>
             // </div></div>
             }

             {/*<div className="sender-messages chat-bubble">*/}
             {/*    <p className="meta">{name} <span>9:12pm</span></p>*/}
             {/*    <p className="message">{receivedmessage}</p>*/}
             {/*</div>*/}
             {/*<div className="receiver-messages chat-bubble">*/}
             {/*    <p className="meta">{name} <span>9:30pm</span></p>*/}
             {/*    <p className="message">{senderMessage}</p>*/}
             {/*</div>*/}
         </div>
             <div className="chat-input-form">
                 <form onSubmit={handleSenderMessage} id="chat-input">
                     <input onChange={event => setSenderMessage(event.target.value)} value={senderMessage} type="text" required placeholder="Type a msg"  id="msg"/>
                     <button type="submit" className="message-btn">Send</button>
                 </form>

             </div>
            {/*<ChatForm/>*/}
         </div>
     )
 }
 export default ChatPage;