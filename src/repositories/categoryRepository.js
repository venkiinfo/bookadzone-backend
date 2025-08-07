const Category = require("../models/categoryModel");
require("../models/propertyModel"); 
class CategoryRepository {
    async createCategory(data) {
        return await Category.create(data);
    }

    async getAllCategories() {
        return await Category.find({ isDeleted: false });
    }

    async getCategoryById(id) {

        return await Category.findOne({ _id: id, isDeleted: false }).populate("featuredProperties");
    }

    async updateCategory(id, data) {
        return await Category.findByIdAndUpdate(id, data, { new: true });
    }

    async softDeleteCategory(id) {
        return await Category.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    }
}

module.exports = new CategoryRepository();
