import React from 'react';
import { Switch, Route} from 'react-router-dom';


import Register from './Register'
import Balance from './balance'




function RegisterPage() {
  return (
       <Switch>
        <Route exact path='/register' component={Register}/> 
        <Route path='/register/balance' component={Balance} /> 
       </Switch>
  );
}

export default RegisterPage;
