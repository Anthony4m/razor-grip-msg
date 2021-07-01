import React, {useContext, useEffect, useState} from 'react';
import {useSocket} from "./ServerConnectionProvider";


const UsersOnlineContext = React.createContext();
export function useOnline() {
        return useContext(UsersOnlineContext)
}

export function UsersOnlineProvider(children) {
    const [usersOnline,setUsersOnline] = useState()
    const socket = useSocket();

    useEffect(()=>{
        socket.on('loggedIn-users',usersOnlineReceived=>{
            setUsersOnline(usersOnlineReceived)
        })
    },[usersOnline])

    return(
        <UsersOnlineContext.Provider value={usersOnline}>
            {children}
        </UsersOnlineContext.Provider>
    )
}