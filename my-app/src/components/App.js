import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from './utilities/protected.routes'

import Home from './home/home'
import LogIn from './logIn-Register/LogIn/LogIn'
import Register from './logIn-Register/register/RegisterPage'
import Operations from './operationsForm/Operations'
import UpdateBalance from './BalanceUpdate/BalanceUpdate'
import ActivityPage from './ActivityTable/ActivityPage'
import NotFound from './Error/404'

import "./App.css";


function App() {
  return (
    <div className="App">
       <Switch>
        <ProtectedRoute exact path='/' component={Home} Auth={true} Redirect='/login' /> 
        <ProtectedRoute path='/register' component={Register} Auth={false}  Redirect='/' /> 
        <ProtectedRoute path='/login' component={LogIn} Auth={false}  Redirect='/'/> 
        <ProtectedRoute path='/operation' component={Operations} Auth={true}  Redirect='/'/> 
        <ProtectedRoute path='/balance/update' component={UpdateBalance} Auth={true}  Redirect='/'/> 
        <ProtectedRoute path='/activity' component={ActivityPage} Auth={true}  Redirect='/'/> 
        <Route path='*' component={NotFound}></Route>
       </Switch>
  
    </div>
  );
}

export default App;
