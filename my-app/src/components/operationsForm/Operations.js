import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Deposit from './depositForm'
import Withdraw from './withdrawForm'
import Header from '../header/Header'




function Operations() {
    return (
        <React.Fragment>
            <Header/>
            <Switch>
                <Route exact path='/operation/deposit'component={Deposit}/>   
                <Route exact path='/operation/withdraw'component={Withdraw}/>   
            </Switch>
        </React.Fragment>
    );
}

export default Operations;
