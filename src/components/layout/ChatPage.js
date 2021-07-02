import React, {useCallback, useState} from 'react'
import {Button, Form, InputGroup} from "react-bootstrap";
import {useChats} from "../../context/ChatsProvider";

const ChatPage = ()=>{
    const [input,setInput] = useState('');
    //scrolls to the current message sent
    const setCurrentMessageRef = useCallback(place =>{
        if (place){
            place.scrollIntoView({smooth:true})
        }
        },[])
    const {sendMessage,selectedChat} = useChats();
    const handleSubmit = (e) =>{
        e.preventDefault()
        sendMessage(
            selectedChat.recipients.map(receiver => receiver.id),
            input
        )
        setInput('')
    }
     return(
         <div className="d-flex flex-column chat-area flex-grow-1">
             <div className="flex-grow-1 overflow-auto">
                <div className=" d-flex flex-column align-items-start justify-content-end px-3">
                    {selectedChat.messages.map((message,index)=>{
                        const time = new Date().toLocaleTimeString()
                        const currentMessage = selectedChat.messages.length - 1 === index
                        return (
                            <div ref={currentMessage ? setCurrentMessageRef : null}
                                key={index}
                                 className={`my-1 d-flex flex-column ${message.messageOrigin ? `align-self-end` : ''}`}
                            >
                                <div className="chat-bubble">
                                <div className={`rounded px-2 py-1 ${message.messageOrigin ? ' text-white receiver-messages' : 'border sender-messages'}`}>
                                    <div className={` small meta ? {message.messageOrigin ? 'text-right' : ''}`}>{message.messageOrigin ? "You": message.sentBy}   {message.time}</div>
                                    {message.text}
                                </div>
                                </div>

                            </div>

                        )})
                    }
                </div>
             </div>
             <Form onSubmit={handleSubmit}>
                 <Form.Group className="m-2">
                     <InputGroup>
                         <Form.Control
                             className="chat-input-form"
                             as="textarea"
                             required
                             placeholder="Type a message..."
                             value={input}
                             onChange={e => setInput(e.target.value)}
                             style={{ height: '75px', resize: 'none' }}
                         />
                         <InputGroup.Append>
                             <Button type="submit" className="message-btn">Send</Button>
                         </InputGroup.Append>
                     </InputGroup>
                 </Form.Group>
             </Form>
         </div>
     )
 }
 export default ChatPage;