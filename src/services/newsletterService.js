const newsletterRepository = require("../repositories/newsletterRepository");
const { writeTemplateFile, updateTemplateFile } = require("../utils/creatingFile");

class NewsletterService {
    async createNewsletter(data) {
        const filePath = writeTemplateFile(data.slug, data.description);
        data.path = filePath;
        const newsletter = await newsletterRepository.createNewsletter(data);
        return newsletter;
    }

    async getAllNewsletters() {
        return await newsletterRepository.getAllNewsletters();
    }

    async getNewsletterById(id) {
        return await newsletterRepository.getNewsletterById(id);
    }

    async updateNewsletter(id, data) {
        const filePath = updateTemplateFile(data.slug, data.description);
        data.path = filePath;
        const updated = await newsletterRepository.updateNewsletter(id, data);
        return updated;
    }

    async softDeleteNewsletter(id) {
        return await newsletterRepository.softDeleteNewsletter(id);
    }
}

module.exports = new NewsletterService();
