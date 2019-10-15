import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import AllUsers from './components/AllUsers'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/users" component={AllUsers} />
      <Route path="/register" component={Register} />
    </div>
  );
}

export default App;
