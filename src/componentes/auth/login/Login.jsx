import { Box, Button, Typography, TextField } from '@mui/material';
import { useFormik } from 'formik';
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const handleFormSubmit = (values) => { console.log(values) }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleFormSubmit
  })

  return (

    <Box bgcolor={'white'} display={'flex'} flexDirection={'column'} alignItems={'center'} height={'100vh'} minHeight={'700px'}>

      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} height={'85%'} width={'100%'} >

        <img width={'300px'} src='/img/img-login.jpg'></img>
        <Typography color={'#415A77'} fontSize={'25px'} fontWeight={700} paddingBottom={'5px'} width={'80%'} textAlign={'center'}>Welcome to Codesue</Typography>
        <Typography color={'gray'}>Keep your data safe!</Typography>
        <form className='c-form' onSubmit={formik.handleSubmit}>
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

          <Button sx={{ mt: '30px', mb: '10px', height: '65px', fontWeight: '700' }} variant='contained' type='submit'>Ingresar</Button>
        </form>
        <Typography fontSize={'15px'} fontWeight={700} color={'#415A77'} textAlign={'center'}>Forgot your password?</Typography>
      </Box>

      <Box display={'flex'} alignItems={'end'} height={'30%'} mb={'20px'} gap={'5px'} >
        <Typography component={'div'} color={'gray'}>Dont have an account?</Typography>
        <Typography sx={{ cursor: 'pointer' }} onClick={() => navigate('/')} fontWeight={700} color={'#415A77'}>Register!</Typography>

      </Box>
    </Box >
  )
}


export default Login