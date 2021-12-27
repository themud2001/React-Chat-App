import React from "react";
import { useForm } from "react-hook-form";

import "./styles.scss";

const SignIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onFormSubmit = data => {
        console.log(data);
    };

    return (
        <div className="signin-wrapper">
            <div className="container">
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <label htmlFor="email">E-mail:</label>
                    <input id="email" type="text" {...register("email", { required: "E-mail is required" })} />
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

export default SignIn;