const mongoose = require("mongoose");
const agency = new mongoose.Schema(
    {
        // agency_name: { type: String, required: true },
        // agency_logo : { type: String, required: true },
        // name: { type: String, required: true },
        employee_photo: { type: String, required: true },
        // Position : { type: String, required: true },
        // your_email: { type: String, required: true },
        // your_number:{type: Number, required: true},
        // company_email: { type: String, required: true },
        // company_phone: { type: Number, required: true },
        // company_Registration_number_gst: { type: String, required: true },
        // website: { type: String, required: true },
        // employee_id_proof: { type: String, required: true },
        // business_proof: { type: String, required: true },
        // agency_address: { type: String, required: true },
        // agency_location: { type: String, required: true },
        // state: { type: String, required: true },
        // city: { type: String, required: true },
        // pincode: { type: Number, required: true },
        // password:{type: String, required: true},
    },
    { timestamps: true }
);
module.exports = mongoose.model("Agency", agency);
