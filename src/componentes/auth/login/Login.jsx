import { Box, Button, Typography, TextField, IconButton } from '@mui/material';
import { useFormik } from 'formik';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect } from "react"
import "aos/dist/aos.css"
import Aos from 'aos'
import { auth } from '../../../../services/auth';

const Login = () => {

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  const navigate = useNavigate()
  const handleFormSubmit = async ({ email, password }) => {

    const response = await auth.iniciarSesion({ email, password })

    console.error(email, password)
    if (response.uid) {
      console.log(response)
      navigate('/home/doc')

    } else {
      console.error('Clave invalida')
    }

  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleFormSubmit
  })

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
            value={formik.values.email}
            onChange={formik.handleChange}

          />

          <TextField
            label='Password'
            name='password'
            id='password'
            type='password'
            variant='filled'
            value={formik.values.password}
            onChange={formik.handleChange}

          />

          <Button sx={{ mt: '20px', height: '50px', fontWeight: '700' }} variant='contained' type='submit'>Ingresar</Button>
          <Typography fontSize={'15px'} fontWeight={700} color={'#415A77'} textAlign={'center'}>Forgot your password?</Typography>
        </form>
      </Box>

      <Box display={'flex'} gap={'5px'}>
        <Typography component={'div'} color={'gray'}>Dont have an account?</Typography>
        <Typography sx={{ cursor: 'pointer' }} onClick={() => navigate('/authenticator/singup')} fontWeight={700} color={'#415A77'}>Register!</Typography>

      </Box>
    </Box>
  )
}


export default Login