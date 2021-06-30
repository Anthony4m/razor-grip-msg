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
            console.log(input);
        sendMessage(
            selectedChat.recipients.map(receiver => receiver.id),
            input
        )
        setInput('')
    }
     return(
         <div className="d-flex flex-column flex-grow-1">
             <div className="flex-grow-1 overflow-auto">
                <div className=" d-flex flex-column align-items-start justify-content-end px-3">
                    {selectedChat.messages.map((message,index)=>{
                        const currentMessage = selectedChat.messages.length - 1 === index
                        return (
                            <div ref={currentMessage ? setCurrentMessageRef : null}
                                key={index}
                                 className={`my-1 d-flex flex-column ${message.messageOrigin ? `align-self-end` : ''}`}
                            >
                                <div className={`rounded px-2 py-1 ${message.messageOrigin ? 'bg-primary text-white' : 'border'}`}>{message.text}</div>
                                <div className={`text-muted small ? {message.messageOrigin ? 'text-right' : ''}`}>{message.messageOrigin ? "You": message.sentBy}</div>
                            </div>
                        )})
                    }
                </div>
             </div>
             <Form onSubmit={handleSubmit}>
                 <Form.Group className="m-2">
                     <InputGroup>
                         <Form.Control
                             as="textarea"
                             required
                             value={input}
                             onChange={e => setInput(e.target.value)}
                             style={{ height: '75px', resize: 'none' }}
                         />
                         <InputGroup.Append>
                             <Button type="submit">Send</Button>
                         </InputGroup.Append>
                     </InputGroup>
                 </Form.Group>
             </Form>
         </div>
     )
 }
 export default ChatPage;