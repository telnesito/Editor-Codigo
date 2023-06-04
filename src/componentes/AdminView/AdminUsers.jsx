import { Box, Button, Menu, MenuItem, Card, CardActions, CardContent, IconButton, Typography, Divider, TextField, Modal, Paper, Backdrop, CircularProgress } from '@mui/material'
import { auth } from '../../../services/auth'

import { useEffect, useState } from 'react'
import { MoreVert, Verified, Password, Email, Error } from '@mui/icons-material'

import useModal from '../../hooks/state/useModal'
import AdminProjects from './AdminProjects'
import { useNavigate } from 'react-router-dom'
import { admin } from '../../../services/admin'

const AdminUsers = () => {

  const navigate = useNavigate()

  const [usuarios, setUsuarios] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [filterUser, setFilterUser] = useState("")
  const [listUserFiltered, setListUserFiltered] = useState([])
  const { closeModal, openModal, isOpen } = useModal()
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [userToDelete, setUserToDelete] = useState("")
  const [openChangePassowrd, setOpenChangePassowrd] = useState(false)
  const [userToChangePassword, setUserToChangePassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [openChangeEmail, setOpenChangeEmail] = useState(false)
  const [userToChangeEmail, setUserToChangeEmail] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [profileLogged, setProfileLogged] = useState({})

  const [userProjects, setUserProjects] = useState({
    email: '', uid: ''
  })
  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await auth.obtenerUsuarios()
        setUsuarios(response)
      } catch (error) {
        console.error(error)
      }
    }

    obtenerUsuarios()
  }, [])


  const handleFilterUser = (text) => {
    setFilterUser(text)
  }

  useEffect(() => {

    const filtered = usuarios.filter((user) => user.email.toLowerCase().includes(filterUser.toLowerCase()) && user.email !== "admincodesue@gmail.com")

    setListUserFiltered(filtered)


  }, [filterUser, usuarios])


  const [anchorEl, setAnchorEl] = useState({}); // Estado separado para cada elemento del mapeo

  const handleClick = (event, index) => { // Pasar el índice del elemento al hacer clic
    setAnchorEl(prevState => ({
      ...prevState,
      [index]: event.currentTarget // Usar el índice como clave para almacenar la referencia del elemento
    }));
  };

  const handleClose = (index) => { // Pasar el índice del elemento al cerrar
    setAnchorEl(prevState => ({
      ...prevState,
      [index]: null // Restablecer la referencia del elemento al cerrar el menú
    }));
  };

  const handleOpenProjects = (uid, email) => {
    setUserProjects({ email, uid })
    openModal()
  }

  const openConfirmDelete = (uid) => {
    setUserToDelete(uid)
    setConfirmDelete(true)

  }


  const deleteUser = async () => {
    try {
      setIsLoading(true)
      const response = await admin.EliminarUserPorUID({ uid: userToDelete })
      setConfirmDelete(false)
      setListUserFiltered(() => usuarios.filter((user) => user.uid !== userToDelete && user.email !== "admincodesue@gmail.com"))
      setIsLoading(false)
      console.error(response)
    } catch (error) {
      console.error(error)

    }
  }

  const handleVerifUser = async (uid) => {
    try {
      await admin.ActualizarEstadoPorId({ uid })
      window.location.reload()

    } catch (error) {
      console.error(error)
    }
  }

  const handleOpenChangePassword = async (uid) => {
    setOpenChangePassowrd(true)
    setUserToChangePassword(uid)
  }

  const handleOpenChangeEmail = async (uid) => {
    setOpenChangeEmail(true)
    setUserToChangeEmail(uid)
  }

  const handleSendNewPassword = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      console.info(userToChangePassword, newPassword)
      await admin.ActualizarPasswordPorId({ uid: userToChangePassword, newPassword })
      setIsLoading(false)

      setOpenChangePassowrd(false)
    } catch (error) {
      console.error(error)
    }
  }


  const handleSendNewEmail = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      await admin.ActualizarEmailPorId({ uid: userToChangeEmail, newEmail })
      setIsLoading(false)

      window.location.reload()

      setOpenChangeEmail(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      height={'auto'}
      alignItems={'center'}
      justifyContent={'center'}
      marginTop={'24px'}
    >

      <Box width={'95%'}>
        <Typography variant='h5' textAlign={'left'} fontWeight={700}>Usuarios registrados</Typography>

        <TextField value={filterUser} onChange={({ target }) => handleFilterUser(target.value)} sx={{ width: '300px' }} type='text' placeholder='Ingrese un email para filtrar' label='Busqueda rapida' variant='standard'></TextField>
      </Box>
      <Box
        display={'flex'}
        flexDirection={'row '}
        width={'100%'}
        height={'auto'}
        flexWrap={'wrap'}
        gap={'25px'}
        alignItems={'center'}
        justifyContent={'center'}
        marginTop={'24px'}
      >

        {listUserFiltered.length === 0 ? <Typography width={'95%'}>No hay usuarios que mostrar</Typography> : listUserFiltered.map((user, index) =>
          <Card
            elevation={3}
            sx={{ width: '30%', minWidth: '300px' }}
            key={index}
          >
            <CardContent
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Box
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'left'}
                display={'flex'}
                height={'125px'}
                gap={'3px'}
                width={'100%'}
              >
                <Menu
                  sx={{
                    mt: '10px'
                  }}
                  anchorEl={anchorEl[index]} // Usar la referencia almacenada para cada elemento
                  open={Boolean(anchorEl[index])} // Comprobar si la referencia existe
                  onClose={() => handleClose(index)} // Pasar el índice al cerrar el menú
                >
                  <MenuItem onClick={() => handleVerifUser(user.uid)} disabled={user.state}>
                    <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                      <Verified color='primary' fontSize='small' />
                      <Typography variant='body2'>
                        Verificar
                      </Typography>
                    </Box>
                  </MenuItem>
                  <Divider />

                  <MenuItem onClick={() => handleOpenChangePassword(user.uid)} >
                    <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                      <Password color='primary' fontSize='small' />
                      <Typography variant='body2'>
                        Cambiar clave
                      </Typography>
                    </Box>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={() => handleOpenChangeEmail(user.uid)}>
                    <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                      <Email color='primary' fontSize='small' />
                      <Typography variant='body2'>
                        Cambiar email
                      </Typography>
                    </Box>
                  </MenuItem>
                </Menu>
                <Typography fontWeight={'700'} variant='body'>Email</Typography>
                <Typography variant='body2'>{user.email}</Typography>
                <Typography fontWeight={'700'} variant='body'>UID</Typography>
                <Typography variant='body2'>{user.uid}</Typography>
                <Typography variant='body' fontWeight={700}>Estado</Typography>
                {user.state ?
                  <Box display={'flex'} gap={'5px'} alignItems={'center'}>

                    <Typography variant='body2'>Verificado</Typography>
                    <Verified fontSize='small' color='success' />
                  </Box>

                  :
                  <Box display={'flex'} gap={'5px'} alignItems={'center'}>
                    <Typography>No verificado</Typography>
                    <Error fontSize='small' color='error'></Error>
                  </Box>
                }

              </Box>

            </CardContent>
            <CardActions>
              <Box
                flexDirection={'row'}
                justifyContent={'left'}
                alignItems={'left'}
                display={'flex'}
                width={'100%'}
                gap={'5px'}
              >
                <Button onClick={() => handleOpenProjects(user.uid, user.email)} variant='contained' size='small' color='primary'>Proyectos</Button>
                <Button variant='outlined' onClick={() => openConfirmDelete(user.uid)} size='small' color='error'>Eliminar</Button>

                <IconButton onClick={(event) => handleClick(event, index)}> {/* Pasar el índice al hacer clic */}
                  <MoreVert />
                </IconButton>
              </Box>
            </CardActions>
          </Card>
        )}
      </Box>

      {isOpen && <AdminProjects closeModal={closeModal} isOpen={isOpen} user={userProjects} />}
      <Modal
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        open={confirmDelete} onClose={() => setConfirmDelete(false)}>
        <Paper
          sx={{
            width: '400px',
            height: '180px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          <Typography>Estas seguro que desea eliminar este proyecto?</Typography>
          <Box display={'flex'} gap={'10px'}>
            <Button variant='contained' onClick={() => setConfirmDelete(false)} color='success'>Mantener</Button>
            <Button variant='contained' onClick={() => deleteUser()} color='error'>Eliminar</Button>
          </Box>
          <Backdrop open={isLoading}>
            <CircularProgress>

            </CircularProgress>
          </Backdrop>
        </Paper>
      </Modal>

      <Modal
        onClose={() => setOpenChangePassowrd(false)}
        open={openChangePassowrd}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Paper
          sx={{
            width: '400px',
            height: '140px',
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '10px',

          }}
        >
          <Typography width={'90%'} variant='body1' fontWeight={700}>Cambiar contraseña</Typography>
          <form style={{
            display: 'flex',
            gap: '15px',
            flexDirection: 'column',

          }}
            onSubmit={(e) => handleSendNewPassword(e)}
          >
            <TextField onChange={({ target }) => setNewPassword(target.value)} placeholder='Escriba nueva clave' variant='standard' type='password' required label={'Cambiar clave'}></TextField>
            <Button type='submit' variant='contained' color='primary' >Cambiar clave</Button>
          </form>
          <Backdrop open={isLoading}>
            <CircularProgress>

            </CircularProgress>
          </Backdrop>
        </Paper>
      </Modal>


      <Modal
        onClose={() => setOpenChangeEmail(false)}
        open={openChangeEmail}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Paper
          sx={{
            width: '400px',
            height: '140px',
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '10px',

          }}
        >
          <Typography width={'90%'} variant='body1' fontWeight={700}>Cambiar correo electronico</Typography>
          <form style={{
            display: 'flex',
            gap: '15px',
            flexDirection: 'column',

          }}
            onSubmit={(e) => handleSendNewEmail(e)}
          >
            <TextField onChange={({ target }) => setNewEmail(target.value)} placeholder='Escriba nuevo correo' variant='standard' type='email' required label={'Cambiar email'}></TextField>
            <Button type='submit' variant='contained' color='primary' >Cambiar correo electronico</Button>
          </form>
          <Backdrop open={isLoading}>
            <CircularProgress>

            </CircularProgress>
          </Backdrop>
        </Paper>
      </Modal>
    </Box>
  )
}

export default AdminUsers
