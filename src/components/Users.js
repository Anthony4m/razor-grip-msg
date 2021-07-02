import React from 'react';
import {ListGroup} from "react-bootstrap";
import {useContacts} from "../context/ContactsProvider";

const Users = ()=>{
    const {contacts} = useContacts();
    return(
        <ListGroup variant = 'flush'>
            {contacts.map(contact=>(
                <ListGroup.Item className="chat-list" key={contact.username}>
                    {contact.username}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}
export default Users;