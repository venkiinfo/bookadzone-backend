const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        footerLogo: { type: String, required: true },
        footerDescription : { type: String, required: true },
        socialMediaIconName : { type: String, required: true },
        socialMediaLinks : { type: String, required: true },
        googlePlaystoreLink: { type: String, required: true },
        appleAppstoreLink: { type: String, required: true },  
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true }
)

module.exports = mongoose.model('FOOTERINFO', schema);