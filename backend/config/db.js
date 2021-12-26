const mongoose = require("mongoose");

const databaseConnect = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL);

        console.log(`Connected to MongoDB: ${connection.connection.host}`);
    } catch (err) {
        console.error(err);
    }
};

module.exports = databaseConnect;