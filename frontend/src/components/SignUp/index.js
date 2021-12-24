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
        required: true,
        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    };

    const passwordValidation = {
        required: true,
        minLength: 8,
        maxLength: 50
    };

    const confirmValidation = {
        required: true,
        validate: value => value === watchPassword
    };

    return (
        <div className="signup-wrapper">
            <div className="container">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <label htmlFor="email">E-mail:</label>
                    <input id="email" type="text" {...register("email", emailValidation)} />
                    {errors.email && <span className="error">Invalid E-mail</span>}

                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" {...register("password", passwordValidation)} />
                    {errors.password && <span className="error">Invalid Password</span>}

                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input id="confirm-password" type="password" {...register("confirm-password", confirmValidation)} />
                    {errors["confirm-password"] && <span className="error">Passwords do not match</span>}

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;