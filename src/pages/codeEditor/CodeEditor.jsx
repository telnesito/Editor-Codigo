import Nav from "../../componentes/codeEditor/nav/Nav"
import { Box } from "@mui/material"

import { CodeContextProvider } from "../../hooks/context/CodeContext"
import { Outlet } from "react-router-dom"
import { WebContextProvider } from "../../hooks/context/WebContext"
import { IdPrjectContextProvider } from "../../hooks/context/IdProjectContext"


const CodeEditor = () => {
  return (
    <Box display={'flex'} width={'100vw'} bgcolor={'white'} height={'100vh'} minHeight={'700px'}>
      <IdPrjectContextProvider>
        <WebContextProvider>

          <CodeContextProvider>
            <Nav />

            <Box display={'flex'} width={'95%'} flexDirection={'column'}>

              <Outlet />
            </Box>


          </CodeContextProvider>
        </WebContextProvider>

      </IdPrjectContextProvider>
    </Box>
  )
}

export default CodeEditor

