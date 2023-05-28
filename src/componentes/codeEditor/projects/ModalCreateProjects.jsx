import { Close } from '@mui/icons-material'
import { Modal, Box, Paper, Typography, Card, CardContent, IconButton, TextField, Alert } from '@mui/material'
import generateUniqueId from 'generate-unique-id'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ContextCode } from '../../../hooks/context/CodeContext'
import { useEffect, useState } from "react"
import "aos/dist/aos.css"
import Aos from 'aos'
import { projects } from '../../../../services/projects'
const ModalCreateProjects = ({ isOpen, closeModal }) => {

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])


  const navigate = useNavigate()
  const { Code, setCode } = useContext(ContextCode)
  const [value, setValue] = useState('')

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
        img: '/img/javascript.png',

      },
      {
        id: generateUniqueId(),
        title: 'Ruby',
        img: '/img/rub.png',
      },
      {
        id: generateUniqueId(),
        title: 'Web',
        img: '/img/html-5.png',
      },
      {
        id: generateUniqueId(),
        title: 'Web',
        img: '/img/css.png'
      },
      {
        id: generateUniqueId(),
        title: 'C++',
        img: '/img/c.png'
      }
    ]

  const handleGetName = (valor) => {
    setValue(valor)
  }

  // {
  //   "nombre": "Hola proyecto",
  //   "contenido": "",
  //   "lenguaje": "Javascript",
  //   "fecha": "ayer"
  // }



  const handleCrearProyecto = async (e, to) => {

    const currentDate = new Date()



    e.preventDefault()
    try {
      // ...crear proyecto
      // If todo bien... se crea y navega al editor
      if (value) {

        const response = await projects.createProjects({
          nombre: value,
          contenido: '',
          lenguaje: to,
          fecha: `${currentDate.toLocaleDateString()}`,
          ultimoCambio: `${currentDate.toLocaleDateString()}`
        })
        console.error(response)
        navigate(`/home/${to.toLowerCase()}`)
        setCode('')
      }

    } catch (error) {
      console.error(error)
    }

  }

  return (
    <Modal sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} open={isOpen} onClose={closeModal}>
      <Paper data-aos="fade-up-left" sx={{ width: '80%', height: '76%', overflowY: 'scroll', overflowX: 'hidden', paddingBottom: '30px' }}>

        <Box alignItems={'center'} display={'flex'} justifyContent={'center'} width={'100%'}>
          <Typography fontWeight={700} fontSize={'18px'} textAlign={'left'} width={'85%'}>Configura el proyecto</Typography>
          <IconButton onClick={closeModal} size='large'>
            <Close />
          </IconButton>
        </Box>

        <form>
          <Box display={'flex'} flexDirection={'column'} alignContent={'center'} width={'100%'} justifyContent={'center'} gap={'10px'} >
            <Box width={'90%'} alignSelf={'center'} display={'flex'} flexDirection={'column'} gap={'10px'}>
              <Box display={'flex'} width={'100%'} flexDirection={'column'}>

                <TextField onChange={({ target }) => handleGetName(target.value)} required size="small" sx={{ width: '50%' }} label={'Ingresar nombre de archivo'} variant="standard" />

              </Box>
              <Alert severity="warning">
                <Typography>Recuerde verficar que los campos sean correctos antes de crear el archivo</Typography>
              </Alert>
              <Alert severity="success">
                <Typography>Ingresa nombre del archivo y selecciona un lenguaje para crear el archivo</Typography>
              </Alert>
            </Box>


            <Box display={'flex'} justifyContent={'center'} gap={'20px'} width={'85%'} alignSelf={'center'} flexWrap={'wrap'}>
              {
                LENGUAJES.map(({ id, img, title }) => <Card component={'button'} onClick={(e) => handleCrearProyecto(e, title)} type='submit'
                  sx={{
                    width: '250px',
                    border: '0',
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
          </Box>
        </form>



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