const mongoose = require("mongoose");

const SiteSettingsSchema = new mongoose.Schema(
    {
        generalSettings: {
            site_name: { type: String, required: true },
            site_logo: { type: String, required: true },
            favicon: { type: String, required: true },
            default_currency: { type: String, required: true },
            currency_icon: { type: String, required: true },
            timezone: { type: String, required: true }
        },
        contactInfo: {
            company_name: { type: String, required: true },
            contact_email: { type: String, required: true },
            contact_phone: { type: String, required: true },
            address: { type: String, required: true }
        },
        emailConfig: {
            email: { type: String, required: true },
            mail_host: { type: String, required: true },
            smtp_username: { type: String, required: true },
            smtp_password: { type: String, required: true },
            mail_port: { type: Number, required: true },
            mail_encryption: { type: String, required: true }
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("SiteSettings", SiteSettingsSchema);
