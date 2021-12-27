const jwt = require("jsonwebtoken");

const User = require("../models/User");

exports.signIn = async (req, res, next) => {
    const { email, password } = req.body;

    if (
        !email ||
        !password ||
        email.trim() === "" ||
        password.trim() === ""
    ) {
        return res.status(400).json({ errorMessage: "Invalid credentials" });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({ errorMessage: "User does not exist" });

        const isMatch = await user.comparePassword(password);

        if (!isMatch) return res.status(400).json({ errorMessage: "Invalid credentials" });

        return res.status(200).json({ token: user.getToken() });
    } catch (err) {
        return next(err);
    }
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