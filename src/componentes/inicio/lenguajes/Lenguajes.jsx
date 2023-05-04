import { Box, Typography } from "@mui/material"
import generateUniqueId from "generate-unique-id"
const Lenguajes = () => {
  const LENGUAJES =
    [
      {
        id: generateUniqueId(),
        title: 'Python',
        img: '/img/py.png'
      },
      {
        id: generateUniqueId(),
        title: 'JavaScript',
        img: '/img/javascript.png'
      },
      {
        id: generateUniqueId(),
        title: 'Ruby',
        img: '/img/rub.png'
      },
      {
        id: generateUniqueId(),
        title: 'HTML',
        img: '/img/html-5.png'
      },
      {
        id: generateUniqueId(),
        title: 'CSS',
        img: '/img/css.png'
      },
      {
        id: generateUniqueId(),
        title: 'C++',
        img: '/img/c.png'
      }
    ]

  return (
    <Box id={'lenaguajes'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} display={'flex'} height={{ lg: '330px', md: '350px', sm: '420px', xs: '490px' }} bgcolor={'white'}>

      <Box textAlign={'center'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} paddingBottom={'15px'}>
        <Typography color={'#111151'} fontSize={{ lg: '30px', sm: '25px', xs: '25px' }} paddingBottom={'10px'} sx={{ fontWeight: '700' }}>Ofrecemos soporte a diferentes lenguajes</Typography>
        <Typography width={{ lg: '100%', xs: '90%' }} variant="body1" textAlign={'center'} color={'black'}>Empieza a programar con el lenguaje de programacion que mas te guste!</Typography>


      </Box>

      <Box justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} display={'flex'} >

        {LENGUAJES.map(({ id, title, img }) =>
          <Box boxShadow={'5px 5px 15px #fff2'} gap={'10px'} borderRadius={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} m={'10px'} width={'120px'} height={'120px'} key={id}>
            <img src={img}></img>
            <Typography color={'black'} variant="body2">{title}</Typography>


          </Box>)
        }

      </Box>


    </Box>

  )
}

export default Lenguajes