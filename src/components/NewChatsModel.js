import React, {useRef} from 'react';
import {Form, Modal} from "react-bootstrap";

const NewChatsModal = ()=>{
    const usernameRef = useRef();
    const handleSubmit = (e)=>{
        e.preventDefault()
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
                </Form>
            </Modal.Body>
        </React.Fragment>
    )
}
export default NewChatsModal;