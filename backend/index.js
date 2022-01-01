const express = require("express");
const WebSocket = require("ws");
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

const server = app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});

const wsServer = new WebSocket.Server({
    noServer: true
});

wsServer.on("connection", connection => {
    console.log("Client connected");
    
    connection.on("message", message => {
        wsServer.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });

    connection.on("close", () => {
        console.log("Client disconnected");
    });
});

server.on("upgrade", (request, socket, head) => {
    wsServer.handleUpgrade(request, socket, head, ws => {
        wsServer.emit("connection", ws, request);
    });
});