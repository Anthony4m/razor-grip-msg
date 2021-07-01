import React, {useContext} from 'react';
import useLocalStorage from "../hooks/useLocalStorage";


const ContactsContext = React.createContext();
export function useContacts() {
    return useContext(ContactsContext)
}
export function ContactsProvider({children}){
    const  [contacts,setContacts] = useLocalStorage('users',[]);
    const createContact = (username)=>{
        setContacts(prevContacts => {
            return [...prevContacts,{username}]
        })

    }
        // socket.emit('reach','reach here')

    return(
       <ContactsContext.Provider value={{contacts,createContact}}>
           {children}
       </ContactsContext.Provider>
    )
}
