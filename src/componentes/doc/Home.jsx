import { AccountCircle, ExpandMore, Folder, ListAltOutlined } from "@mui/icons-material"
import { Download, PlayArrow, Save, Upload } from "@mui/icons-material"

import { Accordion, AccordionDetails, AccordionSummary, Box, Button, List, ListItem, Paper, Typography } from "@mui/material"

const Home = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} bgcolor={'#CCCCCC'} width={'100%'} height={'100%'}>

      <Paper sx={{ width: '100%', height: '100%', overflowY: 'scroll', backgroundImage: 'url(/img/ColoredShapes.svg)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <Box padding={'20px'} width={'90%'} height={'90%'}>
          <Box gap={'10px'} ml={'20px'} display={'flex'} flexDirection={'column'} pb={'15px'}>
            <Typography width={'100%'} textAlign={'left'} fontWeight={700} variant="h4">Documentacion</Typography>

            <Typography variant="body" fontWeight={'700'}>Manual de usuario</Typography>

            <Accordion expanded sx={{ bgcolor: '#CCCCCC', color: 'white' }}>
              <AccordionSummary expandIcon={<ExpandMore color="action" />}>
                <Typography>Iniciar un proyecto desde cero</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Para iniciar un proyecto dentro de CodeSue, se debe seguir los siguientes pasos:</Typography>
                <List>
                  <ListItem>
                    <Typography mr={'10px'}>
                      1. Ir al icono de carpeta dentro de la barra de navigacion
                    </Typography>
                    <Folder color="primary" />
                  </ListItem>
                  <ListItem>
                    <Typography mr={'10px'}>
                      2. Dar click en el boton `Iniciar un nuevo proyecto`
                    </Typography>
                    <Button size="small" variant="outlined">Iniciar un nuevo proyecto</Button>
                  </ListItem>

                  <ListItem>
                    <Typography mr={'10px'}>
                      3. Seleccionar un lenguaje de programacion`
                    </Typography>
                    <Box display={'flex'} gap={'5px'}>
                      <img src="/img/iconrb.png"></img>
                      <img src="/img/iconjs.png"></img>
                      <img src="/img/iconhtml.png"></img>
                      <img src="/img/iconcss.png"></img>
                      <img src="/img/iconpy.png"></img>
                      <img src="/img/iconc.png"></img>
                    </Box>
                  </ListItem>

                  <ListItem>
                    <Typography mr={'10px'}>
                      4. Comienza a programar!
                    </Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ bgcolor: '#EFD090', color: 'white' }}>
              <AccordionSummary expandIcon={<ExpandMore color="action" />}>
                <Typography>Iniciar un proyecto guardado</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Para iniciar un proyecto guardado dentro de CodeSue, se debe seguir los siguientes pasos:</Typography>
                <List>
                  <ListItem>
                    <Typography mr={'10px'}>
                      1. Ir al icono de carpeta dentro de la barra de navigacion
                    </Typography>
                    <Folder color="primary" />
                  </ListItem>
                  <ListItem>
                    <Typography mr={'10px'}>
                      2. Bajar hasta la seccion de `Proyectos`
                    </Typography>
                  </ListItem>

                  <ListItem>
                    <Typography mr={'10px'}>
                      3. Seleccionar un proyecto y darle click a `abrir`
                    </Typography>
                    <Button size="small" color="success" variant="contained">abrir</Button>
                  </ListItem>

                  <ListItem>
                    <Typography mr={'10px'}>
                      4. Comienza a programar!
                    </Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded sx={{ bgcolor: 'purple', color: 'white' }}>
              <AccordionSummary expandIcon={<ExpandMore color="action" />}>
                <Typography>Administrador de proyectos</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Para ir a la zona de administrador de proyectos se debe seguir los siguientes pasos:</Typography>
                <List>
                  <ListItem>
                    <Typography mr={'10px'}>
                      1. Ir al icono de carpeta dentro de la barra de navigacion
                    </Typography>
                    <Folder color="primary" />
                  </ListItem>
                  <ListItem>
                    <Typography mr={'10px'}>
                      2. Bajar hasta la seccion de `Proyectos`
                    </Typography>
                  </ListItem>
                </List>

                <Typography>La seccion de administrador de proyectos esta conformado por una tabla que contiene la siguiente informacion</Typography>

                <List>
                  <ListItem>Nombre del proyecto</ListItem>
                  <ListItem>Lenguaje de programacion</ListItem>
                  <ListItem>Fecha de creacion</ListItem>
                  <ListItem>Accion sobre el proyecto</ListItem>
                  <ListItem>Buscador rapido</ListItem>
                </List>

                <Box display={'flex'} flexDirection={'column'} gap={'10PX'}>
                  <Typography>Dentro de las acciones encontramos</Typography>
                  <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                    <Button sx={{ width: '100px' }} variant="contained" color="success">Abrir</Button>
                    <Typography>Al hacer click, se abre el proyecto</Typography>
                  </Box>
                  <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                    <Button sx={{ width: '100px' }} variant="contained" color="error">Eliminar</Button>
                    <Typography>Al hacer click, se elimina permanentemente el proyecto</Typography>

                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ bgcolor: '#D16969', color: 'white' }}>
              <AccordionSummary expandIcon={<ExpandMore />}>Interfaz de Code Sue</AccordionSummary>
              <AccordionDetails>
                <Typography>Nuestra interfaz de edicion de codigo esta dividida en 4 secciones</Typography>
                <List>
                  <ListItem>
                    <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                      <Typography fontWeight={700} variant="body">Editor de codigo</Typography>
                      <Typography variant="body2">La interfaz de editor de codigo esta dirigida a la creacion y edicion del codigo y cuenta con herramientas como:</Typography>
                      <List>
                        <ListItem>1. Cambiar el tamaño de fuente</ListItem>
                        <ListItem>2. Modo oscuro</ListItem>
                        <ListItem>3. Word wrap</ListItem>
                        <ListItem>4. Auto identado</ListItem>
                        <ListItem>5. Colarizado de corchetes y llaves</ListItem>
                        <ListItem>6. Colarizado de sintaxis</ListItem>
                        <ListItem>7. Busqueda rapida</ListItem>
                        <ListItem>8. Auto completado e intellisense</ListItem>
                        <ListItem>9. Identificacion del lenguaje que se esta codificando</ListItem>
                      </List>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                      <Typography fontWeight={700} variant="body">Output</Typography>
                      <Typography variant="body2">Rectangulo negro identificado en la parte superior con <span style={{ color: 'green', fontWeight: '700' }}>Output</span>, muestra la salida en pantalla mediante consola</Typography>
                    </Box>
                  </ListItem>

                  <ListItem>
                    <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                      <Typography fontWeight={700} variant="body">Error</Typography>
                      <Typography variant="body2">Rectangulo negro identificado en la parte superior con <span style={{ color: 'red', fontWeight: '700' }}>Error</span>, muestra informacion a cerca de algun error dentro del codigo</Typography>
                    </Box>
                  </ListItem>


                  <ListItem>
                    <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                      <Typography fontWeight={700} variant="body">Herramientas</Typography>
                      <Typography variant="body2">Rectangulo blanco con diferentes iconos dentro, para saber la funcion de cada uno de los iconos, buscar en la documentacion la seccion de <strong >Herramientas de desarrollo</strong></Typography>
                    </Box>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded sx={{ bgcolor: '#007ACC', color: 'white' }} >
              <AccordionSummary expandIcon={<ExpandMore />}>Herramientas de desarrollo</AccordionSummary>
              <AccordionDetails>
                <Typography>Dentro de la interfaz Code Sue, encontramos las harramientas de desarrollo</Typography>
                <List>
                  <ListItem>
                    <Box gap={'10px'} display={'flex'} alignItems={'center'}>
                      <PlayArrow />
                      <Typography variant="body2">Compilar codigo</Typography>
                    </Box>
                  </ListItem>

                  <ListItem>
                    <Box gap={'10px'} display={'flex'} alignItems={'center'}>
                      <Save />
                      <Typography variant="body2">Guardar codigo</Typography>
                    </Box>
                  </ListItem>
                  {/* import {Download, PlayArrow, Save, Upload} from "@mui/icons-material" */}

                  <ListItem>
                    <Box gap={'10px'} display={'flex'} alignItems={'center'}>
                      <Upload />
                      <Typography variant="body2">Cargar archivo</Typography>
                    </Box>
                  </ListItem>

                  <ListItem>
                    <Box gap={'10px'} display={'flex'} alignItems={'center'}>
                      <Download />
                      <Typography variant="body2">Descargar archivo</Typography>
                    </Box>
                  </ListItem>

                </List>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ bgcolor: '#3FA33F', color: 'white' }} >
              <AccordionSummary expandIcon={<ExpandMore />}>Perfil de usuario</AccordionSummary>
              <AccordionDetails>
                <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                  <Typography>El perfil de usuario lo encontramos dentro de la barra de navegacion con el icono </Typography>
                  <AccountCircle />
                </Box>
                <List>
                  <ListItem>
                    <Box display={'flex'} flexDirection={'column'}>
                      <Typography fontWeight={700} variant="body">Nombre de usuario</Typography>
                      <Typography variant="body2">Muestra el nombre de usuario asociado a la cuenta</Typography>
                    </Box>
                  </ListItem>

                  <ListItem>
                    <Box display={'flex'} flexDirection={'column'}>
                      <Typography fontWeight={700} variant="body">Correo electronico</Typography>
                      <Typography variant="body2">Muestra el correo electronico asociado a la cuenta</Typography>
                    </Box>
                  </ListItem>

                  <ListItem>
                    <Box>
                      <Typography fontWeight={700} variant="body">Seccion para cambiar la contraseña</Typography>
                      <Typography variant="body2">Ofrece dos inputs, el primero recibe la contraseña nueva y el otro es para confirmar la contraseña</Typography>
                    </Box>

                  </ListItem>

                  <ListItem>
                    <Box>
                      <Typography fontWeight={700} variant="body">Eliminar cuenta</Typography>
                      <Typography variant="body2">Eliminar la cuenta permanentemente, se borrara toda la informacion asociada como, proyectos, configuraciones, perfil, etc</Typography>
                    </Box>

                  </ListItem>

                  <ListItem>
                    <Box>
                      <Typography fontWeight={700} variant="body">Cerrar sesion</Typography>
                      <Typography variant="body2">Cerrar la session actual</Typography>
                    </Box>

                  </ListItem>

                </List>
              </AccordionDetails>
            </Accordion>

          </Box>
        </Box>
      </Paper>


    </Box>
  )
}

export default Home

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