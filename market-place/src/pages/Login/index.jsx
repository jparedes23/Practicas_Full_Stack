
import { Link } from "react-router-dom";
import { Box, TextField, Button, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import {post} from "../../services"
import Swal from "sweetalert2";

const Login = () => {

    const [values, setValues] = useState({
        email:"",
        password:"",
    })

    const handleInputChange=(e)=>{
        const {name, value} = e.target;


        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = await post ("user/login", values)

        if (data.ok) {
            Swal.fire({
                icon:"success",
                text: "Usuario correto"
            })
            setValues({
                name:"",
                password:"",
            })
        } else {
            Swal.fire({
                icon: "error",
                text: data.message,
            })
        }
    }




  return (
    <Box
      display="flex"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Paper>
        <Box p={3} component="form" onSubmit={handleSubmit} method="post">
          <Typography textAlign="center" variant="h4">
            Login
          </Typography>
          <Box my={3}>
            <TextField name="email" value={values.email} onChange={handleInputChange} type="email" label="Email" fullWidth></TextField>
          </Box>
          <Box my={3}>
            <TextField name="password" value={values.password} onChange={handleInputChange} type="password" label="Password" fullWidth></TextField>
          </Box>
          <Box my={3}>
            <Button type="submit" fullWidth variant="outlined">
              Login
            </Button>
          </Box>
          <Box >
          <Button
              component={Link}
              to="/sign-up"
              sx={{
                textTransform: "capitalize",
              }}
            >
              Crear cuenta
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
