const Setting = require("../models/settingModel");
const User= require("../models/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AuthenticationRepository {
    async findUserByEmail(email) {
        const modelName = email === process.env.ADMIN_EMAIL ? Setting : User;
        return await modelName.findOne({ email }).select("_id email password role status");
    }

    async findUserById(id){
        
       return  await User.findOne({ _id: id });
    }
    async updatePassword(id,password){
       return  await User.updateOne({_id: id,},{ $set: {password: password,}});
    }

    async saveUser(doc){
        return  await doc.save();
     }

}

module.exports = new AuthenticationRepository();
