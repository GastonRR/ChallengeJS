import React, { useState, useRef, useEffect } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select"
import CheckButton from "react-validation/build/button";
import moment from 'moment'

import { isFloat } from "validator";


import authService from "../../services/auth.service";
import userServices from '../../services/public.services'


const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};
const vAmount = (value) => {
    if (!isFloat(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a Number.
            </div>
        );
    }
};

const EditOperation = (props) => {
    
    const DateNow = moment.now()
    const form = useRef();
    const checkbtn = useRef();
    const [content, setContent] = useState("");
    const [Date, setDate] = useState(moment(DateNow).format('YYYY-MM-DD'),);
    const [Concept, setConcept] = useState("");
    const [Amount, setAmount] = useState("");
    const [Category, setCategory] = useState("0");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        userServices.getCategorysContent()
            .then((res) => {
                setContent(res.data.data.categorys);
            }, (error) => {

            })
            console.log(props.match.params)
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    const onChangeDate = (e) => {
        const date = e.target.value
        setDate(date);
    };
    const onChangeConcept = (e) => {
        const concept = e.target.value;
        setConcept(concept);
    };
    const onChangeAmount = (e) => {
        const amount = e.target.value;
        setAmount(amount);
    };
    const onChangeCategory = (e) => {
        const category = e.target.value;
        setCategory(category);
    };
    const handleBalance = (e) => {

        e.preventDefault();

        setMessage("");
        setLoading(true);
        form.current.validateAll();


        if (checkbtn.current.context._errors.length === 0) {
            authService.EditOperation(Date, Concept, Amount, Category, props.match.params.id)
            .then((data) => {
                props.history.push("/");
                window.location.reload();

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
                        src="https://cdn2.iconfinder.com/data/icons/flat-money/114/money-edit-512.png"
                        alt="profile-img"
                        className="profile-img-card"
                    />

                    <Form onSubmit={handleBalance} ref={form}>
                        <div className="form-group text-center">
                            <div className="alert" role="alert">
                               <h4>Money deposited</h4>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="concept">Concept</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="concept"
                                onChange={onChangeConcept}
                                value={Concept}
                                validations={[required]}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="amount">Amount</label>
                            <Input
                                type="number"
                                className="form-control"
                                name="amount"
                                value={Amount}
                                onChange={onChangeAmount}
                                validations={[required, vAmount]}
                            />
                        </div>
                        {content ? (<div className="form-group">
                            
                            <label htmlFor="category">Categorys</label>
                            <Select
                                className="form-control"
                                name="category"
                                value={Category}
                                onChange={onChangeCategory}
                                validations={[required]}
                            >
                            <option  value ={0} className='option-value'  disabled>Choose...</option>
                                {
                                    content.map((category, id) => {
                                        return <option key={id} value={category.id}>{category.name}</option>
                                    })
                                }
                            </Select>
                        </div>) : <div></div>

                        }
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <Input
                                type="date"
                                className="form-control"
                                name="date"
                                value={Date}
                                onChange={onChangeDate}
                                validations={[required]}
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

export default EditOperation;