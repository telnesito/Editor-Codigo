import { Box, IconButton, Input, Typography } from "@mui/material"
import { Editor as CodeEditor } from "@monaco-editor/react"
import Loading from "./Loading"
import { ContextCode } from "../../../hooks/context/CodeContext"
import { useContext } from "react"
import { Download, PlayArrow, Save, Upload } from "@mui/icons-material"
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import { exportFile } from "../share/exportFile"

const Editor = () => {

  const { Code, setCode } = useContext(ContextCode)
  let codigo = ''

  const autoCompile = (value) => {
    codigo = value
    // Validar si esta activo el auto compile o no 

    // ... code 
    // Se le asigna al contexto para compilar
    setCode(value)
  }

  const manualCompile = () => {
    setCode(codigo)
  }

  const importFile = async (event) => {
    const archivo = event.target.files[0]
    try {
      let contenido = await archivo.text()
      setCode(contenido)


    } catch (error) {
      console.error('Error al leer el archivo:', error);
    }
  }


  return (
    <Box flexDirection={'column'} width={'50%'} display={'flex'} alignItems={'center'} bgcolor={'#e1e1e1'} justifyContent={'center'} gap={'10px'}>
      <Box
        sx={{ boxShadow: '5px 5px 15px #00000090' }}
        width={'90%'} height={'70%'} bgcolor={'#1E1E1E'} borderRadius={'10px'}>
        <Box

          width={'100%'}
          height={'10%'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={'10px'}
        >
          <img src="/img/iconrb.png"></img>
          <Typography

            fontWeight={700}
            bgcolor={'#1E1E1E'}
            borderRadius={'10px'}
            textAlign={'center'}
            color={'#D16969'}
          >Ruby
          </Typography>
        </Box>
        <CodeEditor
          theme="vs-dark"
          language="ruby"
          height={'85%'}
          width={'100%'}
          onChange={autoCompile}
          loading={<Loading />}
          value={Code}
        />
      </Box>
      <Box
        sx={{ boxShadow: '5px 5px 15px #00000090' }}
        width={'90%'} height={'10%'} bgcolor={'white'} borderRadius={'10px'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >

        <Box display={'flex'} gap={'10px'} height={'60%'}>
          <IconButton size="large" onClick={manualCompile}>
            <PlayArrow color="red" />
          </IconButton>

          <IconButton size="large">
            <DriveFileMoveIcon />
          </IconButton>
          <IconButton size="large">
            <Save />
          </IconButton>

          <IconButton onClick={() => exportFile('codigo', Code)} size="large">
            <Download />
          </IconButton>

          <Input onChange={importFile} sx={{ display: 'none' }} id="upload-file" size="small" type="file"></Input>
          <IconButton size="large">
            <label style={{ position: 'relative', top: '3px' }} htmlFor="upload-file">
              <Upload />
            </label>
          </IconButton>

        </Box>
      </Box>
    </Box>
  )
}

export default Editor

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