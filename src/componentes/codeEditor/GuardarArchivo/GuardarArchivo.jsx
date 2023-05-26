import { Close } from "@mui/icons-material"
import { Modal, Box, Typography, IconButton, TextField, Button, Alert, AlertTitle } from "@mui/material"
import { useEffect, useState } from "react"
import "aos/dist/aos.css"
import Aos from 'aos'
import { useNavigate } from "react-router-dom"
const GuardarArchivo = ({ isOpen, closeModal, lenguaje }) => {
  const navigate = useNavigate()
  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  const [value, setValue] = useState('')

  const handleGetName = (valor) => {
    setValue(valor)
    console.error(value)
  }

  return (
    <Modal sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} open={isOpen}>
      <Box data-aos="zoom-out-left" flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'10px'} width={'400px'} height={'auto'} minHeight={'380px'} bgcolor={'white'}>

        <Box gap={'10px'} width={'90%'} height={'95%'} flexDirection={'column'} display={'flex'}>
          <Box display={'flex'} height={'50px'} width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography fontWeight={'700'}>Guardar archivo</Typography>
            <IconButton onClick={() => { navigate('/home/doc') }}>
              <Close />
            </IconButton>
          </Box>

          <form onSubmit={() => closeModal()}>
            <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
              <Typography fontWeight={700} variant="body">Ingresar nombre de archivo</Typography>

              <TextField onChange={({ target }) => handleGetName(target.value)} required size="small" sx={{ width: '90%' }} label={'Ingresar nombre de archivo'} variant="standard" />
              <Typography fontWeight={700} variant="body">Lenguaje utilizado</Typography>

              <TextField size="small" sx={{ width: '90%' }} value={lenguaje} variant="standard" disabled />
            </Box>
            <Button sx={{ mt: '10px' }} type="submit" variant="contained" color="secondary">Guardar</Button>
          </form>

          <Alert severity="warning">
            <Typography>Recuerde verficar que los campos sean correctos antes de guardar el archivo</Typography>
          </Alert>

        </Box>


      </Box>

    </Modal >
  )
}

export default GuardarArchivo