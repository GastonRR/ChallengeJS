import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from './utilities/protected.routes'

import Header from './header/Header'
import LogIn from './logIn-Register/LogIn/LogIn'
import Register from './logIn-Register/register/Register'

import "./App.css";


function App() {
  return (
    <div className="App">
       <Switch>
        <ProtectedRoute exact path='/' component={Header} /> 
        <Route path='/register' component={Register}  />
        <Route path='/login' component={LogIn} />
       </Switch>
  
    </div>
  );
}

export default App;
