const footerInfoController = require("../controllers/footerInfoController");
const upload = require("../utils/fileupload");
const Router = require("express").Router();

Router.get('/', footerInfoController.getAllFooterInfo);
Router.get('/:id', footerInfoController.getFooterInfoById);
Router.post('/', upload.single('file'), footerInfoController.createFooterInfo);
Router.put('/:id', upload.single('file'), footerInfoController.updateFooterInfo);
Router.delete('/:id', footerInfoController.softDeleteFooterInfo);

module.exports = Router;