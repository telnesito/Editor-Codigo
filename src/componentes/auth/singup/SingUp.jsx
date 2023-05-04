import "../login/Login.css"

import { Box, Button, FormControl, Snackbar, InputLabel, IconButton, MenuItem, Modal, Select, TextField, Typography, Alert } from "@mui/material"
import { useFormik } from "formik"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SingUp = () => {

  const [open, setOpen] = useState(false)
  const [snackbar, setSnackbar] = useState(false)
  const navigate = useNavigate()
  const handleModal = (action) => setOpen(action)
  const handleSnackbar = (action) => setSnackbar(action)


  const handleFormSubmit = ({ email, confirmEmail, username, securityQuestion, securityAnswer }) => {
    if (email === confirmEmail) {
      handleModal(true)
      console.log({ email, confirmEmail, username, securityQuestion, securityAnswer })
    } else {
      console.log('Verifique email')
    }
  }

  const handleSubmitValidation = ({ codeVerification }) => {
    try {

      if (codeVerification === '12345') {
        handleModal(false)
        handleSnackbar(true)
      }
      console.log('Enviado correctamente', codeVerification)
    } catch (error) {
      console.log(error)
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

  const validationFormik = useFormik(
    {
      initialValues: {
        codeVerification: ''
      },
      onSubmit: handleSubmitValidation

    }
  )
  // Destructuramos el obj formik
  const { username, email, confirmEmail, password, securityQuestion, securityAnswer, handleChange } = formik


  return (
    <Box

      minHeight={'600px'}
      bgcolor={'white'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'space-around'}
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
      <form className="c-form" onSubmit={formik.handleSubmit}>
        <Box textAlign={'center'} mb={'20px'}>
          <Typography fontSize={'25px'} fontWeight={700} color={'#415A77'}>Create an account</Typography>
          <Typography color={'gray'}>Sign up now and unlock exclusive tools!</Typography>
        </Box>
        <TextField
          fullWidth
          label='Username'
          name="username"
          id="username"
          type="text"
          variant="filled"
          value={username}
          onChange={handleChange}
          required
        />
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

        <FormControl fullWidth>
          <InputLabel id={'select-question'} >Security question</InputLabel>
          <Select
            defaultValue={""}
            labelId="select-question"
            label="Security question"
            required
            onChange={handleChange}
            value={securityQuestion}
            name="securityQuestion"
            id="securityQuestion"

          >
            <MenuItem value={'Fecha de nacimiento de tu hermano mayor'}>Fecha de nacimiento de tu hermano mayor</MenuItem>
            <MenuItem value={"Comida favorita"}>Comida favorita</MenuItem>
            <MenuItem value={"Correo electronico de recuperacion"} >Correo electronico de recuperacion</MenuItem>
          </Select>
        </FormControl>

        <TextField

          required
          fullWidth
          id="securityAnswer"
          label="Security answer"
          name="securityAnswer"
          variant="filled"
          value={securityAnswer}
          onChange={handleChange}
          type="text" />


        <Button sx={{ height: '50px', fontWeight: '700' }} variant='contained' type='submit'>Create account</Button>
      </form >
      <Box display={'flex'} alignSelf={'center'} gap={'5px'}>
        <Typography component={'div'} color={'gray'}>Tienes una cuenta?</Typography>
        <Typography sx={{ cursor: 'pointer' }} onClick={() => navigate('/authenticator/login')} fontWeight={700} color={'#415A77'}>Inicia sesion!</Typography>

      </Box>
      {/* Modal de verificacion de correo */}
      <Modal
        open={open}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box
          width={{ lg: '500px', xs: '300px', md: '500px' }}
          padding={'20px'}
          height={'250px'}
          bgcolor={'white'}
          color={'black'}
          borderRadius={'10px'}
          boxShadow={'5px 5px 15px #00000080'}

          sx={{ gap: '20px', flexDirection: 'column', display: 'flex', alignItems: 'left', justifyContent: 'center' }}
        >
          <Box width={'90%'}>
            <Typography fontWeight={700} color={'#111151'} fontSize={'25px'}>Email Validation</Typography>
            <Typography>Por favor, vaya a su correo electronico e introduzca el codigo de verificacion de 5 digitos</Typography>
          </Box>

          <form onSubmit={validationFormik.handleSubmit}>
            <TextField
              fullWidth
              label={'Codigo de verificacion'}
              type="text"
              variant="outlined"
              onChange={validationFormik.handleChange}
              value={validationFormik.codeVerification}
              name="codeVerification"
              id="codeVerification"
              required
            />
            <Box
              display={'flex'}
              gap={'10px'}
              mt={'10px'}
            >
              <Button type="submit" variant="contained">Enviar</Button>
              <Button onClick={() => handleModal(false)} variant="outlined">Cambiar correo</Button>
            </Box>
          </form>

        </Box>
      </Modal>

      {/* Snackbar de verificacion de registro */}

      <Snackbar Snackbar
        open={snackbar}
        autoHideDuration={6000}
        onClose={() => handleSnackbar(false)}
        sx={{ width: '250px' }}

      >
        <Alert elevation={3} variant="filled" sx={{ width: "100%" }} severity="success">Registro exitoso!</Alert>

      </Snackbar>

    </Box >
  )
}

export default SingUp