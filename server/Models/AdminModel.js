const mongoose=require("mongoose")
const AdminSchema= new mongoose.Schema({

        name: String,
        email:String,
        subject:String,
        password:String,
        confirmPassword: String
   
})
module.exports= mongoose.model("admin" , AdminSchema)