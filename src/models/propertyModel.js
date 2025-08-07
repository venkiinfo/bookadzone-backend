const mongoose = require("mongoose");

const specificationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    feature: { type: String, required: true },
}, { _id: false });

const adBannerSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    banner_code: { type: String, required: true, unique: true },
    qr_code_url: { type: String },

    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },

    location_type: {
        type: String,
        enum: ["Urban", "Highway", "Commercial", "Others"],
        required: true,
    },
    location_name: { type: String, required: true },
    landmark: { type: String },

    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: Number, required: true },

    pin_on_map: {
        lat: { type: Number },
        lng: { type: Number }
    },

    images: [{ type: String }],
    preview_image: { type: String },

    size: {
        height: { type: Number, required: true },
        width: { type: Number, required: true },
    },

    orientation: {
        type: String,
        enum: ["Portrait", "Landscape"],
        required: true
    },

    pricing_type: {
        type: String,
        enum: ["Per day", "Per Week", "Per Month"],
        required: true
    },

    days: { type: Number, required: true },

    price_min: { type: Number, required: true },
    price_max: { type: Number, required: true },

    description: { type: String },

    specifications: [specificationSchema],

    estimated_monthly_impressions: { type: String },
    daily_visibility_duration: { type: String },
    vehicle_traffic_data: { type: String },
    audience_dwell_time: { type: String },

    nearby_institutions: {
        schools: [String],
        colleges: [String],
        hospitals: [String],
        shopping_malls: [String]
    },

    zone_type: {
        type: String,
        enum: ["Residential", "Commercial"]
    },

    interests: [{ type: String }],

    banner_visibility: { type: Number },
    file_type_allowed: [{
        type: String,
        enum: ["jpg", "jpeg", "png", "gif", "webp"]
    }],

    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    }

}, { timestamps: true });

module.exports = mongoose.model("AdBanner", adBannerSchema);
