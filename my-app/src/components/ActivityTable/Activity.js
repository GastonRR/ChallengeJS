import React from 'react';

import Moment from 'react-moment';

import { Table } from 'react-bootstrap';


import './activity.css'


function Activity(props) {
    
    return (
        <div className='activity-container mx-auto'>
            <h3 className='text-dark'> Recent Activity</h3>
            <Table striped borderless variant='dark' className='text-warning table-Activity'>
                <thead>
                    <tr>
                        <th className='text-center'>Date</th>
                        <th className='text-center'>Description</th>
                        <th className='text-center'>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {props.content ? (props.content.map((operation, id) => {
                            return (
                            <tr key={id}>
                                <td className='text-center'>
                                    <Moment format="DD/MM">
                                        {operation.date}
                                    </Moment>           
                                </td>
                                <td className='text-center'>
                                    {operation.concept}
                                </td>
                                <td className='text-center'>
                                    {
                                        operation.idType === 1 ? `+ $ ${operation.amount}` : `- $ ${operation.amount}`
                                    }
                                </td>
                            </tr>)
                        })):<tr></tr>
                   }
                </tbody>

            </Table>
        </div>

    );
}

export default Activity;