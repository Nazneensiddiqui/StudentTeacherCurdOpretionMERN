const mongoose=require("mongoose")
const StudentSchema= new mongoose.Schema({

        fullname: String,
        email:String,
        phone:String,
        dob:String,
        address:String,
        course:String
      
   
})
module.exports= mongoose.model("student" , StudentSchema)