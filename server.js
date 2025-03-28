require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const helmet = require('helmet');
const { authenticate } = require("./src/middleware/authentication");

const app = express();
app.use(express.json());
app.use(helmet());

app.use(authenticate);

// Middleware to parse x-www-form-urlencoded (form data)
app.use(express.urlencoded({ extended: true }));

require('./src/routes')(app);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("DB Connection Error: ", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
