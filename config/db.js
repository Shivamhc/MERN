const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

const connectDB = () => {
  mongoose
    .connect(db, { useUnifiedTopology: true })
    .then(() => console.log("Mongo DB connected"))
    .catch(err => console.log(err));
};
module.exports = connectDB;
