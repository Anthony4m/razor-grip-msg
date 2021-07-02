import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'

const SocketContext = React.createContext()

export function useSocket() {
    return useContext(SocketContext)
}

export function SocketProvider({ children, sendor }) {
    const [socket, setSocket] = useState()
    const [usersOnline, setUsersOnline] = useState([])

    useEffect(() => {
        const newSocket = io(
            'http://localhost:3001', { query: { sendor } }
        )
        setSocket(newSocket)
        newSocket.emit('login')
            // newSocket.on('loggedIn-users',message=>{console.log(message)})
        newSocket.on('loggedIn-users', usersOnline => {
            setUsersOnline(prevUsers => {
                    return [...prevUsers, { usersOnline }]
                })
                // console.log(usersOnline)
        })
        newSocket.on('disconnect', usersOnline => {
            setUsersOnline(prevUsers => {
                    return [...prevUsers, { usersOnline }]
                })
                // console.log(usersOnline)
        })


        return () => newSocket.close()
    }, [sendor])

    return ( <SocketContext.Provider value = {
            { socket, usersOnline } } > { children }
    </SocketContext.Provider>
    )
}