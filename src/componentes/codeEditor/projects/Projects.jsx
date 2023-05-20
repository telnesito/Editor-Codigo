import { Box, Button, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material"
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import ArticleIcon from '@mui/icons-material/Article';
import LanguageIcon from '@mui/icons-material/Language';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import generateUniqueId from "generate-unique-id";
import useModal from "../../../hooks/state/useModal";
import ModalCreateProjects from "./ModalCreateProjects";
const Projects = () => {
  const date = new Date
  const { isOpen, openModal, closeModal } = useModal()
  const PROYECTOS = [
    {
      nombre: 'Hola mundo',
      fecha: date.getMonth() + '/' + date.getDay() + '/' + date.getFullYear(),
      lenguaje: 'Python',
      id: generateUniqueId()
    },

    {
      nombre: 'Busqueda secuencial',
      fecha: date.getMonth() + '/' + date.getDay() + '/' + date.getFullYear(),
      lenguaje: 'C++',
      id: generateUniqueId()
    },

    {
      nombre: 'Algoritmo de ordanmiento',
      fecha: date.getMonth() + '/' + date.getDay() + '/' + date.getFullYear(),
      lenguaje: 'Java',
      id: generateUniqueId()
    },

    {
      nombre: 'Probando funciones',
      fecha: date.getMonth() + '/' + date.getDay() + '/' + date.getFullYear(),
      lenguaje: 'Ruby',
      id: generateUniqueId()
    },

    {
      nombre: 'Chao mundo',
      fecha: date.getMonth() + '/' + date.getDay() + '/' + date.getFullYear(),
      lenguaje: 'Ruby',
      id: generateUniqueId()
    },
  ]


  return (
    <Box gap={'10px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} height={'100%'} width={'100%'} bgcolor={'#e1e1e1'}>

      <Box width={'100%'} height={'100%'} display={'flex'} flexDirection={'column'}>

        <Paper sx={{ padding: '15px', backgroundImage: 'url(/img/ColoredShapes.svg)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
          <Box zIndex={'9999'} color={'black'} minHeight={'180px'} height={'auto'} width={'100%'} justifyContent={'center'} display={'flex'}>

            <Box justifyContent={'space-around'} display={'flex'} flexDirection={'column'} width={'40%'}>
              <Typography color={'#007ACC'} variant="h4">Administra tus proyectos</Typography>
              <Typography width={'90%'}>En nuestra version alpha, disfruta de la posibilidad de crear hasta 10 proyectos por cuenta!</Typography>
              <Button sx={{ width: '80%', height: '50px' }} onClick={openModal} variant="outlined">Iniciar un nuevo proyecto</Button>
            </Box>

            <Box color={'gray'} alignItems={'center'} width={'60%'} display={'flex'} gap={'30px'}>
              <Box width={'50%'}>
                <Box display={'flex'} alignItems={'center'} height={'35px'} >
                  <BorderColorIcon />
                  <Typography> 10 Proyectos por cuenta</Typography>
                </Box>
                <Box display={'flex'} alignItems={'center'} height={'35px'}>
                  <StorageIcon />
                  <Typography> Almacenamiento en la nube</Typography>
                </Box>
                <Box display={'flex'} alignItems={'center'} height={'35px'}>
                  <ImportExportIcon />
                  <Typography>Exporta o importa proyectos</Typography>
                </Box>
              </Box>
              <Box width={'50%'}>
                <Box display={'flex'} alignItems={'center'} height={'35px'}>
                  <LanguageIcon />
                  <Typography>Mas 5 lengaujes disponibles</Typography>
                </Box>
                <Box display={'flex'} alignItems={'center'} height={'35px'}>
                  <CodeIcon />
                  <Typography>Edicion de codigo</Typography>
                </Box>
                <Box display={'flex'} alignItems={'center'} height={'35px'}>
                  <ArticleIcon />
                  <Typography>Documentacion</Typography>
                </Box>
              </Box>



            </Box>
          </Box>
        </Paper>

        <Paper sx={{ padding: '15px', overflowY: 'scroll', height: '100%', }}>
          <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
            <Typography color={'#007ACC'} variant="h4">Proyectos</Typography>
            <TextField sx={{ width: '20%' }} variant="standard" label={'Busqueda rapida'} type="text"></TextField>
          </Box>


          <Box >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre del proyecto</TableCell>
                  <TableCell>Fecha de creacion</TableCell>

                  <TableCell>Lenguaje</TableCell>
                  <TableCell>Accion</TableCell>

                </TableRow>
              </TableHead>
              <TableBody >
                {PROYECTOS.map(({ id, fecha, nombre, lenguaje }) => <TableRow key={id}>
                  <TableCell>{nombre}</TableCell>
                  <TableCell>{fecha}</TableCell>
                  <TableCell>{lenguaje}</TableCell>
                  <TableCell>
                    <Box display={'flex'} gap={'10px'}>
                      <Button variant="contained" color="success">Abrir</Button>
                      <Button variant="contained" color="error">Eliminar</Button>
                    </Box>


                  </TableCell>


                </TableRow>)}
              </TableBody>
            </Table>
          </Box>


        </Paper>
      </Box>

      {isOpen && <ModalCreateProjects isOpen={isOpen} closeModal={closeModal} />}

    </Box>
  )
}

export default Projects


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