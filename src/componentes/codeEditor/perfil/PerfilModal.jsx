import { Close } from "@mui/icons-material"
import { Box, Button, IconButton, Modal, TextField, Tooltip, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import "aos/dist/aos.css"
import Aos from 'aos'
const PerfilModa = ({ closeModal, isOpen }) => {
  const navigate = useNavigate()
  const handleLogOut = () => {
    navigate('/')
  }

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <Modal
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      onClose={closeModal} open={isOpen}>
      <Box data-aos="fade-up-left" width={'40%'} minWidth={'350px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} borderRadius={'10px'} bgcolor={'white'} height={'620px'}>

        <Box width={'90%'} justifyContent={'center'} height={'95%'} gap={'10px'} display={'flex'} flexDirection={'column'} >
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography variant="h6" fontWeight={'700'} color={'black'}>Perfil</Typography>
            <Tooltip title={'Cerrar modal'}>
              <IconButton onClick={closeModal} size="small">
                <Close />
              </IconButton>
            </Tooltip>
          </Box>

          <Box gap={'5px'} color={'black'} display={'flex'} flexDirection={'column'}>
            <Typography fontWeight={'500'} variant="body">Nombre de usuario</Typography>

            <Typography variant="body2">Telnesito</Typography>
            <Typography fontWeight={'500'} variant="body">Direccion de correo</Typography>
            <Typography variant="boydy2">carlosternera46@gmail.com</Typography>


          </Box>

          <Box color={'black'} display={'flex'} alignItems={'left'} gap={'10px'} flexDirection={'column'} width={'100%'}>
            <Typography fontWeight={'500'} variant="body">Cambiar contraseña</Typography>

            <TextField type="password" label={'New passowrd'} variant="standard" />
            <TextField type="password" label={'Confirm new passowrd'} variant="standard" />
            <Button variant="contained" color="secondary">Set Password</Button>
          </Box>

          <Box gap={'5px'} display={'flex'} color={'black'} flexDirection={'column'}>
            <Typography fontWeight={'500'} variant="body">Eliminar cuenta</Typography>
            <Typography variant="body2">Borrar toda la informacion de la cuenta, incluyendo proyectos y cualquier configuracion</Typography>

            <Button onClick={() => alert('Cuenta borrada')} variant="contained" color="error">Borrar cuenta</Button>
          </Box>
          <Box gap={'5px'} display={'flex'} color={'black'} flexDirection={'column'}>
            <Typography fontWeight={'500'} variant="body">Cerrar sesion</Typography>
            <Typography variant="body2">Cerrar la sesion de usuario</Typography>
            <Button onClick={handleLogOut} variant="contained" color="primary">Cerrar sesion</Button>
          </Box>

        </Box>


      </Box>

    </Modal>
  )
}

export default PerfilModa