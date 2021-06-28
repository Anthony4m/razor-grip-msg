import React from 'react';

const ChatForm = () =>{

    return(
       <div className="chat-input-form">
           <form id="chat-input">
               <input type="text" required={true} placeholder="Type a msg"  id="msg"/>
               <button className="message-btn">Send</button>
           </form>

       </div>
    )
}
export default ChatForm;