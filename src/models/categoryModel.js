const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        description: { type: String },
        image: { type: String }, 
        isFeatured: { type: Boolean, default: false },

        featuredProperties: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Property",
            }
        ],

        status: { type: String, enum: ["active", "inactive"], default: "active" },
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
