const mongoose = require("mongoose");
const Category = require("../models/categoryModel");

const seedCategories = async () => {
    try {
        await Category.deleteMany();

        const categories = [
            {
                name: "Residential",
                slug: "residential",
                description: "All types of residential properties",
                image: "uploads/categories/residential.jpg",
                isFeatured: true,
                featuredProperties: [
                    new mongoose.Types.ObjectId("67ff51593694b8b34e1548d2"),
                    new mongoose.Types.ObjectId("67ff51593694b8b34e1548d3")
                ],
                status: "active"
            },
            {
                name: "Commercial",
                slug: "commercial",
                description: "Shops, Offices, and other commercial spaces",
                image: "uploads/categories/commercial.jpg",
                isFeatured: false,
                featuredProperties: [
                    new mongoose.Types.ObjectId("67ff51593694b8b34e1548d4")
                ],
                status: "active"
            }
        ];

        await Category.insertMany(categories);
        console.log("Category data seeded successfully");
    } catch (error) {
        console.error("Seeding Categories failed:", error);
    }
};

module.exports = seedCategories;
