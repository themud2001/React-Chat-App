import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";

import { signUp } from "../../redux/actions";

import "./styles.scss";

const SignUp = ({ signUp, token, errorMessage }) => {
    const { register, formState: { errors }, handleSubmit, watch } = useForm({ mode: "onBlur" });
    const navigate = useNavigate();
    const watchPassword = watch("password");
    const onFormSubmit = data => {
        signUp(data, () => navigate("/"));
    };

    if (token) {
        return <Navigate to="/" />;
    }

    const usernameValidation = {
        required: "Username is required"
    };

    const emailValidation = {
        required: "E-mail is required",
        pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Invalid E-mail"
        }
    };

    const passwordValidation = {
        required: "Password is required",
        minLength: {
            value: 8,
            message: "Must be 8 characters or more"
        },
        maxLength: {
            value: 50,
            message: "Must be less than 50 characters"
        }
    };

    const confirmValidation = {
        validate: value => value === watchPassword || "Passwords do not match"
    };

    return (
        <div className="signup-wrapper">
            <div className="container">
                <h1>Create an Account</h1>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    {(errorMessage && (!errorMessage.email && !errorMessage.password && !errorMessage.username)) && <span className="error">{errorMessage}</span>}

                    <label htmlFor="username">Username:</label>
                    <input id="username" type="text" {...register("username", usernameValidation)} />
                    {errors.username && <span className="error">{errors.username.message}</span>}
                    {errorMessage.username && <span className="error">{errorMessage.username.message}</span>}

                    <label htmlFor="email">E-mail:</label>
                    <input id="email" type="text" {...register("email", emailValidation)} />
                    {errors.email && <span className="error">{errors.email.message}</span>}
                    {errorMessage.email && <span className="error">{errorMessage.email.message}</span>}

                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" {...register("password", passwordValidation)} />
                    {errors.password && <span className="error">{errors.password.message}</span>}
                    {errorMessage.password && <span className="error">{errorMessage.password.message}</span>}

                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input id="confirm-password" type="password" {...register("confirm-password", confirmValidation)} />
                    {errors["confirm-password"] && <span className="error">{errors["confirm-password"].message}</span>}

                    <button type="submit">Sign Up</button>
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

export default connect(mapStateToProps, { signUp })(SignUp);