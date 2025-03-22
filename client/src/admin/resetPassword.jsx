import  { useEffect, useState } from "react";
import axios from "axios"
import { Box, Modal, Button, Typography, TextField, Tabs, Tab,} from "@mui/material";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../config";
import { ToastContainer, toast } from 'react-toastify';


const ResetPassword = ({ open, handleClose }) => {
  const [tabValue, setTabValue] = useState(0);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [userid, setUserid] = useState("");
  const navigate=useNavigate()

  useEffect(() => {
    setUserid(localStorage.getItem("userid"));
  }, []);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };



  const handleSignup = async() => {
         let api =`${BASE_URL}/admin/resetpass`;
     try {
        const response= await axios.post(api, {userid:userid, oldPassword:oldPassword, newPassword:newPassword})
        console.log(response.data)
        toast.success(response.data.msg);
         // handleClose();
    } catch (error) {
     toast.error(error.response.data.msg)
    }
   };

  return (
    <>
    <div className="model" style={{marginBottom:"200px"}}>
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ width: 400, bgcolor: "white", p: 3, borderRadius: 2, mx: "auto", mt: "10%", boxShadow: 24,}}>
        <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
         ResetPassword !!
        </Typography>

          {/* Tabs for Login & Signup */}
                <Tabs value={tabValue} onChange={handleChange} centered>
                 <Tab label="Reset" />
                </Tabs>
        
               

  {/* Sign Up Form */}
        {tabValue === 0 && (
          <Box sx={{ mt: 2 }}>
           
            <TextField label="Enter Previous Password" type="password" fullWidth margin="normal"   onChange={(e) => setOldPassword( e.target.value )} />
            <TextField label="Enter New Password" type="password" fullWidth margin="normal"  onChange={(e) => setNewPassword( e.target.value )} />
            <Button variant="contained" color="primary" fullWidth onClick={handleSignup} sx={{ mt: 2 }}>
            Change Password
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

export default ResetPassword;