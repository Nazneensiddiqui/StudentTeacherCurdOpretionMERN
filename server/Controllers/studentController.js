const StudentModel=require("../Models/StudentModel")

const StudentData=async(req, res)=>{
   const {fullName,email,phone,dob,address,course}=req.body
   try {
    const student = await StudentModel.create({
        fullname:fullName,
        email,
        phone,
        dob,
        address,
        course
    })
    res.sent("ok")
   } catch (error) {
    console.log(error)
   }
}


module.exports={
    StudentData
}