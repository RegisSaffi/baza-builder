import React,{useState} from 'react';
import './App.css';
import Home from './home.js';
import Login from './components/login.js';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'

function App() {
  return (
   
   <Router>
      <Home />
   </Router>
   
  );
}

export default App;
