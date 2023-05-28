import { Box, IconButton, Input, Tooltip, Typography } from "@mui/material"
import { Editor as CodeEditor } from "@monaco-editor/react"
import Loading from "./Loading"
import { ContextCode } from "../../../hooks/context/CodeContext"
import { useContext, useEffect } from "react"
import { Download, Help, PlayArrow, Save, Upload } from "@mui/icons-material"
import { exportFile } from "../share/exportFile"
import useModal from "../../../hooks/state/useModal"
import GuardarArchivo from "../GuardarArchivo/GuardarArchivo"
const Editor = ({ lenguaje, icon, format, color, tools, doc }) => {

  const { Code, setCode } = useContext(ContextCode)

  let codigo = ''
  const { closeModal, isOpen, openModal } = useModal()
  useEffect(() => {
    openModal()

  }, [])


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
  const editorOptions = {
    lineNumbers: "on", // Mostrar número de línea
    wordWrap: "on", // Envoltura automática de líneas
  };


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
          <img src={icon}></img>
          <Typography

            fontWeight={700}
            bgcolor={'#1E1E1E'}
            borderRadius={'10px'}
            textAlign={'center'}
            color={color}
          >{lenguaje}
          </Typography>
        </Box>
        <CodeEditor
          theme={'vs-dark'}
          language={lenguaje.toLowerCase()}
          height={'85%'}
          width={'100%'}
          onChange={autoCompile}
          loading={<Loading />}
          value={Code}
          options={editorOptions}

        />
      </Box>
      {tools && <Box
        sx={{ boxShadow: '5px 5px 15px #00000090' }}
        width={'90%'} height={'10%'} bgcolor={'white'} borderRadius={'10px'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >

        <Box display={'flex'} gap={'10px'} height={'60%'}>
          <Tooltip title={'Compilar'}>
            <IconButton size="large" onClick={manualCompile}>
              <PlayArrow color="red" />
            </IconButton>
          </Tooltip>

          <Tooltip title={`Documentacion de ${lenguaje.toLowerCase()}`}>
            <IconButton href={doc} target="_blank" size="large">
              <Help />
            </IconButton>
          </Tooltip>
          <Tooltip title={'Guardar'}>
            <IconButton size="large">
              <Save />
            </IconButton>
          </Tooltip>

          <Tooltip title={'Descargar'}>
            <IconButton onClick={() => exportFile('codigo', Code, format)} size="large">
              <Download />
            </IconButton>
          </Tooltip>

          <Input onChange={importFile} sx={{ display: 'none' }} id="upload-file" size="small" type="file"></Input>
          <Tooltip title={'Importar'}>
            <IconButton size="large">
              <label style={{ position: 'relative', top: '3px' }} htmlFor="upload-file">
                <Upload />
              </label>
            </IconButton>
          </Tooltip>

        </Box>
      </Box>}

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