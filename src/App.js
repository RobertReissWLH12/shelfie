import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
// import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Header />
      <Form />
    </div>
  );
}

export default App;
