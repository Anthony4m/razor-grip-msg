import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import PrivateRoute from "./components/Auth/PrivateRoute";
import Home from "./components/Home";
import {UsersProvider} from "./context/UsersProvider";
import {ChatsProvider} from "./context/ChatsProvider";


function App() {
    const home = (
        <UsersProvider>
            <ChatsProvider>
            <PrivateRoute path="/" component={Home}/>
            </ChatsProvider>
        </UsersProvider>
    )
  return (
      <Router>
    <div className="App">
        <Switch>
            {home}
        </Switch>
    </div>
      </Router>
  );
}

export default App;
