import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom'

import authService from '../../services/auth.service';


import Header from '../header/Header'
import Table from './Activity'





function ActivityPage() {
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
            <Header/>
            <Table content={content.Operations}/>
        </React.Fragment>
    );
}

export default ActivityPage;
