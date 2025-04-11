const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, enum: ["super-admin", "admin"], default: "super-admin" },
        status: { type: String, enum: ["active", "inactive"], default: "active" },
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true }
);

const Setting = mongoose.model("settings", settingSchema);

module.exports = Setting;