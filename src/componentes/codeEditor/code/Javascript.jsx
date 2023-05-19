
import { Box } from "@mui/material"
import Editor from "./Editor"
import JavaScriptOutput from "./JavaScriptOutput"
const Javascript = () => {
  return (
    <Box display={'flex'} height={'100%'} width={'100%'}>
      <Editor format={'.js'} tools={true} lenguaje={'Javascript'} color={'#EFD090'} icon={'/img/iconjs.png'} />
      <JavaScriptOutput />
    </Box>
  )
}

export default Javascript