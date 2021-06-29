import React, {useContext} from 'react';
import useLocalStorage from "../hooks/useLocalStorage";
import {useUsers} from "./UsersProvider";


const ChatsContext = React.createContext();
export function useChats() {
    return useContext(ChatsContext)
}
export function ChatsProvider({children}){
    const  [chats,setChats] = useLocalStorage('chats',[]);
    const {users} = useUsers();
    const addChat = (recipients)=>{
        setChats(prevChats => {
            return [...prevChats,{recipients,messages:[]}]
        })
    }
    const outputMessage = chats.map(chat=>{
        const recipients = chat.recipients.map(recipient=>{
            const user = users.find(user =>{
                return user.username === recipient
            })
            const name = (user && user.name) || recipient
            return {username: recipient, name}
        })
        return {...chat,recipients}
    })

    const data = {
        chats: outputMessage,
        addChat

    }

    return(
        <ChatsContext.Provider value={data}>
            {children}
        </ChatsContext.Provider>
    )
}
