const PROPERTY = require("../models/propertyModel");

class PropertyRepository {
    async createProperty(data) {
        return await PROPERTY.create(data);
    }

    async getAllProperties() {
        return await PROPERTY.find({ isDeleted: false });
    }

    async getPropertyById(id) {
        return await PROPERTY.findOne({ _id: id, isDeleted: false });
    }

    async updateProperty(id, data) {
        return await PROPERTY.findByIdAndUpdate(id, data, { new: true });
    }

    async softDeleteProperty(id) {
        return await PROPERTY.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    }
}

module.exports = new PropertyRepository();
