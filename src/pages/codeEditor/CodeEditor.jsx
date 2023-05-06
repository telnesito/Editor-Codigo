import { Box } from "@mui/material"
import Nav from "../../componentes/codeEditor/nav/Nav"
import Editor from "../../componentes/codeEditor/code/Editor"
import Output from "../../componentes/codeEditor/code/Output"
import { CodeContextProvider } from "../../hooks/context/CodeContext"

const CodeEditor = () => {
  return (
    <Box display={'flex'} width={'100vw'} bgcolor={'white'} height={'100vh'} minHeight={'700px'}>
      <CodeContextProvider>
        <Nav />

        <Box display={'flex'} width={'95%'} flexDirection={'column'}>

          <Box display={'flex'} height={'100%'} width={'100%'}>
            <Editor />

            <Output />

          </Box>


        </Box>

      </CodeContextProvider>

    </Box>
  )
}

export default CodeEditor

