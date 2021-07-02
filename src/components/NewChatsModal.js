import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useContacts} from "../context/ContactsProvider";
import {useChats} from "../context/ChatsProvider";

const NewUsersModal = ({modalClose})=>{
    const {contacts} = useContacts()
    const {createChat} = useChats()
    const [selectedContactName,setSelectedContactName] = useState([]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        createChat(selectedContactName)
        modalClose()
    }
    const handleCheckboxChange = (username)=>{
        setSelectedContactName(prevSelectedContactName=>{
            // if username alredy selected remove else add it to selected users
            if (prevSelectedContactName.includes(username)){
                return prevSelectedContactName.filter(prevId =>{
                    return username !== prevId
                })
            } else {
                return [...prevSelectedContactName,username]
            }
        })
    }
    return(
        <React.Fragment>
            <Modal.Header closeButton>
                Create New Chat
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {contacts.map((contact,index)=>(
                        <Form.Group controlId={contact.username} key={contact.username}>
                            <Form.Check type="checkbox"
                                        value={selectedContactName.includes(contact.username)}
                                        label={contact.username}
                                        onChange={()=> handleCheckboxChange(contact.username)}
                            />
                        </Form.Group>
                    ))}
                    <Button type="submit" className="btn btn-submit">Add User</Button>
                </Form>
            </Modal.Body>
        </React.Fragment>
    )
}
export default NewUsersModal;