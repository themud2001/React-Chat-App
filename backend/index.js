const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const dotenv = require("dotenv");
const mongoSanitize = require("express-mongo-sanitize");

const app = express();
const databaseConnect = require("./config/db");

const authRoutes = require("./routes/auth");
const errorHandler = require("./middleware/errorHandler");

dotenv.config({ path: "./.env" });
databaseConnect();

app.use(express.json());
app.use(helmet());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
app.use(xss());
app.use(cookieParser());
app.use(compression());
app.disable("x-powered-by");
app.use(mongoSanitize({
    onSanitize: (req, key) => {
        console.warn(`The request ${key} was sanitized`, req);
    }
}));

app.use("/auth", authRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3090;

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});