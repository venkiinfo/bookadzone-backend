const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        description: { type: String },
        image: { type: String }, // Image path or URL

        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },

        isFeatured: { type: Boolean, default: false },

        status: { type: String, enum: ["active", "inactive"], default: "active" },
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true }
);

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
