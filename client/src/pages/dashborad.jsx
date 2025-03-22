import React from "react";
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, CssBaseline, Box, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../admin/footer";
import reset from "../images/reset.png"
import { useState } from "react";
import ResetPassword from "../admin/resetPassword";
import StudentEnrollmentForm from "../admin/studentEnrollment";

 const drawerWidth = 240;
   const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
        const navigate= useNavigate()
        const handleItemClick = (text) => {
          console.log(`${text} clicked`);
        };

        const logout=()=>{
          localStorage.clear()
          navigate("/home")
        }

  return (
    <>
    <Box sx={{ display: "flex", bgcolor: "#000", color: "white", minHeight: "100vh" }}>
      <CssBaseline />
      
      {/* Sidebar */}
      <Drawer  variant="permanent"sx={{width: drawerWidth,flexShrink: 0,"& .MuiDrawer-paper": {width: drawerWidth,
            boxSizing: "border-box", bgcolor: "#111", color: "white",},}} >
        <Toolbar />
        <List>
          <ListItem onClick={() => navigate("/dashborad")}>
            <ListItemText primary="Dashboard" style={{cursor:"pointer"}} />
          </ListItem>
          <ListItem onClick={() => navigate("/dashborad/teacher")}>
            <ListItemText primary="Admins List" style={{cursor:"pointer"}}/>
          </ListItem>
          <ListItem  onClick={() => setOpen1(true)}>
            <ListItemText primary="Student Enrollment" style={{cursor:"pointer"}}  />
          </ListItem>
          <ListItem  onClick={() => handleItemClick("Students")}>
            <ListItemText primary="Students Attendence" />
          </ListItem>
          <ListItem  onClick={() => handleItemClick("Students")}>
            <ListItemText primary="Students Search" />
          </ListItem>
          <ListItem  onClick={() => handleItemClick("Students")}>
            <ListItemText primary="Students UpDate" />
          </ListItem>
          <ListItem  onClick={logout}>
            <ListItemText primary="Logout" style={{cursor:"pointer"}}/>
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, overflowY: "auto" }}>
        {/* Navbar */}
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, bgcolor: "#222" }}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Teacher Admin Dashboard           
            </Typography>
            <p style={{textAlign:"right" , fontFamily:"vardana", marginLeft:"350px", color:"yellowgreen",paddingTop:"5px"}}>Admin Name : {localStorage.getItem("username")} & Email : {localStorage.getItem("email")} </p>
             <div style={{position:"relative", top:"15px", left:"30px"}}><img src={reset} width={35} height={35}  onClick={() => setOpen(true)} />
             <p style={{fontSize:"10px", position:"relative",right:"10px"}}>resetPassword</p></div>
           
          </Toolbar>
        </AppBar>
        <Toolbar />
        {/* Tables */}
        <Container>
          <Grid container spacing={3}>
            
            <Outlet/>
             
        <StudentEnrollmentForm open={open1} handleClose={() => setOpen1(false)} />
          </Grid>
        </Container>
      
      </Box>
    </Box>
    <ResetPassword open={open} handleClose={() => setOpen(false)} />
 

      </>
  );
};

export default Dashboard;
