const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
    email: {
        type: String,
        validate: {
            validator: value => /[A-Za-z0-9!#$%&'*+\-/=\^_`{|]+@[A-Za-z0-9]+\.[A-Za-z]+/.test(value),
            message: props => `${props.value} is not a valid E-mail`
        },
        lowercase: true,
        required: [true, "Specify an E-mail"]
    },
    password: {
        type: String,
        minLength: [8, "Must be 8 characters or more"],
        maxLength: [50, "Must be less than 50 characters"],
        required: [true, "Specify a password"]
    }
});

userSchema.pre("save", async function() {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.getToken = function() {
    return jwt.sign({ sub: this.id }, process.env.JWT_SECRET, {
        expiresIn: 7 * 24 * 60 * 60
    });
};

module.exports = model("user", userSchema);