
import { Box } from "@mui/material"
import Editor from "./Editor"
import Output from "./Output"
const IndexEditor = () => {
  return (
    <Box display={'flex'} height={'100%'} width={'100%'}>
      <Editor format={'.rb'} tools={true} lenguaje={'Ruby'} color={'#D16969'} icon={'/img/iconrb.png'} />
      <Output />
    </Box>
  )
}

export default IndexEditor