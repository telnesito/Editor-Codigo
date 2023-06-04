import { AccountCircle, Download, ExpandMore, Folder, PlayArrow, Save, Upload } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, List, ListItem, Paper, Typography } from "@mui/material"
import { BuildCircle, Logout, SupervisedUserCircle } from '@mui/icons-material'


const Admins = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} bgcolor={'#CCCCCC'} width={'100vw'} height={'100%'}>

      <Paper sx={{ width: '100%', height: '100%', overflowY: 'scroll', backgroundImage: 'url(/img/ColoredShapes.svg)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <Box padding={'20px'} width={'90%'} height={'90%'}>
          <Box gap={'10px'} ml={'20px'} display={'flex'} flexDirection={'column'} pb={'15px'}>
            <Typography width={'100%'} textAlign={'left'} fontWeight={700} variant="h4">Documentacion</Typography>

            <Typography variant="body" fontWeight={'700'}>Manual de administrador</Typography>

            <Accordion expanded sx={{ bgcolor: '#CCCCCC', color: 'white' }}>
              <AccordionSummary expandIcon={<ExpandMore color="action" />}>
                <Typography>Gestion de adminstrador</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>La gestion del administrador cuenta con las siguientes caracteristicas:</Typography>
                <List>
                  <ListItem>
                    <Typography mr={'10px'}>
                      1. Gestion de usuarios (Cambiar email, cambiar clave, eliminar usuario, verificar usuarios)
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography mr={'10px'}>
                      2. Gestion de proyectos de usuarios (Ver los proyectos, descargar los proyectos, eliminar los proyectos)
                    </Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ bgcolor: '#EFD090', color: 'white' }}>
              <AccordionSummary expandIcon={<ExpandMore color="action" />}>
                <Typography>Informacion disponible</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>La informacion que se puede observar de la aplicacion son:</Typography>
                <List>
                  <ListItem>
                    <Typography mr={'10px'}>
                      1. Toda la informacion referente a los usuarios (Email, UID, estado de verificacion)
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography mr={'10px'}>
                      2. Toda la informacion referente a los proyectos (Codigo de proyecto, nombre, ultima modificacion, fecha de creacion, lenguaje utilizado)
                    </Typography>
                  </ListItem>


                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded sx={{ bgcolor: 'purple', color: 'white' }}>
              <AccordionSummary expandIcon={<ExpandMore color="action" />}>
                <Typography>Administrador de usuarios</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Para ir a la zona de administrador de usuarios se debe seguir los siguientes pasos:</Typography>
                <List>
                  <ListItem>
                    <Typography mr={'10px'}>
                      1. Ir al icono de azul dentro de la barra del menu del perfil
                    </Typography>
                    <SupervisedUserCircle color="primary" />
                  </ListItem>
                  <ListItem>
                    <Typography mr={'10px'}>
                      2. Si existen usuarios, se mostraran
                    </Typography>
                  </ListItem>
                </List>

                <Typography>La seccion de administrador de usuarios esta conformado una serie de cajas que contiene la siguiente informacion</Typography>

                <List>
                  <ListItem>Email de usuario</ListItem>
                  <ListItem>UID de usuario</ListItem>
                  <ListItem>Estado de cuenta</ListItem>
                  <ListItem>Accion sobre el usuario</ListItem>
                  <ListItem>Buscador rapido</ListItem>
                </List>

                <Box display={'flex'} flexDirection={'column'} gap={'10PX'}>
                  <Typography>Dentro de las acciones encontramos</Typography>
                  <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                    <Button sx={{ width: '100px' }} variant="contained" color="primary">Proyectos</Button>
                    <Typography>Al hacer click, se abre todos los proyectos del usuario</Typography>
                  </Box>
                  <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                    <Button sx={{ width: '100px' }} variant="outlined" color="error">Eliminar</Button>
                    <Typography>Al hacer click, se elimina permanentemente el usuario con sus proyectos</Typography>
                  </Box>

                  <Typography>Tambien observamos un menu vertical, que se explicara en la siguiente seccion</Typography>
                </Box>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ bgcolor: '#D16969', color: 'white' }}>
              <AccordionSummary expandIcon={<ExpandMore />}>Menu vertical</AccordionSummary>
              <AccordionDetails>
                <Typography>Dentro del menu vertical encontramos 3 funciones importante para la administracion del usuario</Typography>
                <List>
                  <ListItem>
                    <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                      <Typography fontWeight={700} variant="body">Verificar</Typography>
                      <Typography variant="body2">La verificacion es un campo indispensable en cada usuario, si el usuario no se encuentra verificado no podra iniciar sesion:</Typography>
                      <List>
                        <ListItem>1. Si el boton se puede clickear, verificara al usuario</ListItem>
                        <ListItem>2. Si el boton no se puede clickear, el usuario ya esta verificado</ListItem>

                      </List>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                      <Typography fontWeight={700} variant="body">Cambiar email</Typography>
                      <Typography variant="body2">Este campo permitira cambiar el email de cada usuario</Typography>
                    </Box>
                  </ListItem>

                  <ListItem>
                    <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                      <Typography fontWeight={700} variant="body">Cambiar clave</Typography>
                      <Typography variant="body2">Esta campo permitira cambiar la clave de cada usuario</Typography>
                    </Box>
                  </ListItem>

                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded sx={{ bgcolor: '#007ACC', color: 'white' }} >
              <AccordionSummary expandIcon={<ExpandMore />}>Cuenta administrador</AccordionSummary>
              <AccordionDetails>
                <Typography>Solo existe una cuenta administrador, el cual se podra registrar cuando se cree el usuario con el correo electronico administrativo, esta cuenta no se podra eliminar ni modificar sus campos</Typography>
                <Typography mt={'10px'} variant="body2" fontWeight={700}>Datos de administrador:</Typography>
                <List>
                  <ListItem>
                    <Box gap={'10px'} display={'flex'} alignItems={'center'}>
                      <Typography variant="body2">Email: admincode@gmail.com</Typography>
                    </Box>
                  </ListItem>

                  <ListItem>
                    <Box gap={'10px'} display={'flex'} alignItems={'center'}>
                      <Typography variant="body2">Clave: La clave que se asigne al crear la cuenta</Typography>
                    </Box>
                  </ListItem>
                  {/* import {Download, PlayArrow, Save, Upload} from "@mui/icons-material" */}



                </List>
              </AccordionDetails>
            </Accordion>


          </Box>
        </Box>
      </Paper>


    </Box>
  )
}

export default Admins