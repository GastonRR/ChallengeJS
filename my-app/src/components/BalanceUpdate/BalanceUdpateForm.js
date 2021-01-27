import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useHistory } from 'react-router-dom'

import { isFloat } from "validator";


import authService from "../../services/auth.service";


const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const validBalance = (value) => {
    if (!isFloat(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a Number.
        </div>
      );
    }
  };

const BalanceUpdate = (props) => {
    const history = useHistory();
    const form = useRef();
    const checkbtn = useRef();
    const [Balance, setBalance] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeBalance = (e) => {
        const balance = e.target.value;
        setBalance(balance);
    };
    const handleBalance = (e) => {

        e.preventDefault();

        setMessage("");
        setLoading(true);
        form.current.validateAll();

        if (checkbtn.current.context._errors.length === 0) {
            authService.BalanceUpdate(Balance).then((data) => {
                history.push("/");
            }, (error) => {
                const resMessage = error.response.data.msg
                setLoading(false);
                setMessage(resMessage);
            });
        } else {
            setLoading(false);
        }
    }

    return (
        <React.Fragment>

            <div className="col-md-12 ">
                
                <div className="card card-container bg-form">
                    
                    <img
                        src="https://cdn4.iconfinder.com/data/icons/symbol-duo-business-1/32/dollar-edit-512.png"
                        alt="profile-img"
                        className="profile-img-card"
                    />

                    <Form onSubmit={handleBalance} ref={form}>
                        <div className="form-group text-center">
                            <div className="alert" role="alert">
                                <h4>Update Balance</h4>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="balance">Balance</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="balance"
                                value={Balance}
                                onChange={onChangeBalance}
                                validations={[required, validBalance]}
                            />
                        </div>

                        <div className="form-group">
                            <button className="btn btn-warning btn-block" disabled={loading}>
                                {loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Accept</span>
                            </button>
                        </div>

                        {message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                        <CheckButton style={{ display: "none" }} ref={checkbtn} />

                    </Form>
                </div>
            </div>
        </React.Fragment>
    );

}

export default BalanceUpdate;