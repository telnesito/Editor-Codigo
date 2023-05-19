import { Box } from "@mui/material"
import EditorHtml from "./EditorHTML"
import WebOutput from "./WebOutput"
import EditorCss from "./EditorCss"
import EditorJs from "./EditorJs"

const Web = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} height={'100%'} width={'100%'}>
      <Box display={'flex'} width={'100%'} height={'70%'}>
        <EditorHtml icon={'/img/iconhtml.png'} lenguaje={'Html'} color={'#FFA500'} />
        <EditorCss icon={'/img/iconcss.png'} lenguaje={'Css'} color={'#007ACC'} />
        <EditorJs icon={'/img/iconjs.png'} lenguaje={'Javascript'} color={'#EFD090'} />
      </Box>
      <WebOutput />
    </Box>
  )

}

export default Web

