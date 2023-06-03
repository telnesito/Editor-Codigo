import { Box, Button, Typography, Paper, TextField, IconButton, Snackbar, Alert, Modal, Backdrop, CircularProgress } from '@mui/material';
import { useFormik } from 'formik';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from "react"
import "aos/dist/aos.css"
import Aos from 'aos'
import { auth } from '../../../../services/auth';
import { sendEmailVerification } from '../../../functions/sendEmailVarification';

const Login = () => {

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  const navigate = useNavigate()
  const [passError, setPassError] = useState(false)
  const [VerifEmailError, setVerifEmailError] = useState(false)
  const [disableBtn, setDisableBtn] = useState(false)
  const [countBtn, setCountBtn] = useState(0)
  const [correoRecuperacion, setCorreoRecuperacion] = useState("")
  const [forgetPassword, setForgetPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [recoveryInfo, setRecoveryInfo] = useState(false)
  const [validError, setValidError] = useState({
    code: '', message: ''
  })
  const handleFormSubmit = async ({ email, password }) => {


    try {
      setLoading(true)
      const response = await auth.iniciarSesion({ email, password })
      console.error(email, password)

      if (response.uid) {
        validarEmail(response)
      } else {
        setPassError(true)
      }

      setLoading(false)
    } catch (error) {
      console.error(error)
    }


  }

  const validarEmail = (user) => {

    if (user.email === "admincodesue@gmail.com") {
      navigate('/administracion')
    }

    if (user.emailVerified) {
      navigate('/home/doc')
    } else {
      setVerifEmailError(true)
    }

  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleFormSubmit
  })


  const handleSendEmailVerification = async () => {
    setDisableBtn(true)
    setCountBtn(10)

    const interval = setInterval(() => {
      setCountBtn((prevCount) => prevCount - 1);
    }, 1000);

    const responseAPI = await sendEmailVerification()
    setValidError(responseAPI)



    try {
      setTimeout(() => {
        clearInterval(interval)
        setDisableBtn(false)
      }, 10000);
    } catch (error) {
      console.log(error)
    }

  }

  const handlePasswordRecovery = async (e) => {
    e.preventDefault()
    try {
      await auth.recuperarClave({ email: correoRecuperacion })
      setRecoveryInfo(true)
      setForgetPassword(false)
    } catch (error) {
      console.error(error)

    }

  }

  return (

    <Box
      width={'100%'}
      bgcolor={'white'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'space-around'}
      minHeight={'600px'}
      height={{ xs: '100vh', lg: '650px', md: '650px', sm: '100vh' }}

    >

      <Box width={'90%'}>
        <IconButton onClick={() => navigate('/')} size='large'>
          <ArrowBackIcon className='icon-back-login' />
        </IconButton>
        <Typography component={'span'} color={'black'} variant='body2'>Home</Typography>
      </Box>

      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} width={'100%'} >
        <Box height={'100px'} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} width={'100%'}>

          <Typography color={'#415A77'} fontSize={'25px'} fontWeight={700} width={'100%'} textAlign={'center'}>Welcome to Codesue</Typography>
          <Typography width={'100%'} textAlign={'center'} color={'gray'}>Keep your data safe!</Typography>

        </Box>
        <form className='c-form' onSubmit={formik.handleSubmit} data-aos="fade-left">
          <TextField
            fullWidth
            label='Email'
            name='email'
            id='email'
            type='email'
            variant='filled'
            required
            value={formik.values.email}
            onChange={formik.handleChange}

          />

          <TextField
            label='Password'
            required

            name='password'
            id='password'
            type='password'
            variant='filled'
            value={formik.values.password}
            onChange={formik.handleChange}

          />

          <Button sx={{ mt: '20px', height: '50px', fontWeight: '700' }} variant='contained' type='submit'>Ingresar</Button>
          <Button onClick={() => setForgetPassword(true)}>Forgot your password?</Button>
        </form>
      </Box>

      <Box display={'flex'} gap={'5px'}>
        <Typography component={'div'} color={'gray'}>Dont have an account?</Typography>
        <Typography sx={{ cursor: 'pointer' }} onClick={() => navigate('/authenticator/singup')} fontWeight={700} color={'#415A77'}>Register!</Typography>

      </Box>
      <Snackbar open={passError} onClose={() => setPassError(false)}>
        <Alert severity='error'>
          Correo electronico o clave erroneo, por favor verficar e intentar de nuevo
        </Alert>
      </Snackbar>

      <Modal
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        open={VerifEmailError} onClose={() => setVerifEmailError(false)}>
        <Paper data-aos="fade-left"
          sx={{
            height: 'auto',
            width: '700px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box bgcolor={'#007ACC'} color={'white'}>
            <Typography ml={'10px'} textAlign={'left'} variant='body1'>Verifica el correo electronico</Typography>
          </Box>
          <Alert severity='warning'>
            Su cuenta esta registrada correctamente, sin embargo es necesario que valide el correo electronico. Revisar su bandeja o de spam para terminar su registro
          </Alert>
          <Alert severity='error'>
            <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
              <Typography>Email de verficacion vencido o no recibido?</Typography>
              <Button disabled={disableBtn}
                onClick={handleSendEmailVerification}
                sx={{ width: '150px' }} color='error' size='small' variant='contained'>
                {countBtn === 0 ? 'Re-enviar' : countBtn}
              </Button>
            </Box>
          </Alert>
          {validError.message !== "" ? <Alert severity={validError.code === 0 ? 'success' : 'error'}>
            <Typography>
              {validError.message}
            </Typography>
          </Alert> : "  "}
        </Paper>
      </Modal>

      <Modal
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        open={forgetPassword} onClose={() => setForgetPassword(false)}>
        <Paper data-aos="fade-left"
          sx={{
            minHeight: '250px',
            height: 'auto',
            justifyContent: 'center',
            width: '350px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >

          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            height={'100%'}
            gap={'10px'}
            width={'80%'}
          >
            <Alert severity='warning'>
              Ingresar correo electronico de la cuenta asociada a la que se requiere recuperar la clave
            </Alert>
            <Typography>Ingresar el correo electronico</Typography>
            <form onSubmit={(e) => handlePasswordRecovery(e)}>
              <TextField type='email' required value={correoRecuperacion} onChange={({ target }) => setCorreoRecuperacion(target.value)} placeholder='Correo electronico' fullWidth variant='standard'></TextField>
              <Button sx={{ mt: '10px' }} type='submit' color='secondary' variant='contained'>Recuperar</Button>
            </form>

          </Box>
        </Paper>
      </Modal>
      <Snackbar open={recoveryInfo} onClose={() => setRecoveryInfo(false)}>
        <Alert severity='success'>
          <Box display={'flex'}>
            <Typography>
              Un email con las instrucciones de recuperacion de clave ha sido enviado a
            </Typography>
            <Typography fontWeight={700} ml={'5px'}>{`${correoRecuperacion}`}</Typography>
          </Box>

        </Alert>
      </Snackbar>
      <Backdrop open={loading}>
        <CircularProgress></CircularProgress>
      </Backdrop>
    </Box>
  )
}


export default Login