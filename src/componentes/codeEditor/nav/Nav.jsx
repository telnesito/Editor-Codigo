import { AccountCircle, Folder, Home, Settings } from "@mui/icons-material"
import PaletteIcon from '@mui/icons-material/Palette';
import { Box, IconButton } from "@mui/material"
import generateUniqueId from "generate-unique-id"

const Nav = () => {

  const MENU_EDITOR = [


    {
      id: generateUniqueId(),
      Icon: Settings
    },
    {
      id: generateUniqueId(),
      Icon: Folder
    },
    {
      id: generateUniqueId(),
      Icon: PaletteIcon
    },

  ]

  return (
    <Box width={'5%'} minWidth={'70px'} alignItems={'center'} justifyContent={'space-between'} display={'flex'} flexDirection={'column'} bgcolor={'white'} height={'100vh'} minHeight={'700px'}>
      <IconButton size="large">
        <Home color="primary" />
      </IconButton>
      <Box>
        {
          MENU_EDITOR.map(({ id, Icon }) => <Box key={id}>
            <IconButton size="large">
              <Icon color="primary" />
            </IconButton>
          </Box>)
        }
      </Box>
      <IconButton size="large">
        <AccountCircle color="primary" />
      </IconButton>
    </Box>
  )
}

export default Nav