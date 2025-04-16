const footerInfoService = require('../services/footerInfoService');
const { HTTP_RESPONSE, HTTP_STATUS_CODE } = require('../utils/httpResponse');

class FooterInfoController {
    async createFooterInfo(req, res) {
        try {
            const footerLogo = req.file.filename;
            const { footerDescription , socialMediaIconName , socialMediaLinks , googlePlaystoreLink, appleAppstoreLink} = req.body;
            const data = {footerLogo, footerDescription , socialMediaIconName , socialMediaLinks , googlePlaystoreLink, appleAppstoreLink};
            const footerInfo = await footerInfoService.createFooterInfo(data);
            return res.status(HTTP_STATUS_CODE.OK).json({ status: HTTP_RESPONSE.SUCCESS, message: 'Footer Info Created Successfully', data: footerInfo });
        } catch (err) {
            console.log(err);
            return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err });
        }
    }

    async getAllFooterInfo(req, res) {
        try {
            const footerInfo = await footerInfoService.getAllFooterInfo();
            return res.status(HTTP_STATUS_CODE.OK).json({ status: HTTP_RESPONSE.SUCCESS, data: footerInfo });
        } catch (err) {
            return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err });
        }
    }

    async getFooterInfoById(req, res) {
        try {
            const { id } = req.params;
            const footerInfo = await footerInfoService.getFooterInfoById(id);
            if(!footerInfo) return res.status(HTTP_STATUS_CODE.NOT_FOUND).json({ status: HTTP_RESPONSE.SUCCESS, message: 'Footer Info Not Found', data: footerInfo });
            return res.status(HTTP_STATUS_CODE.OK).json({ status: HTTP_RESPONSE.SUCCESS, data: footerInfo });
        } catch (err) {
            return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err });
        }
    }

    async updateFooterInfo(req, res) {
        try {
            const { id } = req.params;
            const {footerLogo, footerDescription , socialMediaIconName , socialMediaLinks , googlePlaystoreLink, appleAppstoreLink} = req.body;
            const data = {footerLogo, footerDescription , socialMediaIconName , socialMediaLinks , googlePlaystoreLink, appleAppstoreLink};
            const footerInfo = await footerInfoService.updateFooterInfo(id, data);
            return res.status(HTTP_STATUS_CODE.OK).json({ status: HTTP_RESPONSE.SUCCESS, message: 'Footer Info Updated Successfully', data: footerInfo });
        } catch (err) {
            return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err });
        }
    }

    async softDeleteFooterInfo(req, res) {
        try {
            const { id } = req.params;
            const footerInfo = await footerInfoService.softDeleteInfo(id);
            if(!footerInfo) return res.status(HTTP_STATUS_CODE.NOT_FOUND).json({ status: HTTP_RESPONSE.FAIL, message: 'Footer Info Not Found' });
            return res.status(HTTP_STATUS_CODE.OK).json({ status: HTTP_RESPONSE.SUCCESS, message: 'Footer Info Deleted Successfully', data: footerInfo });
        } catch (err) {
            return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).json({ status: HTTP_RESPONSE.FAIL, error: err });
        }
    }
}

module.exports = new FooterInfoController();