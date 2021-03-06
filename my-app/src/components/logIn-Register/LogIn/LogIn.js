import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";


import authService from "../../../services/auth.service";

import './LogIn.css'



const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const LogIn = (props) => {
    const form = useRef();
    const checkbtn = useRef();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {

        e.preventDefault();

        setMessage("");
        setLoading(true);
        form.current.validateAll();

        if (checkbtn.current.context._errors.length === 0) {
            authService.logIn(email, password).then((data) => {

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
                <h2 className="text-center mb-5 alert">Log In</h2>
                    <img
                        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                        alt="profile-img"
                        className="profile-img-card"
                    />

                    <Form onSubmit={handleLogin} ref={form}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="email"
                                value={email}
                                onChange={onChangeEmail}
                                validations={[required]}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Input
                                type="password"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={onChangePassword}
                                validations={[required]}
                            />
                        </div>

                        <div className="form-group">
                            <button className="btn btn-warning btn-block" disabled={loading}>
                                {loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Login</span>
                            </button>
                        </div>

                        {message && (
                            <div className="form-group">
                                <div className="alert alert-danger text-center" role="alert">
                                    {message}
                                </div>
                            </div>
                        )}

                        <div className="form-group text-center">
                            <div className="alert" role="alert">
                                Don't have an account? <br/>
                                <a href="/register">Create a new account</a>
                            </div>
                        </div>
                        <CheckButton style={{ display: "none" }} ref={checkbtn} />

                    </Form>
                </div>
            </div>
        </React.Fragment>
    );

}

export default LogIn;