const FAQ = require("../models/faqModel");

class FaqRepository {
    async createFaq(data) {
        return await FAQ.create(data);
    }

    async getAllFaqs() {
        return await FAQ.find({ isDeleted: false });
    }

    async getFaqById(id) {
        return await FAQ.findOne({ _id: id, isDeleted: false });
    }

    async updateFaq(id, data) {
        return await FAQ.findByIdAndUpdate(id, data, { new: true });
    }

    async softDeleteFaq(id) {
        return await FAQ.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    }
}

module.exports = new FaqRepository();
