import { AccountCircle, Folder, Home, Settings, } from "@mui/icons-material"
import CodeIcon from '@mui/icons-material/Code';
import { Box, IconButton } from "@mui/material"
import generateUniqueId from "generate-unique-id"
import { useNavigate } from "react-router-dom";
const Nav = () => {

  const navigate = useNavigate()

  const MENU_EDITOR = [


    {
      id: generateUniqueId(),
      Icon: CodeIcon,
      event: () => navigate('editor')
    },
    {
      id: generateUniqueId(),
      Icon: Folder,
      event: () => navigate('proyectos')
    },
    {
      id: generateUniqueId(),
      Icon: Settings,
      event: () => navigate('ajustes')
    },

  ]

  return (
    <Box width={'5%'} minWidth={'70px'} alignItems={'center'} justifyContent={'space-between'} display={'flex'} flexDirection={'column'} bgcolor={'white'} height={'100vh'} minHeight={'700px'}>
      <IconButton size="large">
        <Home color="primary" />
      </IconButton>
      <Box>
        {
          MENU_EDITOR.map(({ id, Icon, event }) => <Box key={id}>
            <IconButton onClick={event} size="large">
              <Icon color="primary" />
            </IconButton>
          </Box>)
        }
      </Box>
      <IconButton onClick={() => navigate('/')} size="large">
        <AccountCircle color="primary" />
      </IconButton>

    </Box>
  )
}

export default Nav