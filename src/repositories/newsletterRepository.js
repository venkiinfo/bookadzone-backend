const Newsletter = require("../models/newsletterModel");

class NewsletterRepository {
    async createNewsletter(data) {
        return await Newsletter.create(data);
    }

    async getAllNewsletters() {
        return await Newsletter.find({ isDeleted: false });
    }

    async getNewsletterById(id) {
        return await Newsletter.findOne({ _id: id, isDeleted: false });
    }

    async updateNewsletter(id, data) {
        return await Newsletter.findByIdAndUpdate(id, data, { new: true });
    }

    async softDeleteNewsletter(id) {
        return await Newsletter.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    }
}

module.exports = new NewsletterRepository();
