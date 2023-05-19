import { AccountCircle, Folder, Home, Settings, } from "@mui/icons-material"
import { Box, IconButton, Tooltip } from "@mui/material"
import generateUniqueId from "generate-unique-id"
import { useNavigate } from "react-router-dom";
const Nav = () => {

  const navigate = useNavigate()

  const MENU_EDITOR = [

    {
      id: generateUniqueId(),
      Icon: Folder,
      title: 'Proyectos',
      event: () => navigate('proyectos')
    },
    {
      id: generateUniqueId(),
      Icon: Settings,
      title: 'Ajustes',
      event: () => navigate('ajustes')
    },

  ]

  return (
    <Box width={'5%'} minWidth={'70px'} alignItems={'center'} justifyContent={'space-between'} display={'flex'} flexDirection={'column'} bgcolor={'white'} height={'100vh'} minHeight={'700px'}>
      <Tooltip title={'Home'}>
        <IconButton size="large">
          <Home color="primary" />
        </IconButton>
      </Tooltip>
      <Box>
        {
          MENU_EDITOR.map(({ id, Icon, event, title }) => <Box key={id}>
            <Tooltip title={title}>
              <IconButton onClick={event} size="large">
                <Icon color="primary" />
              </IconButton>
            </Tooltip>
          </Box>)
        }
      </Box>
      <Tooltip title={'Perfil'}>
        <IconButton onClick={() => navigate('/')} size="large">
          <AccountCircle color="primary" />
        </IconButton>
      </Tooltip>

    </Box>
  )
}

export default Nav