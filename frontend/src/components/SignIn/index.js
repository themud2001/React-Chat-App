import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";

import { signIn } from "../../redux/actions";

import "./styles.scss";

const SignIn = ({ signIn, token, errorMessage }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onFormSubmit = data => {
        signIn(data, () => navigate("/"));
    };

    if (token) {
        return <Navigate to="/" />;
    }
    
    const emailValidation = {
        required: "E-mail is required",
        pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Invalid E-mail"
        }
    };

    return (
        <div className="signin-wrapper">
            <div className="container">
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    {errorMessage && <span className="error">{errorMessage}</span>}

                    <label htmlFor="email">E-mail:</label>
                    <input id="email" type="text" {...register("email", emailValidation)} />
                    {errors.email && <span className="error">{errors.email.message}</span>}

                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" {...register("password", { required: "Password is required" })} />
                    {errors.password && <span className="error">{errors.password.message}</span>}

                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        errorMessage: state.auth.errorMessage
    };
};

export default connect(mapStateToProps, { signIn })(SignIn);