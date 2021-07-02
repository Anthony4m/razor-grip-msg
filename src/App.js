import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import PrivateRoute from "./components/Auth/PrivateRoute";
import Home from "./components/Home";
import {ContactsProvider} from "./context/ContactsProvider";


function App() {
        // const {user} = useAuth0()
    const home = (
        <ContactsProvider>
            <PrivateRoute path="/" component={Home}/>
        </ContactsProvider>
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
