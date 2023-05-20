
import { Box } from "@mui/material"
import Editor from "./Editor"
import PythonOutput from "./PythonOutput"
const Python = () => {
  return (
    <Box display={'flex'} height={'100%'} width={'100%'}>
      <Editor doc={'https://www.python.org/doc/'} lenguaje={'Python'} tools={true} format={'.py'} color={'#007ACC'} icon={'/img/iconpy.png'} />
      <PythonOutput />
    </Box>
  )
}

export default Python