import { Box, Button, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material"
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import ArticleIcon from '@mui/icons-material/Article';
import LanguageIcon from '@mui/icons-material/Language';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import useModal from "../../../hooks/state/useModal";
import ModalCreateProjects from "./ModalCreateProjects";
import { projects } from "../../../../services/projects";
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { ContextCode } from "../../../hooks/context/CodeContext";
import { ContextIdProject } from "../../../hooks/context/IdProjectContext";


const Projects = () => {

  const [listProjects, setListProjects] = useState([]);
  const navigate = useNavigate()
  const { Code, setCode } = useContext(ContextCode)
  const { idProject, setIdProject } = useContext(ContextIdProject)

  useEffect(() => {
    const traerProyectos = async () => {
      try {
        const response = await projects.getProjects();
        setListProjects(response);
      } catch (error) {
        console.error(error);
      }
    };

    traerProyectos();
  }, []);

  useEffect(() => {
    console.log(listProjects);
  }, [listProjects]);


  const { isOpen, openModal, closeModal } = useModal()

  const handleOpenProject = (to, code, id) => {
    setCode(code)
    setIdProject(id)
    navigate(`/home/${to.toLowerCase()}`)

  }

  const handleDeleteProject = async (idProject) => {

    try {
      const response = await projects.deleteProject({ idProject })
      setListProjects(() => listProjects.filter((project) => project.id !== idProject))
      console.error(response)
    } catch (error) {
      console.error(error)

    }

  }
  return (
    <Box gap={'10px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} height={'100%'} width={'100%'} bgcolor={'#e1e1e1'}>

      <Box width={'100%'} height={'100%'} display={'flex'} flexDirection={'column'}>

        <Paper sx={{ padding: '15px', backgroundImage: 'url(/img/ColoredShapes.svg)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
          <Box zIndex={'9999'} color={'black'} minHeight={'180px'} height={'auto'} width={'100%'} justifyContent={'center'} display={'flex'}>

            <Box justifyContent={'space-around'} display={'flex'} flexDirection={'column'} width={'40%'}>
              <Typography color={'#007ACC'} variant="h4">Administra tus proyectos</Typography>
              <Typography width={'90%'}>En nuestra version alpha, disfruta de la posibilidad de crear hasta 10 proyectos por cuenta!</Typography>
              <Button sx={{ width: '80%', height: '50px' }} onClick={openModal} variant="contained">Iniciar un nuevo proyecto</Button>
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
          </Box>


          <Box >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre del proyecto</TableCell>
                  <TableCell>Lenguaje</TableCell>
                  <TableCell>Fecha de creacion</TableCell>
                  <TableCell>Ultimo cambio</TableCell>


                  <TableCell>Accion</TableCell>

                </TableRow>
              </TableHead>
              <TableBody >
                {listProjects.length > 0 ? listProjects.map(({ fecha, nombre, lenguaje, contenido, ultimoCambio, id }, index) => <TableRow key={index}>
                  <TableCell>{nombre}</TableCell>
                  <TableCell>{lenguaje}</TableCell>
                  <TableCell>{fecha}</TableCell>
                  <TableCell>{ultimoCambio}</TableCell>

                  <TableCell>
                    <Box display={'flex'} gap={'10px'}>
                      <Button variant="contained" onClick={() => handleOpenProject(lenguaje, contenido, id)} color="success">Abrir</Button>
                      <Button variant="contained" onClick={() => handleDeleteProject(id)} color="error">Eliminar</Button>
                    </Box>


                  </TableCell>


                </TableRow>) : <TableRow>
                  <TableCell>No tienes proyectos creados todavia</TableCell>
                  <TableCell>n/a</TableCell>
                  <TableCell>n/a</TableCell>
                  <TableCell>n/a</TableCell>
                  <TableCell>n/a</TableCell>

                </TableRow>}
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