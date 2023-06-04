import { Box, Button, Modal, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { admin } from '../../../services/admin'
import { useEffect, useState } from 'react'
import { exportFile } from '../codeEditor/share/exportFile'

const AdminProjects = ({ closeModal, isOpen, user }) => {

  const [userProjects, setUserProjects] = useState([])

  useEffect(() => {


    const cargarProyectos = async () => {
      try {
        const response = await admin.ObtenerProyectosPorUID({
          uid: user.uid
        })
        setUserProjects(response)
      } catch (error) {
        console.error(error)
      }
    }

    cargarProyectos()

  }, [user.uid])





  return (
    <Modal
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      open={isOpen} onClose={closeModal}>

      <Paper

        sx={{
          width: '80%',
          height: '80%',
          bgcolor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflowY: 'scroll'
        }}
      >
        <Box width={'95%'} height={'95%'} display={'flex'} flexDirection={'column'}>
          <Box display={'flex'} gap={'5px'}>
            <Typography variant='body'>Proyectos de</Typography>
            <Typography variant='body' fontWeight={700}>{user.email}</Typography>
          </Box>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre del proyecto</TableCell>
                <TableCell>Lenguaje</TableCell>
                <TableCell>Fecha de creacion</TableCell>
                <TableCell>Ultima modificacion</TableCell>
                <TableCell>Accion</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userProjects.length === 0 ?
                <TableRow>
                  <TableCell>No hay proyecto que mostrar</TableCell>
                  <TableCell>n/a</TableCell>

                  <TableCell>n/a</TableCell>
                  <TableCell>n/a</TableCell>
                  <TableCell>
                    n/a
                  </TableCell>

                </TableRow>
                : userProjects.map(({ nombre, lenguaje, fecha, ultimoCambio, contenido }, index) =>

                  <TableRow key={index}>
                    <TableCell>{nombre}</TableCell>
                    <TableCell>{lenguaje}</TableCell>

                    <TableCell>{fecha}</TableCell>
                    <TableCell>{ultimoCambio}</TableCell>
                    <TableCell>
                      <Box display={'flex'} gap={'10px'}>

                        <Button onClick={() => exportFile(nombre, contenido, "txt")} variant='contained' color='success'>Descargar</Button>
                        <Button variant='outlined' color='error'>Eliminar</Button>

                      </Box>
                    </TableCell>

                  </TableRow>
                )
              }
            </TableBody>
          </Table>



        </Box>

      </Paper>
    </Modal>
  )
}

export default AdminProjects