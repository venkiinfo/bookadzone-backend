// utils/creatingFile.js
const fs = require("fs");
const path = require("path");

const TEMPLATE_FOLDER = path.join(__dirname, "..", "templates");

function ensureTemplateFolderExists() {
    if (!fs.existsSync(TEMPLATE_FOLDER)) {
        fs.mkdirSync(TEMPLATE_FOLDER);
    }
}

function writeTemplateFile(slug, content) {
    ensureTemplateFolderExists();
    const filePath = path.join(TEMPLATE_FOLDER, `${slug}.html`);
    fs.writeFileSync(filePath, content, "utf8");
    return filePath; // return path
}

function updateTemplateFile(slug, content) {
    const filePath = path.join(TEMPLATE_FOLDER, `${slug}.html`);
    if (fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, content, "utf8");
        return filePath;
    } else {
        throw new Error("Template file not found for update.");
    }
}

module.exports = {
    writeTemplateFile,
    updateTemplateFile
};
