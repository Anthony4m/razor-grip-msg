import React, {useState} from 'react';

const ChatPage = ({name,receiverMessage})=>{
     const [senderMessage,setSenderMessage] = useState('');
     const [inputText,setInputText] = useState('');
     const handleSenderMessage = (e)=>{
         e.preventDefault();
         setSenderMessage(inputText)
     }
     return(
         <div className="chats-page">
         <div className="chats">
             {receiverMessage &&<div className="sender-messages chat-bubble">
                 <p className="meta">{name} <span>9:12pm</span></p>
                 <p className="message">{receiverMessage}</p>
             </div>}
             {senderMessage &&<div className="receiver-messages chat-bubble">
                 <p className="meta">{name} <span>9:12pm</span></p>
                 <p className="message">{senderMessage}</p>
             </div>}

             {/*<div className="sender-messages chat-bubble">*/}
             {/*    <p className="meta">{name} <span>9:12pm</span></p>*/}
             {/*    <p className="message">{receiverMessage}</p>*/}
             {/*</div>*/}
             {/*<div className="receiver-messages chat-bubble">*/}
             {/*    <p className="meta">{name} <span>9:30pm</span></p>*/}
             {/*    <p className="message">{senderMessage}</p>*/}
             {/*</div>*/}
         </div>
             <div className="chat-input-form">
                 <form onSubmit={handleSenderMessage} id="chat-input">
                     <input onChange={event => setInputText(event.target.value)} type="text" required={true} placeholder="Type a msg"  id="msg"/>
                     <button type="submit" className="message-btn">Send</button>
                 </form>

             </div>
            {/*<ChatForm/>*/}
         </div>
     )
 }
 export default ChatPage;