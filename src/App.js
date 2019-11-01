import React from 'react';
// import axios from 'axios'
import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'
// import Product from './Components/Product/Product'
import Form from './Components/Form/Form'
import './App.css';

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
