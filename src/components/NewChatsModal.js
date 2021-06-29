import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useUsers} from "../context/UsersProvider";
import {useChats} from "../context/ChatsProvider";

const NewUsersModal = ({modalClose})=>{
    const {users} = useUsers()
    const {addChat} = useChats()
    const [selectedUsername,setSelectedUsername] = useState([]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        addChat(selectedUsername)
        modalClose()
    }
    const handleCheckboxChange = (username)=>{
        setSelectedUsername(prevSelectedUsername=>{
            // if username alredy selected remove else add it to selected users
            if (prevSelectedUsername.includes(username)){
                return prevSelectedUsername.filter(prevId =>{
                    return username !== prevId
                })
            } else {
                return [...prevSelectedUsername,username]
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
                    {users.map(user=>(
                        <Form.Group controlId={user.username} key={user.username}>
                            <Form.Check type="checkbox"
                                        value={selectedUsername.includes(user.username)}
                                        label={user.username}
                                        onChange={()=> handleCheckboxChange(user.username)}
                            />
                        </Form.Group>
                    ))}
                    <Button type="submit">Add User</Button>
                </Form>
            </Modal.Body>
        </React.Fragment>
    )
}
export default NewUsersModal;