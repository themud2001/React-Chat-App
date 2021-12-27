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

        const accessToken = user.getAccessToken();
        const refreshToken = user.getRefreshToken();
        const cookieOptions = {
            httpOnly: true,
            expires: new Date(
                Date.now() + process.env.JWT_REFRESH_TOKEN_EXPIRY * 24 * 60 * 60 * 1000
            )
        };

        return res.status(200)
            .cookie("__refresh_token", refreshToken, cookieOptions)
            .json({ token: accessToken });
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
        const accessToken = user.getAccessToken();
        const refreshToken = user.getRefreshToken();
        const cookieOptions = {
            httpOnly: true,
            expires: new Date(
                Date.now() + process.env.JWT_REFRESH_TOKEN_EXPIRY * 24 * 60 * 60 * 1000
            )
        };
        
        return res.status(201)
            .cookie("__refresh_token", refreshToken, cookieOptions)
            .json({ token: accessToken });
    } catch (err) {
        return next(err);
    }
};