import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import './card.css'

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
    return (
        <Card bg="dark" className="text-center text-warning balance-container rounded">
            <Card.Body>
                <Card.Title className="h3">
                    Total Balance:
                </Card.Title>
                <Card.Text className="border text-card-balance mx-auto d-flex align-items-center justify-content-between">
                
                        <strong className="mx-auto">$50.342</strong>
                    <Link to='/edit/balance' className='text-warning'>
                        <FontAwesomeIcon icon={faEdit} />
                    </Link>

                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default HomePage;
