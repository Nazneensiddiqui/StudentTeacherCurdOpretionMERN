const express=require("express")
const route=express.Router()
const StudentController=require("../Controllers/studentController")

route.post("/studentdata", StudentController.StudentData)


module.exports=route