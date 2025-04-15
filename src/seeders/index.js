const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const seedSiteSettings = require("./siteSettingsSeeder");
const seedFaqs = require("./faqSeeder");
const settings = require("./settings");
const user = require("./usersSeeder");

const seedAll = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Connected to MongoDB");

        await seedSiteSettings(); 
        await seedFaqs(); 
        await settings(); 
        await user();

        console.log("All seeders executed successfully");
        mongoose.connection.close();
    } catch (error) {
        console.error("Seeding failed:", error);
        mongoose.connection.close();
    }
};

seedAll();
