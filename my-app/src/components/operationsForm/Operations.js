import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Deposit from './depositForm'
// import Whitdraw from './withdrawForm'
import Header from '../header/Header'




function Operations() {
    return (
        <React.Fragment>
            <Header/>
            <Switch>
                <Route path='/operation/deposit'component={Deposit}/>   
            </Switch>
        </React.Fragment>
    );
}

export default Operations;
