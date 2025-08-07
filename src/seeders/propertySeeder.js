const mongoose = require("mongoose");
const Property = require("../models/propertyModel"); 
const seedProperties = async () => {
    try {
        await Property.deleteMany(); 

        const properties = [
            {
                "title": "Prime Billboard on MG Road",
                "slug": "prime-billboard-mg-road",
                "banner_code": "BAZ3464",
                "qr_code_url": "/qr/baz3464.png",
                "category": "6618c1b263478e001fd1a111",
                "location_type": "Urban",
                "location_name": "MG Road",
                "landmark": "Near City Mall",
                "address": "123 MG Road, Near City Mall",
                "city": "Bangalore",
                "state": "Karnataka",
                "pincode": 560001,
                "pin_on_map": { "lat": 12.9716, "lng": 77.5946 },
                "images": ["/uploads/banner1.jpg", "/uploads/banner2.jpg", "/uploads/banner3.jpg"],
                "preview_image": "/uploads/banner1-preview.jpg",
                "size": { "height": 20, "width": 40 },
                "orientation": "Landscape",
                "pricing_type": "Per Month",
                "days": 30,
                "price_min": 50000,
                "price_max": 100000,
                "description": "<p>This high-visibility billboard is located in the heart of the city, ensuring maximum reach for your brand.</p>",
                "specifications": [
                    { "title": "Material", "feature": "Weatherproof Vinyl" },
                    { "title": "Illumination", "feature": "Backlit" }
                ],
                "estimated_monthly_impressions": "1.5M+ Views per Month",
                "daily_visibility_duration": "24/7 exposure",
                "vehicle_traffic_data": "ADT: 1.2M vehicles/day",
                "audience_dwell_time": "Avg. 30 seconds visual engagement",
                "nearby_institutions": {
                    "schools": ["City International School"],
                    "colleges": ["St. Joseph’s College"],
                    "hospitals": ["Apollo Hospital"],
                    "shopping_malls": ["Phoenix Marketcity"]
                },
                "zone_type": "Commercial",
                "interests": ["Shopping", "Tech", "Fashion", "Education", "Finance"],
                "banner_visibility": 1.5,
                "file_type_allowed": ["jpg", "png", "jpeg"],
                "status": "active"
            },
            {
                "title": "Airport Road LED Display",
                "slug": "airport-road-led-display",
                "banner_code": "AIR8877",
                "qr_code_url": "/qr/air8877.png",
                "category": "6618c1b263478e001fd1a111",
                "location_type": "Urban",
                "location_name": "Airport Road",
                "landmark": "Opp. Airport Gate",
                "address": "45 Airport Road, Opp. Airport Gate",
                "city": "Hyderabad",
                "state": "Telangana",
                "pincode": 500016,
                "pin_on_map": { "lat": 17.4534, "lng": 78.4678 },
                "images": ["/uploads/airport1.jpg", "/uploads/airport2.jpg"],
                "preview_image": "/uploads/airport1-preview.jpg",
                "size": { "height": 15, "width": 30 },
                "orientation": "Landscape",
                "pricing_type": "Per Week",
                "days": 7,
                "price_min": 35000,
                "price_max": 60000,
                "description": "<p>Located at the busy Airport Road, this LED display offers unbeatable brand visibility for travelers and commuters alike.</p>",
                "specifications": [
                    { "title": "Material", "feature": "Digital LED Screen" },
                    { "title": "Illumination", "feature": "Auto Brightness Adjustment" }
                ],
                "estimated_monthly_impressions": "2M+ Views per Month",
                "daily_visibility_duration": "20 hours/day",
                "vehicle_traffic_data": "ADT: 1.5M vehicles/day",
                "audience_dwell_time": "Avg. 45 seconds",
                "nearby_institutions": {
                    "schools": ["Gitanjali School"],
                    "colleges": ["Hyderabad Institute of Tech"],
                    "hospitals": ["Yashoda Hospitals"],
                    "shopping_malls": ["GVK One Mall"]
                },
                "zone_type": "Commercial",
                "interests": ["Travel", "Tech", "Luxury", "Hospitality"],
                "banner_visibility": 2,
                "file_type_allowed": ["jpg", "png"],
                "status": "active"
            },
            {
                "title": "Suburban Wallscape in Whitefield",
                "slug": "suburban-wallscape-whitefield",
                "banner_code": "WF2233",
                "qr_code_url": "/qr/wf2233.png",
                "category": "6618c1b263478e001fd1a111",
                "location_type": "Suburban",
                "location_name": "Whitefield",
                "landmark": "Near ITPL",
                "address": "16 Whitefield Main Rd, Near ITPL",
                "city": "Bangalore",
                "state": "Karnataka",
                "pincode": 560066,
                "pin_on_map": { "lat": 12.9698, "lng": 77.7499 },
                "images": ["/uploads/whitefield1.jpg"],
                "preview_image": "/uploads/whitefield1-preview.jpg",
                "size": { "height": 25, "width": 50 },
                "orientation": "Portrait",
                "pricing_type": "Per Month",
                "days": 30,
                "price_min": 30000,
                "price_max": 70000,
                "description": "<p>This towering wallscape is situated in Whitefield’s tech corridor, ideal for targeting working professionals.</p>",
                "specifications": [
                    { "title": "Material", "feature": "Canvas Print" },
                    { "title": "Illumination", "feature": "None" }
                ],
                "estimated_monthly_impressions": "1M Views per Month",
                "daily_visibility_duration": "18 hours/day",
                "vehicle_traffic_data": "ADT: 850K vehicles/day",
                "audience_dwell_time": "Avg. 25 seconds",
                "nearby_institutions": {
                    "schools": ["Vydehi School"],
                    "colleges": ["CMR Institute of Technology"],
                    "hospitals": ["Manipal Hospital"],
                    "shopping_malls": ["Forum Shantiniketan"]
                },
                "zone_type": "Residential",
                "interests": ["Real Estate", "Education", "Tech"],
                "banner_visibility": 1,
                "file_type_allowed": ["jpg", "jpeg"],
                "status": "active"
            }
        ];
        

        await Property.insertMany(properties);
        console.log("Property data seeded successfully");
    } catch (error) {
        console.error("Seeding Properties failed:", error);
    }
};

module.exports = seedProperties;
