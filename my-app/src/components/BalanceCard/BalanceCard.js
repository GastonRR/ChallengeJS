import React, { useState, useEffect }from 'react';
import { Card } from 'react-bootstrap';
import {useHistory } from 'react-router-dom'
import userServices from '../../services/user.services';

import './card.css'





function Balance(props) {

    const [content, setContent] = useState("");
    let history = useHistory();
    
    useEffect(()=>{
        
        userServices.getAccountContent()
        .then((res)=>{
            setContent(res.data.data.account);
        },(error)=>{
            localStorage.removeItem("user");
            
            history.push("/login")
            

        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const ToThousand = (n) => {
       return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");
    };


    return (
        <Card bg="dark" className="text-center text-warning balance-container rounded ">
            <Card.Body>
                <Card.Title className="h3">
                    Total Balance:
                </Card.Title>
                <Card.Text className="border text-card-balance mx-auto d-flex align-items-center justify-content-between h4">
                        <strong className="mx-auto ">$ {
                          ToThousand(Number(content.balance))
                        }</strong>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Balance;
