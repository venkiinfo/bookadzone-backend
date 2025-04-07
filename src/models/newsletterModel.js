const mongoose = require("mongoose");

const newsletterSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        slug: { type: String, required: true },
        subject: { type: String, required: true },
        description: { type: String, required: true },
        status: { type: String, enum: ["active", "inactive"], default: "active" },
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true }
);

module.exports = mongoose.model("newsletter", newsletterSchema);
