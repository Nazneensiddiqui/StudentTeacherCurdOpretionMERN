const express=require("express")
const route=express.Router()
const AdminController=require("../Controllers/AdminController")

route.post("/signup",AdminController.Signup)
route.post("/login",AdminController.Login)
route.get("/teacher",AdminController.Teacher)
route.post("/resetpass",AdminController.ResetPassword)
route.post("/deletdata",AdminController.DeletData)
route.get("/profile",AdminController.Profile)

module.exports=route