import React, {useState} from 'react';
import {Button, Modal, Nav, Tab} from "react-bootstrap";
import Users from "../Users";
import Chats from "../Chats";
import NewChatsModal from "../NewChatsModel";
import NewUsersModal from "../NewUsersModel";

const Sidebar = ({username})=>{
     const chatKey = 'chats';
     const usersKey = 'users';
     const [activeKey,setActiveKey] = useState(chatKey);
     const [modalOpen,setModalOpen] = useState(false);
     const chatsOpen = activeKey === chatKey;
     const modalClose = ()=>{
        setModalOpen(false)
     }
    return(
        <div className="chat-sidebar d-flex flex-column">
            {/*<h2 id="users-online">Users Online</h2>*/}
              <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                  <Nav variant = "tabs" className="justify-content-center">
                      <Nav.Item>
                          <Nav.Link eventKey={chatKey}>
                                Chats
                          </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link eventKey={usersKey}>
                                Users
                          </Nav.Link>
                      </Nav.Item>
                  </Nav>
                  <Tab.Content className="overflow-auto flex-grow-1">
                      <Tab.Pane eventKey ={chatKey}>
                          <Chats/>
                      </Tab.Pane>
                      <Tab.Pane eventKey ={usersKey}>
                          <Users/>
                      </Tab.Pane>
                  </Tab.Content>
                  <div className="p-2">
                      Username: <span>{username}</span>
                  </div>
                  <Button onClick={() => setModalOpen(true)}>
                      ADD {chatsOpen ? 'Chats' : 'Users'}
                  </Button>
              </Tab.Container>

            <Modal show={modalOpen} onHide={modalClose}>
                {chatsOpen ?
                <NewChatsModal modalClose={modalClose}/> :
                    <NewUsersModal modalClose={modalClose}/>
                }
            </Modal>
        </div>
    )
}
export default Sidebar;