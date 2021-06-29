import React, {useRef} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useUsers} from "../context/UsersProvider";

const NewChatsModal = ({modalClose})=>{
    const usernameRef = useRef();
    const {addUser} = useUsers();
    const handleSubmit = (e)=>{
        e.preventDefault()
        addUser(usernameRef.current.value)
        modalClose()
    }

    return(
        <React.Fragment>
            <Modal.Header closeButton>
                Add User
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>username</Form.Label>
                        <Form.Control type ="text"  ref={usernameRef} required />
                    </Form.Group>
                    <Button type="submit">Add User</Button>
                </Form>
            </Modal.Body>
        </React.Fragment>
    )
}
export default NewChatsModal;