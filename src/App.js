import './App.css';

import React from 'react';
import { Route, Routes,redirect } from 'react-router-dom';
import Home from './Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='home/' element={<Home/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='sign-up/' element={<Signup/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
