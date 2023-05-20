import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import "aos/dist/aos.css"
import Aos from 'aos'

const Manual = () => {
  const navigate = useNavigate()

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <Box
      id={'demo'}
      bgcolor={'#111151'}
      height={{ lg: '600px', md: '750px', sm: '720px', xs: '760px' }}
      sx={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: 'url(/img/ColoredShapes.svg)' }}>


      <Box
        display={'flex'}
        alignItems={'center'}
        flexDirection={{ xs: 'column', md: 'column', lg: 'row' }}
        justifyContent={'center'}
        height={'100%'}
        width={'100%'}
        gap={'20px'}
      >
        <Box display={'flex'} gap={{ md: '10px', lg: '0' }} justifyContent={{ lg: 'space-around', md: 'center' }} flexDirection={'column'} height={{ lg: '360px', md: '320px' }} textAlign={'left'} width={{ lg: '35%', sm: '75%', xs: '90%' }}>
          <Typography data-aos="fade-right" fontWeight={700} fontSize={'30px'}>CODESUE</Typography>
          <Typography data-aos="fade-up" variant="body2">Con nuestro editor de código en línea, podrás programar de manera más eficiente y efectiva en cualquier momento y lugar. Con herramientas profesionales de edición de código, soporte para múltiples lenguajes y un compilador automático para detectar errores. Además, el autocompletado te ahorrará tiempo y evitará errores comunes en la escritura del código. Ya sea que estés trabajando en un proyecto de desarrollo de software, diseño web o cualquier otra tarea que requiera la escritura de código, nuestro editor de código es la herramienta ideal para ti.</Typography>
          <Typography data-aos="fade-up" fontWeight={700} mb={'20px'} mt={'10px'} variant="body2">Pruébalo hoy mismo y descubre cómo puedes mejorar tu productividad y eficiencia en tus proyectos de programación</Typography>
          <Button data-aos="fade-up" sx={{ width: '300px' }} onClick={() => navigate('/demo')} variant="contained">PRUEBA RAPIDA</Button>
        </Box>

        <Box textAlign={'center'} width={{ lg: '40%', xs: '90%', md: '90%', sm: '75%' }} >
          <video width={'100%'} height="350" autoPlay controls >
            <source src="/video/CA-intro_2MB.mp4" type="video/mp4" />
          </video>
        </Box>

      </Box>


    </Box>
  )
}

export default Manual