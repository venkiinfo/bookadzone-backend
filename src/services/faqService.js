const faqRepository = require("../repositories/faqRepository");

class FaqService {
    async createFaq(data) {
        return await faqRepository.createFaq(data);
    }

    async getAllFaqs() {
        return await faqRepository.getAllFaqs();
    }

    async getFaqById(id) {
        return await faqRepository.getFaqById(id);
    }

    async updateFaq(id, data) {
        return await faqRepository.updateFaq(id, data);
    }

    async softDeleteFaq(id) {
        return await faqRepository.softDeleteFaq(id);
    }
}

module.exports = new FaqService();
