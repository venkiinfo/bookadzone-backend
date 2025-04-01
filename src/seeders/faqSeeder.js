const mongoose = require("mongoose");
const Faq = require("../models/faqModel"); 
const seedFaqs = async () => {
    try {
        await Faq.deleteMany(); 

        const faqs = [
            {
                question: "What is Node.js?",
                answer: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
                status: "active",
                isDeleted: false
            },
            {
                question: "What is MongoDB?",
                answer: "MongoDB is a NoSQL database designed for scalability and flexibility.",
                status: "active",
                isDeleted: false
            },
            {
                question: "What is Express.js?",
                answer: "Express.js is a minimal and flexible Node.js web application framework.",
                status: "inactive",
                isDeleted: false
            }
        ];

        await Faq.insertMany(faqs);
        console.log("FAQ data seeded successfully");
    } catch (error) {
        console.error("Seeding FAQs failed:", error);
    }
};

module.exports = seedFaqs;
