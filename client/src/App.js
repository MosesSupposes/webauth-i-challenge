import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import AllUsers from './components/AllUsers'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={AllUsers} />
      <Route exact path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  );
}

export default App;
