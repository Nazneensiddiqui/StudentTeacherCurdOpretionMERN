const express= require("express")
const app= express();
const mongoose=require("mongoose")
const cors=require("cors")
const bodyParser=require("body-parser")
require("dotenv").config()

const AdminRoute=require("./Routes/AdminRoute")
const StudentRoute=require("./Routes/StudentRout")

const port=process.env.PORT
const dbconn=process.env.DBCONN

mongoose.connect(dbconn).then((res)=>{
    console.log("DB Connected!!")
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use("/admin", AdminRoute)
app.use("/student", StudentRoute)

app.listen(port , ()=>{
    console.log(`Server Run On ${port}!!`)
})