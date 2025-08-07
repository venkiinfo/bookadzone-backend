const propertyRepository = require("../repositories/propertyRepository");

class PropertyService {
    async createProperty(data) {
        return await propertyRepository.createProperty(data);
    }

    async getAllProperties() {
        return await propertyRepository.getAllProperties();
    }

    async getPropertyById(id) {
        return await propertyRepository.getPropertyById(id);
    }

    async updateProperty(id, data) {
        return await propertyRepository.updateProperty(id, data);
    }

    async softDeleteProperty(id) {
        return await propertyRepository.softDeleteProperty(id);
    }
}

module.exports = new PropertyService();
