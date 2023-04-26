import { Button, Typography } from '@mui/material'
import './Hero.css'
const Hero = () => {
  return (
    <div className='c-hero-principal'>
      <img width='350px' height='170px' src='/src/assets/img/imgHero.png' />
      <div className='c-hero-bg-lineas'>
        <div className='c-hero-info'>
          <Typography variant='h7'>CodeSue editor de codigo</Typography>
          <Typography fontWeight={700} variant='h4' >Cloud Code Editor</Typography>
          <Typography fontWeight='0' marginBottom='10px' fontSize='11px' marginTop={'20px'} >CodeSue es un editor e interpretador de codigo en la nube que permite la construccion de algoritmos en multiples lenguajes, la interpretacion y salida en pantalla del codigo, manejo de errores y una gran cantidad de herramientas para codificar</Typography>
        </div>

        <div className='c-h-buttons'>
          <Button size='medium' sx={{ fontSize: '11px', width: '50%', color: 'white', borderColor: 'white' }} variant='outlined'> Visitante</Button>
          <Button size='large' sx={{ fontSize: '10px', width: '50%', backgroundColor: '#0d1b2a' }} variant='contained'>Registrate</Button>
        </div>
      </div>

    </div >
  )
}

export default Hero