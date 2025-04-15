const mongoose = require("mongoose");
const Newsletter = require("../models/newsletterModel");

const seedNewsletter = async () => {
    try {
        await Newsletter.deleteMany();

        const newsletters = [
            {
                name: "Node.js Weekly",
                slug: "nodejs-weekly",
                subject: "Learn Node.js Basics",
                description: "A weekly newsletter covering Node.js concepts and tutorials.",
                status: "active",
                isDeleted: false
            },
            {
                name: "MongoDB Insights",
                slug: "mongodb-insights",
                subject: "Deep Dive into MongoDB",
                description: "Insights and tips on using MongoDB effectively.",
                status: "active",
                isDeleted: false
            },
            {
                name: "Express Essentials",
                slug: "express-essentials",
                subject: "Understanding Express.js",
                description: "Everything you need to know about building with Express.",
                status: "inactive",
                isDeleted: false
            }
        ];

        await Newsletter.insertMany(newsletters);
        console.log("Newsletter data seeded successfully");
    } catch (error) {
        console.error("Seeding Newsletters failed:", error);
    }
};

module.exports = seedNewsletter;
