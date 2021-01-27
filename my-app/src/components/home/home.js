import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom'

import authService from '../../services/auth.service';

import Header from '../header/Header'
import Balance from '../BalanceCard/BalanceCard'
import Options from '../optionsCard/optionsCards'
import Activity from '../ActivityTable/Activity'

function HomePage() {
  const [content, setContent] = useState("");
  const history = useHistory();
  useEffect(() => {
    authService.getAccountContent()
      .then((res) => {
        setContent(res.data.data.account);
      }, (error) => {
        localStorage.removeItem("user");
        history.push('/login')
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
 
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Balance content={content.balance} />
        <Options />
        <Activity content={content.Operations}/>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
