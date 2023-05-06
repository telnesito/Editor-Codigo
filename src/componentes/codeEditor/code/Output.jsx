import { Box, Typography } from "@mui/material"
import { useRef } from "react"
import { useContext } from "react"
import { ContextCode } from "../../../hooks/context/CodeContext"

const Output = () => {

  const refOutput = useRef()
  const refError = useRef()
  const { Code } = useContext(ContextCode)
  let salida = ''

  const puts = (...argumentos) => {
    for (let i = 0; i < argumentos.length; i++) {
      salida += argumentos[i] + ' '
    }
    salida += '<br/>'
  }

  const compileCode = () => {

    try {
      console.log = puts
      let output = Opal.compile(Code)
      eval(output)

      if (salida) {
        refError.current.innerHTML = ''
        refOutput.current.innerHTML = salida
      }

    } catch ({ name, message, backtrace }) {
      refOutput.current.innerHTML = ''
      refError.current.innerHTML = `${name}: ${message} <br/> ${backtrace[0]}`
    }
  }


  compileCode()



  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={'10px'} bgcolor={'#e1e1e1'} color={'black'} width={'50%'}>
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
  )
}

export default Output

// Azul oscuro: #007ACC
// Rojo oscuro: #D16969
// Verde oscuro: #3FA33F
// Amarillo oscuro: #EFD090
// Naranja oscuro: #FFA500
// Morado oscuro: #B33FB3
// Gris oscuro: #1E1E1E
// Gris medio: #4D4D4D
// Gris claro: #CCCCCC