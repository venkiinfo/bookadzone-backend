const footerInfoModel = require("../models/footerInfoModel");

const seedFooterInfo = async () => {
    try {
        await footerInfoModel.deleteMany();

        const FooterInfo = [
            {
                footerLogo: 'footer-info.png',
                footerDescription: 'footerDescription-1',
                socialMediaIconName: 'socialMediaIconName-1',
                socialMediaLinks: 'socialMediaLinks-1',
                googlePlaystoreLink: 'googlePlaystoreLink-1',
                appleAppstoreLink: 'appleAppstoreLink-1',  
                isDeleted: false
            },
            {
                footerLogo: 'footer-info.png',
                footerDescription: 'footerDescription-2',
                socialMediaIconName: 'socialMediaIconName-2',
                socialMediaLinks: 'socialMediaLinks-2',
                googlePlaystoreLink: 'googlePlaystoreLink-2',
                appleAppstoreLink: 'appleAppstoreLink-2',  
                isDeleted: false
            },
            {
                footerLogo: 'footer-info.png',
                footerDescription: 'footerDescription-3',
                socialMediaIconName: 'socialMediaIconName-3',
                socialMediaLinks: 'socialMediaLinks-3',
                googlePlaystoreLink: 'googlePlaystoreLink-3',
                appleAppstoreLink: 'appleAppstoreLink-3',  
                isDeleted: false
            },
        ]

        await footerInfoModel.insertMany(FooterInfo);
        console.log("Footer Info Seeded Successfully");
    } catch (err) {
        console.log("Seeding Footer Info Failed", err);
    }
}

module.exports = seedFooterInfo;