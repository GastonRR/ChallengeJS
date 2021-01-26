import React from 'react';

import Header from '../header/Header'
import Balance from '../BalanceCard/BalanceCard'
import Options from '../optionsCard/optionsCards'

function HomePage() {
  return (
      <React.Fragment>
          <Header/>
          <div className="container">
            <Balance/>
            <Options/>
          </div>
      </React.Fragment>
  );
}

export default HomePage;
