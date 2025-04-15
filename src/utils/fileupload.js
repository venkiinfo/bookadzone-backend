const multer = require('multer');
const fs = require('fs');
const path = require('path');

const AUD = './uploads/audios/';
const VID = './uploads/videos/';
const IMG = './uploads/images/';
const OTH = './uploads/others/';




const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let targetPath;

        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            targetPath = IMG;
        } else if (file.mimetype == "audio/mpeg") {
            targetPath = AUD;
        } else if (file.mimetype == "video/mp4") {
            targetPath = VID;
        } else {
            targetPath = OTH;
        }

        
        const fullPath = path.resolve(targetPath); //returns absolute path concate the given path segment to the absolute path start from os's root  
        console.log(fullPath,"fullPath");
        if (!fs.existsSync(fullPath)) {
            fs.mkdirSync(fullPath, { recursive: true }); //{recursive:true} Create not just the last folder[images/], but also any parent folders that are missing.
        }

        cb(null, fullPath);
    },
    filename: (req, file, cb) =>{
        const randomName = new Date().getTime();
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, randomName + fileName)}
              
        
});


var upload = multer({
    storage: storage,
}).array('employee_photo', 10);;

module.exports = upload;