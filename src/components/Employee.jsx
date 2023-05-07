import { Button, TextField } from "@mui/material";
import React from "react";

const Employee = () => {
  return (
    <div style={{ padding: "100px" }}>
      
        <TextField label="Name">Name</TextField>
        <br /><br />
        <TextField label="Designation">Designation</TextField>
        <br /><br />
        <TextField label="Location">Location</TextField>
        <br /><br />
        <TextField label="Salary">Salary</TextField>
        
      
    </div>
  );
};

export default Employee;