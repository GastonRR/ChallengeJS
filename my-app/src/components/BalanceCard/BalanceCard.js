import React, { useState, useEffect }from 'react';
import { Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom'
import userServices from '../../services/user.services';

import './card.css'

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';




function HomePage(props) {

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
        <Card bg="dark" className="text-center text-warning balance-container rounded">
            <Card.Body>
                <Card.Title className="h3">
                    Total Balance:
                </Card.Title>
                <Card.Text className="border text-card-balance mx-auto d-flex align-items-center justify-content-between">
                
                        <strong className="mx-auto">$ {
                          ToThousand(Number(content.balance))
                        }</strong>
                    <Link to='/edit/balance' className='text-warning'>
                        <FontAwesomeIcon icon={faEdit} />
                    </Link>

                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default HomePage;
