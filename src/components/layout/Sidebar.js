import React from 'react';
import {Link} from  'react-router-dom'
const Sidebar = ()=>{
    return(
        <div className="chat-sidebar">
            <h2 id="users-online">Users Online</h2>
                <ul id="users">
                    <li><Link to="">Tony</Link></li>
                    <li><Link to="">Kofi</Link></li>
                    <li><Link to="">Abena</Link></li>
                    <li><Link to="">Yaw</Link></li>

                </ul>
        </div>
    )
}
export default Sidebar;