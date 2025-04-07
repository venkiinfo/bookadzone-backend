const Setting = require("../models/settingModel");

const settings = async () => {
    try {
        await Setting.deleteMany();

        const setting = new Setting({
            email: "bookadzone@gmail.com",
            password: "$2a$12$LtrJOAwwByF9.KdszXRxMO/9NHy77zLVqCj14BBnSp7cFaUHCKDxa",
            role: "admin",
            status: "active",
            isDeleted: true
        });

        await setting.save();
        console.log("Settings seeded successfully");
    } catch (error) {
        console.error("Seeding site settings failed:", error);
    }
};

module.exports = settings;
