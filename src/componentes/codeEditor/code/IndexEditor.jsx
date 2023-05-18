
import { Box } from "@mui/material"
import Editor from "./Editor"
import Output from "./Output"
const IndexEditor = () => {
  return (
    <Box display={'flex'} height={'100%'} width={'100%'}>
      <Editor />
      <Output />
    </Box>
  )
}

export default IndexEditor