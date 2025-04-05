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
            },
            seoConfig: {
                meta_title: "Welcome to BookAdZone - Your Ad Booking Partner",
                meta_description: "BookAdZone is your one-stop platform to book advertisements across various media including print, digital, and outdoor. Easy, quick, and reliable.",
                meta_keywords: "ad booking, newspaper ads, digital ads, outdoor ads, BookAdZone",
                canonical_url: "https://www.bookadzone.com",
                robots_meta: "index, follow",
                schema_markup: "{ \"@context\": \"https://schema.org\", \"@type\": \"Organization\", \"name\": \"BookAdZone\" }",
                h1_tag: "Book Ads Online Easily with BookAdZone",
                breadcrumbs: "Home > Services > Book Ads",
                alt_text: "BookAdZone Logo",
                sitemap_url: "https://www.bookadzone.com/sitemap.xml",
                google_analytics_code: "UA-12345678-1",
                google_search_console_code: "XYZ1234567890"
            },
            ogConfig: {
                og_title: "Book Ads Online | BookAdZone",
                og_description: "Book your advertisements online across multiple platforms with BookAdZone.",
                og_image: "https://www.bookadzone.com/images/og-image.png",
                og_url: "https://www.bookadzone.com",
                og_type: "website"
            }
        });

        await siteSettings.save();
        console.log("Site settings seeded successfully");
    } catch (error) {
        console.error("Seeding site settings failed:", error);
    }
};

module.exports = seedSiteSettings;
