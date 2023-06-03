import { Box, Modal, Button, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography, Backdrop, CircularProgress, Alert, IconButton, Snackbar } from "@mui/material"
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
import Aos from "aos";

const Projects = () => {

  const [listProjects, setListProjects] = useState([]);
  const navigate = useNavigate()
  const { Code, setCode } = useContext(ContextCode)
  const { idProject, setIdProject } = useContext(ContextIdProject)
  const [loading, setLoading] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)
  const [deleteInfo, setDeleteInfo] = useState("")
  const [confirmDelete, setConfirmDelete] = useState("")
  const [infoConfirmDelete, setInfoConfirmDelete] = useState(false)
  const [projectToDelete, setProjectToDelete] = useState({
    id: '', name: ''
  })

  setIdProject('')

  useEffect(() => {
    Aos.init({ duration: 500 })
    const traerProyectos = async () => {
      try {
        setLoading(true)
        const response = await projects.getProjects();
        setListProjects(response);
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    };

    traerProyectos();
  }, []);

  const { isOpen, openModal, closeModal } = useModal()

  const handleOpenProject = (to, code, id) => {
    setCode(code)
    setIdProject(id)
    navigate(`/home/${to.toLowerCase()}`)

  }

  const handleDeleteProject = (idToDelete, name) => {
    setDeleteInfo("")
    setConfirmDelete("")
    setProjectToDelete({ id: idToDelete, name })
    setModalDelete(true)
  }

  const handleConfirmDelete = async (e) => {
    e.preventDefault()
    try {

      if (confirmDelete === projectToDelete.name) {

        setLoading(true)
        const response = await projects.deleteProject({ "idProject": projectToDelete.id })
        setListProjects(() => listProjects.filter((project) => project.id !== projectToDelete.id))
        console.error(response)
        console.error(projectToDelete)
        setLoading(false)
        setModalDelete(false)
        setInfoConfirmDelete(true)
      } else {
        setDeleteInfo("No coincide con el nombre del proyecto")
      }

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
                      <Button variant="contained" onClick={() => handleDeleteProject(id, nombre)} color="error">Eliminar</Button>
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


      <Modal
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}

        open={modalDelete} onClose={() => setModalDelete(false)}>
        <Paper
          data-aos="fade-up-left"
          elevation={4}
          sx={{
            height: 'auto',
            paddingTop: '10px',
            paddingBottom: '10px',
            width: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Backdrop open={loading}>
            <CircularProgress></CircularProgress>
          </Backdrop>
          <Box
            width={'90%'}
            display={'flex'}
            flexDirection={'column'}
            gap={'5px'}
          >

            <Alert severity="warning">
              Estas seguro que desea eliminar el proyecto <Typography component={'span'} fontWeight={700}>{projectToDelete.name}</Typography> ?
            </Alert>

            <Alert severity="info">
              Para eliminar el proyecto, escribe el nombre en el cuadro de abajo para confirmar
            </Alert>

            {deleteInfo !== "" ? <Alert severity="error">{deleteInfo}</Alert> : ""}

            <form onSubmit={handleConfirmDelete}
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <TextField value={confirmDelete} onChange={({ target }) => setConfirmDelete(target.value)} required label={projectToDelete.name} variant="standard" type="text" placeholder={projectToDelete.name}></TextField>
              <Button variant="contained" type="submit" color="error">Eliminar</Button>
            </form>

          </Box>
        </Paper>
      </Modal>


      <Snackbar open={infoConfirmDelete} autoHideDuration={3000} onClose={() => setInfoConfirmDelete(false)}>
        <Alert severity="success">
          Proyecto <Typography fontWeight={700} component={'span'}>{projectToDelete.name}</Typography> eliminado correctamente!
        </Alert>
      </Snackbar>

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