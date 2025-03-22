
import { Typography,Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";


const Display=()=>{
    return(
        <>
     {/* Tables */}
     <Container>
          <Grid container spacing={3}>
            {/* Teachers Table */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, bgcolor: "#222" }}>
                <Typography variant="h6" gutterBottom>Teachers</Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ color: "white" }}>Name</TableCell>
                        <TableCell sx={{ color: "white" }}>Subject</TableCell>
                        <TableCell sx={{ color: "white" }}>Email</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* {teachers.map((teacher) => (
                        <TableRow key={teacher.id}>
                          <TableCell sx={{ color: "white" }}>{teacher.name}</TableCell>
                          <TableCell sx={{ color: "white" }}>{teacher.subject}</TableCell>
                          <TableCell sx={{ color: "white" }}>{teacher.email}</TableCell>
                        </TableRow>
                      ))} */}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>

            {/* Students Table */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, bgcolor: "#222" }}>
                <Typography variant="h6" gutterBottom>Students</Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ color: "white" }}>Name</TableCell>
                        <TableCell sx={{ color: "white" }}>Grade</TableCell>
                        <TableCell sx={{ color: "white" }}>Email</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* {students.map((student) => (
                        <TableRow key={student.id}>
                          <TableCell sx={{ color: "white" }}>{student.name}</TableCell>
                          <TableCell sx={{ color: "white" }}>{student.grade}</TableCell>
                          <TableCell sx={{ color: "white" }}>{student.email}</TableCell>
                        </TableRow>
                      ))} */}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
        </Container>
            
        
        </>
    )
}
export default Display