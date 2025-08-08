const mongoose = require("mongoose");
const Newsletter = require("../models/newsletterModel");

const seedNewsletters = async () => {
    try {
        await Newsletter.deleteMany(); // Clear existing newsletters

        const newsletters = [
            {
                name: "Weekly Tech Update",
                slug: "weekly-tech-update",
                subject: "Latest in Tech This Week",
                description: "<p>Stay updated with the most recent developments in technology!</p>",
                path: "/newsletters/weekly-tech-update",
                status: "active",
                isDeleted: false
            },
            {
                name: "Developer Digest",
                slug: "developer-digest",
                subject: "Top Dev Resources",
                description: "<p>A curated list of the best developer tools and resources.</p>",
                path: "/newsletters/developer-digest",
                status: "active",
                isDeleted: false
            },
            {
                name: "Startup Spotlight",
                slug: "startup-spotlight",
                subject: "Emerging Startups You Should Know",
                description: "<p>Discover the latest startups making waves in the industry.</p>",
                path: "/newsletters/startup-spotlight",
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

module.exports = seedNewsletters;
