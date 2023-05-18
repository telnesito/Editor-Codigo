import { Close } from '@mui/icons-material'
import { Modal, Box, Paper, Typography, Card, CardContent, IconButton } from '@mui/material'
import generateUniqueId from 'generate-unique-id'
import { useNavigate } from 'react-router-dom'
const ModalCreateProjects = ({ isOpen, closeModal }) => {
  const navigate = useNavigate()
  const handleRuby = () => {
    navigate('/home/editor')
  }

  const LENGUAJES =
    [
      {
        id: generateUniqueId(),
        title: 'Python',
        img: '/img/py.png',

      },
      {
        id: generateUniqueId(),
        title: 'JavaScript',
        img: '/img/javascript.png'
      },
      {
        id: generateUniqueId(),
        title: 'Ruby',
        img: '/img/rub.png',
        event: handleRuby
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
    <Modal sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} open={isOpen} onClose={closeModal}>
      <Paper sx={{ width: '850px', height: '420px' }}>
        <Box height={'50px'} alignItems={'center'} display={'flex'} justifyContent={'center'} width={'100%'}>
          <Typography fontWeight={700} width={'85%'}>Selecciona un lenguaje</Typography>
          <IconButton onClick={closeModal} size='large'>
            <Close />
          </IconButton>
        </Box>

        <Box display={'flex'} alignContent={'center'} height={'80%'} width={'100%'} justifyContent={'center'} gap={'10px'} flexWrap={'wrap'}>
          {
            LENGUAJES.map(({ id, img, title, event }) => <Card onClick={event}
              sx={{
                width: '250px',
                '&:hover': {
                  backgroundColor: "#007ACC",
                  cursor: "pointer",
                  color: 'white',
                  transition: 'all .5s'
                }
              }} key={id}>
              <CardContent>
                <Box textAlign={'center'}>
                  <img src={img}></img>
                  <Typography variant='h6'>
                    {title}
                  </Typography>
                  <Typography variant='body2'>CodeSue Editor</Typography>
                </Box>
              </CardContent>
            </Card>)
          }
        </Box>


      </Paper>
    </Modal>
  )
}

export default ModalCreateProjects


// Azul oscuro: #007ACC
// Rojo oscuro: #D16969
// Verde oscuro: #3FA33F
// Amarillo oscuro: #EFD090
// Naranja oscuro: #FFA500
// Morado oscuro: #B33FB3
// Gris oscuro: #1E1E1E
// Gris medio: #4D4D4D
// Gris claro: #CCCCCC
// sx={{ backgroundImage: 'url(/img/ColoredShapes.svg)' }}