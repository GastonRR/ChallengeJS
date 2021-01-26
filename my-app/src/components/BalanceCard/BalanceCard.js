import React from 'react';
import { Card } from 'react-bootstrap';


import './card.css'


function Balance(props) {

    const ToThousand = (n) => {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };


    return (
        <Card bg="dark" className="text-center text-warning balance-container rounded ">
            <Card.Body>
                <Card.Title >
                    <h3>
                        Total Balance:
                    </h3>
                </Card.Title>
                <Card.Text className="border text-card-balance mx-auto d-flex align-items-center justify-content-between h4">
                    <strong className="mx-auto ">$ {
                        ToThousand(Number(props.content))
                    }</strong>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Balance;
