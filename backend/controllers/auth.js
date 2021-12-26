const jwt = require("jsonwebtoken");

const User = require("../models/User");

exports.signIn = (req, res, next) => {
    res.send("Sign in");
};

exports.signUp = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        await User.validate({ email, password }, ["email", "password"]);
    } catch (err) {
        return res.status(400).json({ errorMessage: err.errors });
    }

    try {
        let user = await User.findOne({ email });

        if (user) return res.status(400).json({ errorMessage: "User already exists" });

        user = await User.create({ email, password });
        
        return res.status(201).json({ token: user.getToken() });
    } catch (err) {
        return next(err);
    }
};