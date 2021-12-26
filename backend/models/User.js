const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        validate: {
            validator: value => /[A-Za-z0-9!#$%&'*+\-/=\^_`{|]+@[A-Za-z0-9]+\.[A-Za-z]+/.test(value),
            message: props => `${props.value} is not a valid E-mail`
        },
        required: [true, "Specify an E-mail"]
    },
    password: {
        type: String,
        minLength: [8, "Must be 8 characters or more"],
        maxLength: [50, "Must be less than 50 characters"],
        required: [true, "Specify a password"]
    }
});

module.exports = model("user", userSchema);