import React from 'react';
import LogoutBtn from "../Auth/Logout";

const Navbar = ()=>{
    return(
        <header className="chat-header">
            <h1>Razor Grip</h1>
            <LogoutBtn/>
        </header>
    )
}

export default Navbar;