const Page = require("../models/pagesModel");

class PageRepository {
    async createPage(data) {
        // console.log("Repository");
        return await Page.create(data);

    }

    async getAllPages() {
        return await Page.find({ isDeleted: false });
    }

    async getPageById(id) {
        return await Page.findOne({ _id: id, isDeleted: false });
    }

    async updatePage(id, data) {
        return await Page.findByIdAndUpdate(id, data, { new: true });
    }

    async softDeletePage(id) {
        return await Page.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    }
}

module.exports = new PageRepository();
