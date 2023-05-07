import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <Box>
            <AppBar style={{backgroundColor:'green'}}>
                <Toolbar>
                   <Typography variant='h3' sx={{ flexGrow: 1 }} align="left">
                   App
                   </Typography>
                   <Link to="/" style={{textDecoration:'none',color:'white'}}>
                      <Button color="inherit">Home</Button>
                   </Link>
                   <Link to="/form" style={{textDecoration:'none',color:'white'}}>
                      <Button color="inherit">Employee</Button>
                   </Link>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
  );
};

export default Navbar;
