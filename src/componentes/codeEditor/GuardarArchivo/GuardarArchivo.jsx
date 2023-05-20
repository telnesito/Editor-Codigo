import { Close } from "@mui/icons-material"
import { Modal, Box, Typography, IconButton, TextField, Button, Alert, AlertTitle } from "@mui/material"
import { useEffect } from "react"
import "aos/dist/aos.css"
import Aos from 'aos'
const GuardarArchivo = ({ isOpen, closeModal, lenguaje }) => {

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <Modal sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClose={closeModal} open={isOpen}>
      <Box data-aos="zoom-out-left" flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'10px'} width={'400px'} height={'auto'} minHeight={'380px'} bgcolor={'white'}>

        <Box gap={'10px'} width={'90%'} height={'95%'} flexDirection={'column'} display={'flex'}>
          <Box display={'flex'} height={'50px'} width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography fontWeight={'700'}>Guardar archivo</Typography>
            <IconButton onClick={closeModal}>
              <Close />
            </IconButton>
          </Box>

          <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
            <Typography fontWeight={700} variant="body">Ingresar nombre de archivo</Typography>

            <TextField size="small" sx={{ width: '90%' }} label={'Ingresar nombre de archivo'} variant="standard" />
            <Typography fontWeight={700} variant="body">Lenguaje utilizado</Typography>

            <TextField size="small" sx={{ width: '90%' }} value={lenguaje} variant="standard" disabled />
          </Box>
          <Button variant="contained" color="secondary">Guardar</Button>

          <Alert severity="warning">
            <Typography>Recuerde verficar que los campos sean correctos antes de guardar el archivo</Typography>
          </Alert>

        </Box>


      </Box>

    </Modal >
  )
}

export default GuardarArchivo