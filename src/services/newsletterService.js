const newsletterRepository = require("../repositories/newsletterRepository");

class NewsletterService {
    async createNewsletter(data) {
        return await newsletterRepository.createNewsletter(data);
    }

    async getAllNewsletters() {
        return await newsletterRepository.getAllNewsletters();
    }

    async getNewsletterById(id) {
        return await newsletterRepository.getNewsletterById(id);
    }

    async updateNewsletter(id, data) {
        return await newsletterRepository.updateNewsletter(id, data);
    }

    async softDeleteNewsletter(id) {
        return await newsletterRepository.softDeleteNewsletter(id);
    }
}

module.exports = new NewsletterService();
