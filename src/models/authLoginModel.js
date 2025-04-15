import mongoose from "mongoose";

const loginSchema = new mongoose.Schema(
    {
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true}
    },
    {
        timestamps:true
    }
     
)

const authLogin= new mongoose.Model('authuser',loginSchema); //It is stored as a collection in db
modules.exports=authLogin;