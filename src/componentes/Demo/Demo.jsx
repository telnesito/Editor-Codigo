import { Alert, AlertTitle, Box, Typography } from "@mui/material"
import Header from "../inicio/header/Header"
import Footer from "../inicio/footer/Footer"
import { useState, useRef, useEffect } from "react"
import { Editor as CodeEditor } from "@monaco-editor/react"
import Loading from "../codeEditor/code/Loading"
import ScrollToTop from "../../functions/ScrollToTop"
const Demo = () => {
  const refOutput = useRef()
  const refError = useRef()
  ScrollToTop()
  const [value, setValue] = useState('')
  const autoCompile = (value) => {
    setValue(value)
  }

  let salida = ''

  const consoleLog = (...argumentos) => {
    for (let i = 0; i < argumentos.length; i++) {
      salida += argumentos[i] + ' '
    }
    salida += '<br/>'
  }

  useEffect(() => {

    const compileCode = () => {

      try {

        console.log = consoleLog
        eval(value)

        if (salida) {
          refError.current.innerHTML = ''
          refOutput.current.innerHTML = salida
        }

      } catch ({ message }) {
        refOutput.current.innerHTML = ''
        refError.current.innerHTML = `${message}`
      }
    }
    compileCode()

  }, [value])


  return (
    <Box>
      <Header />

      <Box height={'150px'} display={'flex'} justifyContent={'center'} alignItems={'center'} bgcolor={'#e1e1e1'} width={'100%'}>
        <Alert sx={{ width: '80%' }} severity="warning">
          <AlertTitle><strong>Atencion</strong></AlertTitle>
          Todo el codigo que se escriba en el siguiente editor de texto no sera guardardo y se perdera al momento de reiniciar la pagina, es solo un entorno de pruebas. Para guardar la informacion es necesario <strong>iniciar sesion</strong>
        </Alert>
      </Box>
      <Box display={'flex'} bgcolor={'#e1e1e1'} alignItems={'center'} width={'100%'} height={'auto'} minHeight={'600px'}>
        <Box flexDirection={'column'} height={'600px'} width={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'} gap={'10px'}>
          <Box
            sx={{ boxShadow: '5px 5px 15px #00000090' }}
            width={'90%'} height={'90%'} bgcolor={'#1E1E1E'} borderRadius={'10px'}>
            <Box

              width={'100%'}
              height={'10%'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              gap={'10px'}
            >
              <img src='/img/iconjs.png'></img>
              <Typography

                fontWeight={700}
                bgcolor={'#1E1E1E'}
                borderRadius={'10px'}
                textAlign={'center'}
                color='#EFD090'
              >Javascript
              </Typography>
            </Box>
            <CodeEditor
              theme="vs-dark"
              language={'javascript'}
              height={'85%'}
              width={'100%'}
              onChange={autoCompile}
              loading={<Loading />}
              value={value}
            />
          </Box>
        </Box>

        <Box display={'flex'} height={'650px'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={'10px'} bgcolor={'#e1e1e1'} color={'black'} width={'50%'}>

          <Box

            sx={{ overflowY: 'scroll', boxShadow: '5px 5px 15px #00000090' }}
            width={'90%'} height={'70%'} bgcolor={'#1E1E1E'} borderRadius={'10px'}
          >
            <Box
              width={'100%'}
              height={'10%'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Typography

                fontWeight={700}
                borderRadius={'10px'}
                textAlign={'center'}
                color={'green'}
              >Output
              </Typography>
            </Box>
            <Typography sx={{ wordWrap: 'break-word' }} component={'div'} ref={refOutput} mb={'20px'} textAlign={'left'} color={'green'} ml={'20px'}></Typography>
          </Box>
          <Box
            sx={{ overflowY: 'scroll', boxShadow: '5px 5px 15px #00000090' }}
            width={'90%'} height={'10%'} bgcolor={'#1E1E1E'} borderRadius={'10px'}>

            <Box
              width={'100%'}
              height={'50%'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Typography
                fontWeight={700}
                borderRadius={'10px'}
                textAlign={'center'}
                color={'red'}

              >Error
              </Typography>
            </Box>
            <Typography sx={{ lineHeight: '1.8', whiteSpace: 'normal', wordWrap: 'break-word' }} ref={refError} mb={'20px'} textAlign={'left'} color={'red'} ml={'20px'}></Typography>
          </Box>
        </Box>

      </Box>
      <Footer />
    </Box>
  )
}

export default Demo


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