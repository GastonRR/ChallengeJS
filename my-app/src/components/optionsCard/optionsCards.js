import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'


import './optionsCards.css'


function Options(props) {

    return (
        <Card bg="dark" className="text-center text-warning Options-container">
            <Card.Body className="d-flex justify-content-between p-0">
                <div className="text-options-cards">
                    <Link className="text-warning" to='/operation/deposit'>
                        <img
                            src="https://static.thenounproject.com/png/878634-200.png"
                            alt="Option-img"
                            className="Options-img-card mx-auto mt-1"

                        />
                        <p className='mt-2'>Deposit</p>
                    </Link>
                </div>
                <div className="text-options-cards">
                    <Link className="text-warning" to='/balance/update'>
                        <img
                            src="https://cdn4.iconfinder.com/data/icons/symbol-duo-business-1/32/dollar-edit-512.png"
                            alt="Option-img"
                            className="Options-img-card mx-auto mt-1"
                        />
                        <p className='mt-2'>Balance</p>
                    </Link>
                </div>
                <div className="text-options-cards">
                    <Link className="text-warning" to='/operation/withdraw'>
                        <img
                            src="https://static.thenounproject.com/png/878637-200.png"
                            alt="Option-img"
                            className="Options-img-card mx-auto mt-1 "
                        />
                        <p className='mt-2'>Withdrawn</p>
                    </Link>

                </div>
            </Card.Body>
        </Card>
    );
}

export default Options;
