import EastIcon from '@mui/icons-material/East';
import { Box, Button, Typography } from "@mui/material"
import './Hero.css'
const Hero = () => {
  return (
    <Box id='inicio'>

      <Box
        flexDirection={{ xs: 'column-reverse', md: 'row' }}
        bgcolor={'#111151'}
        height={{ md: '500px', xs: '500px' }}
        display={'flex'}
        gap={'30px'}
        alignItems={'center'}
        justifyContent={'center'}
        color={'white'}

      >


        <Box
          position={{ xs: 'absolute', md: 'static' }}
          top={'200px'}
          display={'flex'}
          flexDirection={'column'}
          width={{ xs: '80%', md: '35%' }}
          height={'300px'}
          alignItems={'left'}
          justifyContent={{ xs: 'flex-start', md: 'center' }}
          gap={'30px'}
          zIndex={'9'}
        >
          <Typography fontWeight={700} fontSize={{ lg: '30px', md: '25px', xs: '25px', sm: '25px' }}>Edita y compila codigo desde la nube en minutos</Typography>


          <Typography>Esta herramienta es ideal para aquellos que trabajan en proyectos de desarrollo de software, diseño web o cualquier otra tarea que requiera la escritura de código.</Typography>

          <Button href='#lenaguajes' sx={{ width: '250px' }} size='large' variant='contained'>Get started <EastIcon className='icon' /> </Button>
        </Box>
        <Box position={'absolute'} height={'500px'} width={'100%'} sx={{ backgroundImage: 'url(/img/ColoredShapes.svg)' }}>
        </Box>
        <Box height={'400px'} width={'400px'}
          sx={{ backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: 'url(/img/imghero2.webp)' }}></Box>

      </Box>
      <Box bgcolor={'white'} width={'100%'} height={{ xs: '50px', md: '100px' }} sx={{ backgroundImage: 'url(/img/curve.svg)' }}>

      </Box>
    </Box>
  )
}

export default Hero