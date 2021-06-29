import React from 'react';
import {ListGroup} from "react-bootstrap";
import {useUsers} from "../context/UsersProvider";

const Users = ()=>{
    const {users} = useUsers();
    return(
        <ListGroup variant = 'flush'>
            {users.map(user=>(
                <ListGroup.Item key={user.username}>
                    {user.username}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}
export default Users;