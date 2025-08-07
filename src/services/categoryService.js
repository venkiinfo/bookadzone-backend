const categoryRepository = require("../repositories/categoryRepository");

class CategoryService {
    async createCategory(data) {
        return await categoryRepository.createCategory(data);
    }

    async getAllCategories() {
        return await categoryRepository.getAllCategories();
    }

    async getCategoryById(id) {

        return await categoryRepository.getCategoryById(id);
    }

    async updateCategory(id, data) {
        return await categoryRepository.updateCategory(id, data);
    }

    async softDeleteCategory(id) {
        return await categoryRepository.softDeleteCategory(id);
    }
}

module.exports = new CategoryService();
