const pageRepository = require("../repositories/pagesRepository");

class PageService {
    async createPage(data) {
        // console.log("Services")
        return await pageRepository.createPage(data);
    }

    async getAllPages() {
        return await pageRepository.getAllPages();
    }

    async getPageById(id) {
        return await pageRepository.getPageById(id);
    }

    async updatePage(id, data) {
        return await pageRepository.updatePage(id, data);
    }

    async softDeletePage(id) {
        return await pageRepository.softDeletePage(id);
    }
}

module.exports = new PageService();
