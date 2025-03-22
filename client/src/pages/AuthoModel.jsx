import  { useState } from "react";
import axios from "axios"
import { Box, Modal, Button, Typography, TextField, Tabs, Tab,} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import BASE_URL from "../config";

const AuthModal = ({ open, handleClose }) => {
  const [tabValue, setTabValue] = useState(0);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ name:"" ,email: "",subject:"", password: "", confirmPassword: "" });
  const navigate=useNavigate()


  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleLogin =async () => {
    let api =`${BASE_URL}/admin/login`
    try {
      const response= await axios.post(api,loginData)
      console.log(response)
   
       localStorage.setItem("token" , response.data.token)
        localStorage.setItem("userid" , response.data.user._id)
        localStorage.setItem("username" , response.data.user.name)
        localStorage.setItem("email" , response.data.user.email)
       toast.success("Login Successful!");
      console.log(response.data);
navigate("/dashborad")
handleClose();
       
    } catch (error) {
      toast.error(error.response.data.msg);
    }
 
  };

  const handleSignup = async() => {
    if (signupData.password !== signupData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
     let api =`${BASE_URL}/admin/signup`
    try {
        const response= await axios.post(api, signupData)
        console.log(response.data)
        console.log("Signup Data:", signupData);
        toast.success("Signup Successful!");
        setSignupData({ name:"" ,email: "",subject:"", password: "", confirmPassword: "" })
        // handleClose();
    } catch (error) {
       console.log(error) 
    }
   };

  return (
    <>
    <div className="model" style={{marginBottom:"200px"}}>
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ width: 400, bgcolor: "white", p: 3, borderRadius: 2, mx: "auto", mt: "10%", boxShadow: 24,}}>
        <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
          Welcome!
        </Typography>

        {/* Tabs for Login & Signup */}
        <Tabs value={tabValue} onChange={handleChange} centered>
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>

        {/* Login Form */}
        {tabValue === 0 && (
          <Box sx={{ mt: 2 }}>
            <TextField  label="Email"  fullWidth  margin="normal"  value={loginData.email}  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
            <TextField label="Password" type="password" fullWidth margin="normal" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}/>
            <Button variant="contained" color="primary" fullWidth onClick={handleLogin} sx={{ mt: 2 }}>
              Login
            </Button>
          </Box>
        )}

        {/* Sign Up Form */}
        {tabValue === 1 && (
          <Box sx={{ mt: -1 }}>
            <TextField label="Name" fullWidth margin="normal" value={signupData.name} onChange={(e) => setSignupData({ ...signupData, name: e.target.value })} />
            <TextField label="Email" fullWidth margin="normal" value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} />
            <TextField label="Subject" fullWidth margin="normal" value={signupData.subject} onChange={(e) => setSignupData({ ...signupData, subject: e.target.value })} />
            <TextField label="Password" type="password" fullWidth margin="normal"  value={signupData.password} onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} />
            <TextField label="Confirm Password" type="password" fullWidth margin="normal" value={signupData.confirmPassword} onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })} />
            <Button variant="contained" color="primary" fullWidth onClick={handleSignup} sx={{ mt: 2 }}>
              Sign Up
            </Button>
          </Box>
        )}
      </Box>
    </Modal>
    </div>
    <ToastContainer/>
    </>
  );
};

export default AuthModal;