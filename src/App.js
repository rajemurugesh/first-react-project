//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import {Routes,Route} from 'react-router-dom';
import { Container } from '@material-ui/core';

function App() {
  return(
    <>
    <Container maxWidth="md">
    <div className="app">
      <Routes>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/login" exact component={Login}/>
      </Routes>
    </div>
    </Container>
    </>
  );
}
  
export default App;
