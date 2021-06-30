import React, {useContext, useState} from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import {useContacts} from './ContactsProvider';
import {useAuth0} from "@auth0/auth0-react";

const ChatsContext = React.createContext()

export function useChats() {
    return useContext(ChatsContext)
}

export function ChatsProvider({ children , sendor}) {
    const {user} = useAuth0();
    const [chats, setChats] = useLocalStorage('conversations', [])
    const [selectedChatIndex, setSelectedChatIndex] = useState(0)
    const { contacts } = useContacts()


    function createChat(recipients) {
        //adds new messages to people to chat to chatlist
        setChats(prevChats => {
            return [...prevChats, { recipients, messages: [] }]
        })
    }

    const addMessageToChat = ({ recipients, text, sender }) => {
        setChats(prevChats => {
            let chatExist = false
            const newMessage = { sender, text }
            const newChats = prevChats.map(chat => {
                if (arrayIsTheSame(chat.recipients, recipients)) {
                    chatExist = true
                    return {
                        ...chat,
                        messages: [...chat.messages, newMessage]
                    }
                }

                return chat
            })

            if (chatExist) {
                return newChats
            } else {
                return [
                    ...prevChats,
                    { recipients, messages: [newMessage] }
                ]
            }
        })
    }


    function sendMessage(recipients, text) {
        addMessageToChat({ recipients, text, sender: user.given_name })
    }
    //Formating output user to be easier o work with checks if user is selected
    const formattedChats = chats.map((chat, index) => {
        const recipients = chat.recipients.map(recipient => {
            const contact = contacts.find(contact => {
                return contact.id === recipient
            })
            // find a user and add to the list of users
            const name = (contact && contact.name) || recipient
            return { id: recipient, name }
        })

        //Display messages on ui
        const messages = chat.messages.map(message=>{
            const contact = contacts.find(contact => {
                return contact.id === message.sender
            })
            // find a messga and add to the list of messages
            const name = (contact && contact.name) || message.sender
            const messageOrigin = sendor === message.sender
            return {...message,sentBy:name,messageOrigin}
        })

// if user selected output user
        const selected = index === selectedChatIndex
        return { ...chat,messages,recipients, selected }
    })

    const data = {
        chats: formattedChats,
        selectedChat: formattedChats[selectedChatIndex],
        sendMessage,
        selectChatIndex: setSelectedChatIndex,
        createChat

    }

    return(
        <ChatsContext.Provider value={data}>
            {children}
        </ChatsContext.Provider>
    )
}

const arrayIsTheSame = (a,b)=>{
    if (a.length !== b.length) return false

    a.sort()
    b.sort()

    return a.every((element,index)=>
    {
        return  element === b[index]
    })
}
