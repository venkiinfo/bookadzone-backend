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
        },
        seoConfig: {
            meta_title: { type: String, required: true, maxlength: 60 },
            meta_description: { type: String, required: true, maxlength: 160 },
            meta_keywords: { type: String },
            canonical_url: { type: String, required: true },
            robots_meta: { type: String, default: 'index, follow' },
            schema_markup: { type: String },
            h1_tag: { type: String },
            breadcrumbs: { type: String },
            alt_text: { type: String },
            sitemap_url: { type: String },
            google_analytics_code: { type: String },
            google_search_console_code: { type: String }
        },
        ogConfig: {
            og_title: { type: String },
            og_description: { type: String },
            og_image: { type: String },
            og_url: { type: String },
            og_type: { type: String, enum: ['website', 'article', 'product'], default: 'website' }
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("SiteSettings", SiteSettingsSchema);
