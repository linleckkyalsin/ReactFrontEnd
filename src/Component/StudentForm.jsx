import { Box, TextField } from '@material-ui/core'
import { Email } from '@material-ui/icons';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import Moment from 'moment';
import React, { useEffect, useState } from 'react'
export default function StudentForm() {
    
const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
    const [open, setOpen] = React.useState(false);
    const handleOpen = (id) =>{ setOpen(true);setID(id)};
    const handleClose = () => setOpen(false);
  
    const [name,setName]=useState("");
    const [dob,setDob]=useState("");
    const [email,setEmail]=useState("");
    const [sID,setID]=useState();
    const [studentData,setStudentData]=useState([])
    const submitHandler=(e)=>{
   e.preventDefault();
   const students={name,dob,email}
   console.log(students)
   fetch("http://localhost:8080/api/v1/student",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(students)
   }
   ).then(()=>{
    console.log("NEw added")
   })
    }
    const updateHandler=(e)=>{
      e.preventDefault();
        const students={name,dob,email}
        console.log(students)

        fetch("http://localhost:8080/api/v1/student/"+sID+"?name="+name+"&dob="+dob.toLocaleString()+"&email="+email,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(students)
        }).then(()=>{
          console.log("NEw added")
         })
    }
    const deleteHandler=(stuId)=>{
        fetch("http://localhost:8080/api/v1/student/"+stuId,{
            method:"DELETE",
            headers:{ "Accept":"application/json", "Content-Type":"application/json"},
           
           }
           ).then(()=>{
            console.log("NEw added")
           })
       
    }
    useEffect(() => {
    axios.get("http://localhost:8080/api/v1/student").then((res)=>setStudentData(res.data))
    }, [studentData]);
   
  return (
    <div>
       <form onSubmit={submitHandler}>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>

  </div>
  <div class="form-group">
    <label for="dob">dob</label>
    <input type="text" class="form-control" id="dob" placeholder="Enter dob" onChange={(e)=>setDob(e.target.value)}/>

  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<h2>Student List</h2>
<div>
<table class="table table-sm">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Birthday</th>
      <th scope="col">age</th>
      <th scope="col">email</th>
      <th scope='col'>Delete</th>
      <th scope='col'>Update</th>
    </tr>
  </thead>
  <tbody>
  {
    studentData.map((s)=>{
        return(
            <tr>
      <th scope="row">1</th>
      <td>{s.name}</td>
      <td>{s.dob}</td>
      <td>{s.age}</td>
      <td>{s.email}</td>
      <button type="button" class="btn btn-success" onClick={()=>handleOpen(s.id)}>Update</button>
      <td><button type="button" class="btn btn-danger" onClick={()=>deleteHandler(s.id)}>Delete</button></td>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal {sID}
          </Typography>
          <form onSubmit={(e)=>updateHandler(e,s.id)}>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" placeholder="Enter Name"  onChange={(e)=>setName(e.target.value)}/>

  </div>
  <div class="form-group">
    <label for="dob">dob</label>
    <input type="date" class="form-control" id="dob" placeholder="Enter dob"  onChange={(e)=>setDob(e.target.value)}/>

  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)}/>
  </div>
 
  <button type="submit" class="btn btn-primary">Update</button>
</form>
        </Box>
      </Modal>
    </tr>
        )
    })
  }
    
  
  </tbody>
</table>
</div>
    </div>
  )
}
