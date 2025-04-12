const mongoose = require("mongoose");
const admin = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        number:{type: Number, required: true},
        password:{type: String, required: true},
    },
    { timestamps: true }
);

module.exports = mongoose.model("Admin", admin);
