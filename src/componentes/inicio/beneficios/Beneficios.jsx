import { Typography, Button, Box } from '@mui/material'
import './Beneficios.css'
import generateUniqueId from 'generate-unique-id'
const Beneficios = () => {

  const BENEFICIOS =
    [
      {
        title: 'DESARROLLO',
        descripcion: 'Interfaz grafica y experiencia de usuario a la medida del desarrollador para la construccion de codigo',
        img: '/img/Page-1.png',
        id: generateUniqueId()
      },
      {
        title: 'AUTO-COMPLETADO',
        descripcion: 'Auto-completado en todos nuestros editores para mejorar la eficiencia en el momento de desarrollar algoritmos',
        img: '/img/autocompletado.png',
        id: generateUniqueId()
      },
      {
        title: 'CODE FORMATTING',
        descripcion: 'Formateado de codigo para todos los lenguajes en cualquier momento del desarrollo de algoritmos',
        img: '/img/codeformating.png',
        id: generateUniqueId()
      },
      {
        title: 'NAVEGACION',
        descripcion: 'Encuentra referencias dentro del editor del codigo, paleta de comandos, buscar, seleccionar, copiar y pegar y mas herramientas para navegar facilmente por el codigo',
        img: '/img/navigate.png',
        id: generateUniqueId()
      },
      {
        title: 'MULTI-LENGUAJES',
        descripcion: 'Dentro de CodeSue podras codificar dentro de los diferentes lenguajes soportados como Ruby, Python o JavaScript',
        img: '/img/Page-1.png',
        id: generateUniqueId()
      },
    ]



  return (
    <div id='beneficios' className='c-beneficios-principal'>
      <div className='c-beneficios-title'>
        <Typography fontSize={'20px'} fontWeight={700} sx={{ position: 'relative', top: '7px', color: '#82BC7D' }}>¿POR QUE CODESUE?</Typography>
        <Typography fontSize={'30px'} fontWeight={700}>Beneficios de CodeSue</Typography>
      </div>
      <Button sx={{ fontWeight: '700', backgroundColor: '#82BC7D' }} size='large' variant='contained'>Prueba ahora</Button>

      <Box width={'90%'}>
        {BENEFICIOS.map(({ title, descripcion, img, id }) =>
          <Box marginTop={'10px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} key={id}>

            <Box width={'80px'} height={'80px'} sx={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></Box>

            <Typography paddingBottom={'10px'} fontSize={'20px'} color={'#E7EA73'} fontWeight={700}>{title}</Typography>
            <Typography textAlign={'center'}>{descripcion}</Typography>

          </Box>

        )}

      </Box>


    </div>
  )
}

export default Beneficios