import { Box, Typography } from "@mui/material"
import { Editor as CodeEditor } from "@monaco-editor/react"
import Loading from "./Loading"
import { useContext } from "react"
import { ContextWeb } from "../../../hooks/context/WebContext"


const EditorHtml = ({ lenguaje, icon, color }) => {

  const { Html, setHtml } = useContext(ContextWeb)


  const autoCompile = (value) => {

    setHtml(value)
  }

  return (
    <Box flexDirection={'column'} width={'50%'} display={'flex'} alignItems={'center'} bgcolor={'#e1e1e1'} justifyContent={'center'} gap={'10px'}>
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
          theme="vs-dark"
          language={lenguaje.toLowerCase()}
          height={'85%'}
          width={'100%'}
          onChange={autoCompile}
          loading={<Loading />}
          value={Html}
        />
      </Box>

    </Box>
  )
}

export default EditorHtml