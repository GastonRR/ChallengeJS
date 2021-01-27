import React, { useState, useRef, useEffect } from 'react';
import { Card } from 'react-bootstrap';

import { useHistory } from 'react-router-dom'

import authService from '../../services/auth.service';


import Header from '../header/Header'
import Activity from './AllActivities'

import './Activitypage.css'

function useForceUpdate() {
  let [Update, setUpdate] = useState(true);
  return () => setUpdate(!Update);
}


function ActivityPage() {
  let forceUpdate = useForceUpdate();
  const valueRef = useRef();
  const [Content, setContent] = useState("");
  const history = useHistory();
  useEffect(() => {
    authService.getActivityContent()
      .then((res) => {
        console.log(res.data.data)
        setContent(res.data.data.operations);
        valueRef.current = res.data.data.operations
      }, (error) => {
        localStorage.removeItem("user");
        history.push('/login')
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onChangeType = (e) => {
    const type = e.target.value;
    if (type === "1" && Content) {
      let content = Content.sort((a, b) => {
        return a.idType - b.idType
      })
      setContent(content);
    }
    if (type === "2" && Content) {
      let content = Content.sort((a, b) => {
        return b.idType - a.idType
      })
      setContent(content);

    }


  };


  return (
    <React.Fragment>
      <Header />
      <Card bg="dark" className="text-warning filter-container p-0 rounded ">
        <Card.Body>
          <div className="container">
            <h5>Filter</h5>
            <select
              className="form-control"
              name="type"
              onChange={onChangeType}
              defaultValue={0}
            >
              <option value={0} className='option-value' disabled>Choose...</option>
              <option value={1} >Deposit</option>
              <option value={2}>WithDraw</option>
            </select> <br/>
            <div className="form-group">
              <button className="btn btn-warning btn-block" onClick={forceUpdate}><span>Accept</span></button>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Activity content={Content} />


    </React.Fragment>
  );
}

export default ActivityPage;
