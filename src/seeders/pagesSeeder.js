const mongoose = require("mongoose");
const Page = require("../models/pagesModel"); // Replace with actual model path

const seedPages = async () => {
    try {
        await Page.deleteMany(); // Clear existing records

        const pages = [
            {
                title: "Home",
                name: "Homepage",
                slug: "home-page",
                type: "link",
                url: "https://example.com/home",
                description: null,
                status: "active",
                isDeleted: false
            },
            {
                title: "About",
                name: "About Us",
                slug: "about-us",
                type: "template",
                url: null,
                description: "<p>This is the About Us page content using Summernote/CKEditor.</p>",
                status: "active",
                isDeleted: false
            },
            {
                title: "Contact",
                name: "Contact Us",
                slug: "contact-us",
                type: "link",
                url: "https://example.com/contact",
                description: null,
                status: "inactive",
                isDeleted: false
            }
        ];

        await Page.insertMany(pages);
        console.log("Pages seeded successfully");
    } catch (error) {
        console.error("Seeding pages failed:", error);
    }
};

module.exports = seedPages;
