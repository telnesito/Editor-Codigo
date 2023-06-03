import CheckIcon from '@mui/icons-material/Check';
import { Close } from '@mui/icons-material';
import { Alert, AlertTitle, Backdrop, Box, Button, CircularProgress, IconButton, Modal, Snackbar, TextField, Tooltip, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import "aos/dist/aos.css"
import Aos from 'aos'
import { auth } from "../../../../services/auth"
const PerfilModa = ({ closeModal, isOpen }) => {
  const navigate = useNavigate()

  const [newPassowrd, setNewPassowrd] = useState('')
  const [validValue, setValidValue] = useState('')
  const [confirmUpdate, setConfirmUpdate] = useState(false)
  const [modalState, setModalState] = useState(false)
  const [disableForVisit, setDisableForVisit] = useState(false)
  const [credentials, setCredentials] = useState({
    email: '', uid: '', username: '', emailVerified: ''
  })
  const [loading, setLoading] = useState(false)
  const [InfoChangePassword, setInfoChangePassword] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 500 })

    const cargarPerfil = async () => {
      try {
        setLoading(true)

        const { email, uid, username, emailVerified } = await auth.getProfile()
        setCredentials({
          email, uid, username, emailVerified
        })
        setLoading(false)

        if (!credentials.emailVerified) {
          setDisableForVisit(true)
        } else {
          setDisableForVisit(false)
        }

      } catch (error) {
        console.error(error)
      }
    }

    cargarPerfil()

  }, [credentials.emailVerified])

  const handleLogOut = async () => {
    try {
      setLoading(true)

      const response = await auth.cerrarSesion()
      setLoading(false)

      if (response) {
        navigate('/')
      }

    } catch (error) {
      console.log(error)

    }
  }

  const handleDeleteUser = async () => {
    try {
      setLoading(true)

      const response = await auth.deleteUser()
      setLoading(false)

      if (response) {
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdatePassword = async (e) => {

    e.preventDefault()
    if (newPassowrd === validValue) {

      try {
        setLoading(true)
        const response = await auth.actualizarClave({ newPassowrd })
        console.log(response)
        setLoading(false)
        setConfirmUpdate(true)
        setNewPassowrd('')
        setValidValue('')
      } catch (error) {
        console.log(error)

      }
    } else {
      setInfoChangePassword(true)
    }
  }



  return (
    <Modal
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflowY: 'scroll' }}
      onClose={closeModal} open={isOpen}>
      <Box data-aos="fade-up-left" width={'40%'} paddingBottom={'15px'} paddingTop={'15px'} minWidth={'360px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} borderRadius={'10px'} bgcolor={'white'} height={'auto'}>

        <Box width={'92%'} justifyContent={'center'} height={'auto'} gap={'10px'} display={'flex'} flexDirection={'column'} >
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography variant="h6" fontWeight={'700'} color={'black'}>Perfil</Typography>
            <Tooltip title={'Cerrar modal'}>
              <IconButton onClick={closeModal} size="small">
                <Close />
              </IconButton>
            </Tooltip>
          </Box>

          <Box gap={'5px'} color={'black'} display={'flex'} flexDirection={'column'}>

            <Typography variant="body2">{credentials.username}</Typography>
            <Typography fontWeight={'500'} variant="body">Direccion de correo</Typography>
            <Typography variant="body2">{credentials.email ? credentials.email : "Modo visitante"}</Typography>

            <Typography fontWeight={'500'} variant="body">Estado de cuenta</Typography>
            {credentials.emailVerified ? <Typography variant='body2'>Verficado </Typography> : <Typography variant='body2'>No verificado</Typography>}

          </Box>

          <Box color={'black'} display={'flex'} alignItems={'left'} gap={'10px'} flexDirection={'column'} width={'100%'}>
            <Typography fontWeight={'500'} variant="body">Cambiar contraseña</Typography>

            <form
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
              onSubmit={handleUpdatePassword}>
              <TextField disabled={disableForVisit} required type="password" value={newPassowrd} onChange={({ target }) => setNewPassowrd(target.value)} label={'New passowrd'} variant="standard" />
              <TextField disabled={disableForVisit} required type="password" value={validValue} onChange={({ target }) => setValidValue(target.value)} label={'Confirm new passowrd'} variant="standard" />
              <Button disabled={disableForVisit} variant="contained" type="submit" color="secondary">Set Password</Button>
            </form>
          </Box>

          <Box gap={'5px'} display={'flex'} color={'black'} flexDirection={'column'}>
            <Typography fontWeight={'500'} variant="body">Eliminar cuenta</Typography>
            <Typography variant="body2">Borrar toda la informacion de la cuenta, incluyendo proyectos y cualquier configuracion</Typography>

            <Button onClick={() => {
              setModalState(true)
            }} variant="contained" disabled={disableForVisit} color="error">Borrar cuenta</Button>
          </Box>
          <Box gap={'5px'} display={'flex'} color={'black'} flexDirection={'column'}>
            <Typography fontWeight={'500'} variant="body">Cerrar sesion</Typography>
            <Typography variant="body2">Cerrar la sesion de usuario</Typography>
            <Button onClick={handleLogOut} variant="contained" color="primary">Cerrar sesion</Button>
          </Box>

        </Box>


        <Snackbar onClose={() => setConfirmUpdate(false)} autoHideDuration={6000} open={confirmUpdate}>
          <Alert severity="success">
            <Typography>Clave actualizada correctamente</Typography>
          </Alert>
        </Snackbar>


        {modalState && <Modal sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} open={modalState} onClose={() => setModalState(false)}>
          <Box data-aos="zoom-in" width={'50%'} gap={'10px'} flexDirection={'column'} display={'flex'} alignItems={'center'} justifyContent={'center'} height={'200px'} borderRadius={'10px'} bgcolor={'white'}>
            <Alert sx={{ width: '85%' }} severity="error">
              <AlertTitle>Esta seguro que desea elimiinar la cuenta?</AlertTitle>
              <Typography variant="body">Esta accion no tiene vuelta atras y se perdera todos los registros relacionados a la cuenta</Typography>
            </Alert>
            <Box display={'flex'} gap={'10px'}>
              <Button onClick={handleDeleteUser} variant="contained" color="error">Borrar</Button>
              <Button onClick={() => setModalState(false)} variant="outlined" color="success">Mantener cuenta</Button>
            </Box>

          </Box>
        </Modal>}

        <Snackbar open={InfoChangePassword} onClose={() => setInfoChangePassword(false)}>
          <Alert severity="error">La clave debe ser igual en ambos inputs, verificar e intentar de nuevo</Alert>
        </Snackbar>

        <Backdrop open={loading}>
          <CircularProgress />
        </Backdrop>

      </Box>



    </Modal>
  )
}

export default PerfilModa