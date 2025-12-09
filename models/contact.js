import mongoose from "mongoose";

const ContactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    createdAt: { type: Date, default: Date.now }
})
const contact=mongoose.model("Contact",ContactSchema)
export default contact