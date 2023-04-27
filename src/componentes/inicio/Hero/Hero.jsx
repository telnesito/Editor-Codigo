import { Button, Typography, Box } from '@mui/material'
import './Hero.css'
const Hero = () => {
  return (
    <Box component={'div'} id='inicio' className='c-hero-principal'>
      <Box width={'420px'} height={'370px'} sx={{ backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: 'url(src/assets/img/imgHero.png)' }}></Box>
      <div className='c-hero-bg-lineas'>
        <div className='c-hero-info'>
          <Typography variant='h7'>CodeSue editor de codigo</Typography>
          <Typography fontWeight={700} variant='h4' >Cloud Code Editor</Typography>
          <Typography fontWeight={100} marginBottom='10px' fontSize='13px' marginTop={'20px'} >CodeSue es un editor e interpretador de codigo en la nube que permite la construccion de algoritmos en multiples lenguajes, la interpretacion y salida en pantalla del codigo, manejo de errores y una gran cantidad de herramientas para codificar</Typography>
        </div>

        <div className='c-h-buttons'>
          <Button sx={{ height: '38px', fontWeight: '700', fontSize: '11px', width: '200px', color: 'white', borderColor: 'white' }} variant='outlined'>Prueba como Visitante</Button>
          <Button sx={{ height: '40px', fontWeight: '700', fontSize: '10px', width: '150px', backgroundColor: '#0d1b2a', padding: '8px' }} variant='contained'>Registrate</Button>
        </div>
      </div>

    </Box >
  )
}

export default Hero