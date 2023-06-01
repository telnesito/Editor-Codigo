import "../login/Login.css"

import { Box, Button, Snackbar, IconButton, TextField, Typography, Alert } from "@mui/material"
import { useFormik } from "formik"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react"
import "aos/dist/aos.css"
import Aos from 'aos'
import { sendEmailVerification } from "../../../functions/sendEmailVarification";
import { auth } from "../../../../services/auth";

const SingUp = () => {
  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  const [snackbar, setSnackbar] = useState(false)
  const [errSnack, setErrSnack] = useState(false)

  const navigate = useNavigate()
  const handleSnackbar = (action) => setSnackbar(action)


  const handleFormSubmit = async ({ email, confirmEmail, password }) => {
    if (email === confirmEmail) {

      try {
        const newUser = await auth.crearCuenta({ email, password })
        if (newUser.uid) {
          handleSnackbar(true)
          sendEmailVerification()
          setTimeout(() => {
            navigate('/authenticator/login')
          }, 3000);
        } else {
          setErrSnack(true)
        }

      } catch (error) {
        console.error('peque;a')

      }


    } else {
      console.log('Verifique email')
    }
  }


  //Objetos formik
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      confirmEmail: '',
      password: '',
      securityQuestion: '',
      securityAnswer: ''
    },
    onSubmit: handleFormSubmit
  })


  // Destructuramos el obj formik
  const { email, confirmEmail, password, handleChange } = formik


  return (
    <Box

      minHeight={'600px'}
      bgcolor={'white'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      height={{ xs: '100vh', lg: '650px', md: '650px', sm: '100vh' }}
      width={'100%'}

    >

      <Box width={'90%'}>
        <IconButton onClick={() => navigate('/')} size='large'>
          <ArrowBackIcon className='icon-back-login' />
        </IconButton>
        <Typography component={'span'} color={'black'} variant='body2'>Home</Typography>
      </Box>


      {/* Formulario de registro */}
      <form data-aos="fade-right" className="c-form" onSubmit={formik.handleSubmit}>
        <Box textAlign={'center'} >
          <Typography fontSize={'25px'} fontWeight={700} color={'#415A77'}>Create an account</Typography>
          <Typography color={'gray'}>Sign up now and unlock exclusive tools!</Typography>
        </Box>

        <TextField
          fullWidth
          label='Email'
          name="email"
          id="email"
          type="email"
          variant="filled"
          value={email}
          onChange={handleChange}
          required
        />

        <TextField
          fullWidth
          label='Confirm email'
          name="confirmEmail"
          id="confirmEmail"
          type="email"
          variant="filled"
          value={confirmEmail}
          onChange={handleChange}
          required
        />

        <TextField
          fullWidth
          label='Password'
          name="password"
          id="password"
          type="password"
          variant="filled"
          value={password}
          onChange={handleChange}
          required
        />




        <Button sx={{ height: '50px', fontWeight: '700' }} variant='contained' type='submit'>Create account</Button>
      </form>
      <Box display={'flex'} alignSelf={'center'} gap={'5px'}>
        <Typography component={'div'} color={'gray'}>Tienes una cuenta?</Typography>
        <Typography sx={{ cursor: 'pointer' }} onClick={() => navigate('/authenticator/login')} fontWeight={700} color={'#415A77'}>Inicia sesion!</Typography>

      </Box>
      {/* Modal de verificacion de correo */}


      {/* Snackbar de verificacion de registro */}

      <Snackbar Snackbar
        open={snackbar}
        autoHideDuration={6000}
        onClose={() => handleSnackbar(false)}

      >
        <Alert elevation={3} variant="filled" severity="success">Registro exitoso!, se redireccionara al inicio de sesion</Alert>

      </Snackbar>


      <Snackbar
        Snackbar
        open={errSnack}
        onClose={() => setErrSnack(false)}

      >
        <Alert elevation={3} variant="filled" severity="error">Por favor verificar que el correo electronico sea igual y que la clave sea mayor a 5 digitos!</Alert>

      </Snackbar>

    </Box>
  )
}

export default SingUp