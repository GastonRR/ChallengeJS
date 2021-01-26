import React from 'react';

import Header from '../header/Header'
import Balance from '../BalanceCard/BalanceCard'

function HomePage() {
  return (
      <React.Fragment>
          <Header/>
          <div className="container">
            <Balance/>
          </div>
      </React.Fragment>
  );
}

export default HomePage;
