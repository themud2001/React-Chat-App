import React from "react";
import { useForm } from "react-hook-form";

import "./styles.scss";

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit, watch } = useForm({ mode: "onBlur" });
    const watchPassword = watch("password");
    const onFormSubmit = data => {
        console.log(data);
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
                    <label htmlFor="email">E-mail:</label>
                    <input id="email" type="text" {...register("email", emailValidation)} />
                    {errors.email && <span className="error">{errors.email.message}</span>}

                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" {...register("password", passwordValidation)} />
                    {errors.password && <span className="error">{errors.password.message}</span>}

                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input id="confirm-password" type="password" {...register("confirm-password", confirmValidation)} />
                    {errors["confirm-password"] && <span className="error">{errors["confirm-password"].message}</span>}

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;