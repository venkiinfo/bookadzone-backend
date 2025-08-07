const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const seedSiteSettings = require("./siteSettingsSeeder");
const seedFaqs = require("./faqSeeder");
const seedSettings = require("./settings");
const seedProperty = require("./propertySeeder");
const seedCategory = require("./categorySeeder");

const seedAll = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Connected to MongoDB");

        await seedSiteSettings(); 
        await seedFaqs(); 
        await seedSettings(); 
        await seedProperty(); 
        await seedProperty(); 
        await seedCategory(); 

        console.log("All seeders executed successfully");
        mongoose.connection.close();
    } catch (error) {
        console.error("Seeding failed:", error);
        mongoose.connection.close();
    }
};

seedAll();
