import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import PrivateRoute from "./components/Auth/PrivateRoute";
import Home from "./components/Home";


function App() {
  return (
      <Router>
    <div className="App">
        <Switch>
        <PrivateRoute path="/" component={Home}/>
        </Switch>
    </div>
      </Router>
  );
}

export default App;
