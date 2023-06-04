import { Box, Button, Modal, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'

const AdminProjects = ({ closeModal, isOpen, user }) => {

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
              <TableRow>
                <TableCell>Proyecto 1</TableCell>
                <TableCell>Proyecto 1</TableCell>

                <TableCell>Proyecto 1</TableCell>
                <TableCell>Proyecto 1</TableCell>
                <TableCell>
                  <Box display={'flex'} gap={'10px'}>
                    <Button variant='contained' color='success'>Descargar</Button>
                    <Button variant='outlined' color='error'>Eliminar</Button>

                  </Box>
                </TableCell>

              </TableRow>
            </TableBody>
          </Table>



        </Box>

      </Paper>
    </Modal>
  )
}

export default AdminProjects