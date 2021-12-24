import React from "react";
import { useForm } from "react-hook-form";

import "./styles.scss";

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onFormSubmit = data => console.log(data);

    return (
        <div className="signup-wrapper">
            <div className="container">
                <h1>Sign Up Form</h1>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <label htmlFor="email">E-mail:</label>
                    <input id="email" />

                    <label htmlFor="password">Password:</label>
                    <input id="password" />

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;