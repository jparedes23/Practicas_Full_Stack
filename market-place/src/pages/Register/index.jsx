
import { Link } from "react-router-dom";
import { Box, TextField, Button, Paper, Typography } from "@mui/material";
import { useState } from "react";

import {post} from "../../services"
import Swal from "sweetalert2"



const Register = () => {

    const [values, setValues] = useState({
        name: "",
        email:"",
        password:"",
    })

   

 
    ///name y value biene desde el evento jajaja noi te equivoqye ctm

    const handleInputChange = (e) =>{
        /// recuerda que name y value es reservad del event
        const { name,  value} = e.target;
        setValues({
            ...values,
            // [name] esporque lko define como un string
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = await post("user/signup", values);
      if (data.ok) {
        Swal.fire({
          icon: "success",
          text: "Usuairo creado correctamente",
        });
        setValues({
          name: "",
          email: "",
          password: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          text: data.message.detail,
        });
      }
    };


  return (

    <Box
    display="flex"
    height="100vh"
    alignItems="center"
    justifyContent="center"
  >
    <Paper
     sx={{
      width: 300,
    }}>
   
      <Box p={3} component="form" onSubmit={handleSubmit} method="post">
        <Typography textAlign="center" variant="h4">
          Register
        </Typography>
        <Box my={3}>
        {/* value={values.name} estos bienen del hook 
        name="name"  , name="email" y  name="password"  bienen del name del event */}
          <TextField name="name" value={values.name} onChange={handleInputChange} type="text" label="Nombre" fullWidth></TextField>
        </Box>
        <Box my={3}>
          <TextField name="email" value={values.email} onChange={handleInputChange} type="email" label="E-mail" fullWidth></TextField>
        </Box>
        <Box my={3}>
          <TextField name="password" value={values.password} onChange={handleInputChange} type="password" label="Password" fullWidth></TextField>
        </Box>
        <Box my={3}>
          <Button  type="submit" fullWidth variant="outlined">
            Registrar
          </Button>
        </Box>
        <Box >
        <Button
            component={Link}
            to="/login"
            sx={{
              textTransform: "capitalize",
            }}
          >
            Ya tengo cuenta
          </Button>
        </Box>
      </Box>
    </Paper>
  </Box>
  )
}

export default Register