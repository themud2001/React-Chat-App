const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");

const app = express();
const PORT = process.env.PORT || 3090;
const authRoutes = require("./routes/auth");

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());
app.disable("x-powered-by");

app.use("/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});