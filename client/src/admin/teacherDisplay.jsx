import axios from "axios";
import { useState, useEffect } from "react";
import remove from "../images/remove.png"
import { Typography,Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../config";
import { toast } from "react-toastify";

const TeacherDisplay=()=>{
    const [myData, setMydata]=useState([])
 

const navigate= useNavigate()
    const loadData=async()=>{
         let api =`${BASE_URL}/admin/teacher`
        try {
            const response= await axios.get(api)
            console.log(response.data)
          setMydata(response.data)
          console.log(myData)
        } catch (error) {
          console.log(error)  
        }
    }

    useEffect(()=>{
        loadData()
    },[])

    //delet Data
    const delData=async(id)=>{
       let api =`${BASE_URL}/admin/deletdata`
       try {
        const response= await axios.post(api,{id:id})
        console.log(response.data)
        toast.done("Data Successful Deleted!!!")
        loadData()
       } catch (error) {
        console.log(error)
       }
    }
    
    
let sno=0
    const ans = myData.map((key)=>{
sno++
return(
    <>
   <tr style={{width:"1200", color:"white", textAlign:"center"}}>
    <td>{sno}</td>
    <td>{key.name}</td>
    <td>{key.email}</td>
    <td>{key.subject}</td>
    <td>
     <img src={remove} width={50} height={50} onClick={()=>{delData(key._id)}}/>
    </td>
    </tr> 
    </>
)
    })


    return(
        <>
       
        <div style={{marginTop:"20px", color:"yellowgreen"}}>
        <h5>Teacher Data Display</h5></div>
        <Container>
          <Grid container spacing={5}>
            {/* Teachers Table */}
            <Grid item xs={12} md={6}>
              {/* <Paper sx={{ p: 2, bgcolor: "#222" }}> */}
                {/* <Typography variant="h6" gutterBottom>Teachers</Typography> */}
                <TableContainer style={{width:"1000px", textAlign:"center"}}>
                  <Table>
                    <TableHead>
                      <TableRow>
                      <TableCell sx={{ color: "white", textAlign:"center"}}>S.No</TableCell>
                        <TableCell sx={{ color: "white" ,textAlign:"center"}}>Name</TableCell>
                        <TableCell sx={{ color: "white",textAlign:"center"}}>Email</TableCell>
                        <TableCell sx={{ color: "white",textAlign:"center"}}>Subject</TableCell>
                        <TableCell sx={{ color: "white",textAlign:"center"}}>Remove</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {ans}
                    </TableBody>
                  </Table>
                </TableContainer>
              {/* </Paper> */}
            </Grid>
            </Grid>
            </Container>
          
        </>
    )
}
export default TeacherDisplay;