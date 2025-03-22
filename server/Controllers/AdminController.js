const AdminModel=require("../Models/AdminModel")
const bcrypt= require("bcryptjs")
const jwt= require("jsonwebtoken")


const Signup=async(req, res)=>{
 const {name, email, subject,password,confirmPassword}=req.body
const hashPassword=bcrypt.hashSync(password,8)
 try {
    const Admin= await AdminModel.create({
           name: name,
            email: email,
            subject:subject,
            password:hashPassword,
            confirmPassword: hashPassword
        })
        res.send("okk")
 } catch (error) {
   console.log(error) 
 }
    
}


const Login=async(req, res)=>{
    const { email, password }=req.body
    try {
        const user= await AdminModel.findOne({email:email})
       
        if(!user)
        {
            res.status(401).send({msg:"Invalid Email!!!"})
        }
       const cheackpass= await bcrypt.compare(password , user.password)
        if(checkpass)
        {
        // JWT Token
        const token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY, { expiresIn: "7d" });
    
        //  Updated response including user details
        return res.status(200).send({
            msg: "Login Successful",
            token: token,
            user: { _id: user._id, name: user.name, email: user.email }
        });
        }
        else{
         res.status(401).send({msg:"Invaild Password!!!"})
        }
    
    } catch (error) {
        console.log(error)  
    }
  
}
const Teacher=async(req, res)=>{
   const data= await AdminModel.find()
    res.send(data)
}

const ResetPassword=async(req, res)=>{
   const { userid, oldPassword, newPassword }=req.body
 try {
    const Admin = await AdminModel.findById(userid);
    if (!Admin) {
        return res.status(400).json({ msg: "User not found!" });
    }

    const checkPass = await bcrypt.compare(oldPassword, Admin.password);
    if (!checkPass) {
        return res.status(400).json({ msg: "Incorrect old password!" });
    }

    const hashPassword = await bcrypt.hash(newPassword, 8);
    await AdminModel.findByIdAndUpdate(userid, { password: hashPassword });

    res.status(200).json({ msg: "Password Changed Successfully!" });
} catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Internal Server Error!" });
}
};

const DeletData=async(req, res)=>{
 const {id}=req.body
 try {
    const Data= await AdminModel.findByIdAndDelete(id)
    res.send("okk")
 } catch (error) {
   console.log(error) 
 }
   
}

//................Profile............................
const Profile=async(req, res)=>{
    const token = req.header("Authorization")
    try {
      const decoded = jwt.verify(token.replace("Bearer",""), process.env.TOKEN_KEY);
       console.log(decoded);
        const User= await AdminModel.findById(decoded.id);
        console.log(User);
        res.status(200).send(User);
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    Signup,
    Login,
    Teacher,
    ResetPassword,
    DeletData,
    Profile
}