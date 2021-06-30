import React, {useContext, useEffect, useState} from 'react'
import io from 'socket.io-client'

const SocketContext = React.createContext()

export function useSocket() {
    return useContext(SocketContext)
}

export function SocketProvider({ children,sendor }) {
    const [socket, setSocket] = useState()

    useEffect(() => {
        const newSocket = io(
            'http://localhost:3001',
            { query: { sendor } }
        )
        setSocket(newSocket)

        return () => newSocket.close()
    }, [sendor])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}