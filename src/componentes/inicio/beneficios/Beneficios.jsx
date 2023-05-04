import { Typography, Box } from '@mui/material'
import './Beneficios.css'
import generateUniqueId from 'generate-unique-id'
const Beneficios = () => {

  const BENEFICIOS =
    [
      {
        title: 'DESARROLLO',
        descripcion: 'Interfaz grafica y experiencia de usuario a la medida del desarrollador para la construccion de codigo',
        img: '/img/development.png',
        id: generateUniqueId()
      },
      {
        title: 'CODE FORMATTING',
        descripcion: 'Formateado de codigo para todos los lenguajes en cualquier momento del desarrollo de algoritmos',
        img: '/img/codeFormatting.png',
        id: generateUniqueId()
      },
      {
        title: 'AUTO-COMPLETADO',
        descripcion: 'Auto-completado en todos nuestros editores para mejorar la eficiencia en el momento de desarrollar algoritmos',
        img: '/img/docker.png',
        id: generateUniqueId()
      },
      {
        title: 'NAVEGACION',
        descripcion: 'Encuentra referencias dentro del editor del codigo, paleta de comandos, buscar y mas herramientas para navegar por el codigo',
        img: '/img/navigate.png',
        id: generateUniqueId()
      },
      {
        title: 'MULTI-LENGUAJES',
        descripcion: 'Dentro de CodeSue podras codificar dentro de los diferentes lenguajes soportados como Ruby, Python o JavaScript',
        img: '/img/refactor.png',
        id: generateUniqueId()
      },
      {
        title: 'PERFIL PERSONALIZADA',
        descripcion: 'Dentro de CodeSue podras crearte tu perfil propio y gestionar tus proyectos de manera facil y sencilla',
        img: '/img/avatar.png',
        id: generateUniqueId()
      },
    ]



  return (
    <div id='beneficios' className='c-beneficios-principal'>
      <div className='c-beneficios-title'>
        <Typography color={'#111151'} fontSize={'30px'} fontWeight={700}>Prefessional Services</Typography>
        <Typography textAlign={'center'} width={{ lg: '65%', md: '80%' }} >Nuestra aplicación de editor de código en línea te ofrece múltiples beneficios, como soporte para múltiples lenguajes, herramientas profesionales para la escritura y edición de código, compilador automático para detectar errores y problemas, autocompletado para ahorrar tiempo y evitar errores comunes. Pruébala hoy mismo y descubre la diferencia en tu trabajo.</Typography>
      </div>


      <Box
        display={'flex'}
        width={'90%'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={'20px'}

      >
        {BENEFICIOS.map(({ title, descripcion, img, id }) =>
          <Box width={{ lg: '400px', md: '340px', sm: '340px', xs: '400px' }} marginTop={'10px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} key={id}>

            <Box width={'60px'} height={'70px'} sx={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></Box>

            <Box width={'300px'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'20px'}>
              <Typography paddingBottom={'10px'} fontSize={'15px'} color={'black'} fontWeight={700}>{title}</Typography>
              <Typography fontSize={'14px'} textAlign={'center'}>{descripcion}</Typography>
            </Box>

          </Box>

        )}

      </Box>


    </div>
  )
}

export default Beneficios