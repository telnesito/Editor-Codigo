import './Footer.css'
import { Box, Typography } from '@mui/material'

const Footer = () => {


  return (
    <Box color={'white'} id='sobre-nosotros' component={'footer'} sx={{ height: { xs: '900px', md: '350px' } }} className='c-footer-principal'>

      <Box sx={{ flexDirection: { md: 'row', lg: 'row', xs: 'column' } }} gap={'30px'} display={'flex'} width={'90%'}>

        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
          <Typography fontWeight={'700'} >CODESUE</Typography>
          <Typography fontSize={'14px'}>
            CodeSue es un editor e interpretador de codigo en la nube que permite la construccion de algoritmos en multiples lenguajes
          </Typography>

          <Typography fontSize={'14px'} >© 2023 CodeSue, Inc. All rights reserved.</Typography>
        </Box>

        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
          <Typography fontWeight={'700'}  >INICIA UN NUEVO PROYECTO</Typography>
          <Typography fontSize={'14px'}>Empieza con una plantilla</Typography>
          <Typography fontSize={'14px'}>Importar un archivo de codigo</Typography>
          <Typography fontSize={'14px'}>Inicia desde cero</Typography>
        </Box>

        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
          <Typography fontWeight={'700'}>LENGUAJES SOPORTADO</Typography>
          <Typography fontSize={'14px'}> JavaScript</Typography>
          <Typography fontSize={'14px'}>HTML</Typography>
          <Typography fontSize={'14px'}>CSS</Typography>
          <Typography fontSize={'14px'}>Python</Typography>
          <Typography fontSize={'14px'}>Ruby</Typography>
        </Box>

        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
          <Typography fontWeight={'700'}>PRODUCTOS</Typography>
          <Typography fontSize={'14px'}>Documentacion</Typography>
          <Typography fontSize={'14px'}>Editor de codigo</Typography>
          <Typography fontSize={'14px'}>Interpretador</Typography>
          <Typography fontSize={'14px'}>Asistente de codigo</Typography>
        </Box>

      </Box>

    </Box>
  )
}

export default Footer