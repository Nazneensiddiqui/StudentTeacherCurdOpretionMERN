import {  Typography, Box, Container, Grid, Link } from "@mui/material";



const Footer=()=>{
    return(
        <>
      <Box component="footer" sx={{ bgcolor: "#696969", color: "white", textAlign: "center", p: 2,  width: "100%" }}>
      <Container >
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">Quick Links</Typography>
              <Link href="#" color="inherit" display="block">Home</Link>
              <Link href="#" color="inherit" display="block">Teachers</Link>
              <Link href="#" color="inherit" display="block">Students</Link>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">Contact Us</Typography>
              <Typography variant="body2">Email: support@dashboard.com</Typography>
              <Typography variant="body2">Phone: +123 456 7890</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6">Follow Us</Typography>
              <Typography variant="body2">Facebook | Twitter | Instagram</Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" sx={{ mt: 2 }}>
            &copy; 2025 Teacher & Student Dashboard. All Rights Reserved.
          </Typography>
        </Container>
       
      </Box>
    
        </>
    )
}
export default Footer
