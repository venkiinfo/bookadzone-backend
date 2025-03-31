const mongoose = require("mongoose");
const SiteSettings = require("../models/siteSettingsModel");

const seedSiteSettings = async () => {
    try {
        await SiteSettings.deleteMany(); 

        const siteSettings = new SiteSettings({
            generalSettings: {
                site_name: "bookadzone",
                site_logo: "/images/default-logo.png",
                favicon: "/images/default-favicon.png",
                default_currency: "India",
                currency_icon: "₹",
                timezone: "UTC"
            },
            contactInfo: {
                company_name: "bookadzone",
                contact_email: "contact@bookadzone.com",
                contact_phone: "+123456789",
                address: "123 Main St, City"
            },
            emailConfig: {
                email: "admin@bookadzone.com",
                mail_host: "smtp.mailtrap.io",
                smtp_username: "user",
                smtp_password: "password",
                mail_port: 587,
                mail_encryption: "tls"
            }
        });

        await siteSettings.save();
        console.log("Site settings seeded successfully");
    } catch (error) {
        console.error("Seeding site settings failed:", error);
    }
};

module.exports = seedSiteSettings;
