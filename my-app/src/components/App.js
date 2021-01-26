import React from 'react';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from './utilities/protected.routes'

import Home from './home/home'
import LogIn from './logIn-Register/LogIn/LogIn'
import Register from './logIn-Register/register/RegisterPage'


import "./App.css";


function App() {
  return (
    <div className="App">
       <Switch>
        <ProtectedRoute exact path='/' component={Home} Auth={true} Redirect='/login' /> 
        <ProtectedRoute path='/register' component={Register} Auth={false}  Redirect='/' /> 
        <ProtectedRoute path='/login' component={LogIn} Auth={false}  Redirect='/'/> 
       </Switch>
  
    </div>
  );
}

export default App;
