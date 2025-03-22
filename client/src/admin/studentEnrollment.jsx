import { useState } from "react";
import { Modal, Box, TextField, Button, Typography, Grid } from "@mui/material";
import axios from "axios";
import BASE_URL from "../config";

const StudentEnrollmentForm = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
     let api =`${BASE_URL}/student/studentdata` 
     try {
      const  response= await axios.post(api, formData)
      console.log("Form Data Submitted:", formData);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        dob: "",
        address: "",
        course: "",
      });
    
     } catch (error) {
      console.log(error);
     }
  
    // handleClose()
  };

  return (
    
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          bgcolor: "#121212",
          color: "white",
          width: { xs: "90%", md: "50%" },
           mx: "auto",
           mt: "8%",
           p: 3,
          borderRadius: 2,
          boxShadow: 24,
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center", mb: 3 }}>
          Student Enrollment Form
        </Typography>
        
        
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                variant="outlined"
                onChange={handleChange}
                required
                sx={{ bgcolor: "white", borderRadius: 1 }}
              />
            </Grid>

            <Grid item xs={12} >
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                onChange={handleChange}
                required
                sx={{ bgcolor: "white", borderRadius: 1 }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                type="tel"
                variant="outlined"
                onChange={handleChange}
                required
                sx={{ bgcolor: "white", borderRadius: 1 }}
              />
            </Grid>

            {/* <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Date of Birth"
                name="dob"
                type="date"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                onChange={handleChange}
                required
                sx={{ bgcolor: "white", borderRadius: 1 }}
              />
            </Grid> */}

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Course"
                name="course"
                type="text"
                variant="outlined"
                onChange={handleChange}
                required
                sx={{ bgcolor: "white", borderRadius: 1 }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                variant="outlined"
                multiline
                rows={3}
                onChange={handleChange}
                required
                sx={{ bgcolor: "white", borderRadius: 1 }}
              />
            </Grid>

            <Grid item xs={12} sx={{ textAlign: "center", mt: 2 }}>
              <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                Enroll Now
              </Button>
            </Grid>
          </Grid>
    
      </Box>
    </Modal>
 
  );
};

export default StudentEnrollmentForm;
