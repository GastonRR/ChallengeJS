import React from 'react';
import Moment from 'react-moment';
import { Table } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimesCircle, faEye } from '@fortawesome/free-solid-svg-icons';

import authServices from '../../services/auth.service'


import './activity.css'


function Activity(props) {
    const Delete = (id) =>{
        authServices.DeleteOperation(id).then((data)=>{
            window.location.reload();
        })
    }


    return (
        <div className='activity-container mx-auto'>
            <h3 className='text-dark'> Activities </h3>
            <Table striped borderless variant='dark' className='text-warning table-Activity'>
                <thead>
                    <tr>
                        <th className='text-center'>Date</th>
                        <th className='text-center'>Description</th>
                        <th className='text-center'>Balance</th>
                        <th className='text-center'>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {props.content ? (props.content.map((operation, id) => {
                            return ( 
                            <tr key={id}>
                                <td className='text-center'>
                                    <Moment format="DD/MM/YY">
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
                                <td className='text-center'>
                                    <div className="d-flex justify-content-around">
                                        <a className="text-warning" href={`/operation/detail/${operation.id}`}><FontAwesomeIcon icon={faEye}/></a>
                                        <a className="text-warning" href={`/operation/edit/${operation.id}`}><FontAwesomeIcon icon={faEdit}/></a>
                                        <a className="text-warning" onClick={()=>Delete(operation.id)}><FontAwesomeIcon icon={faTimesCircle}/></a>
                                    </div>
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