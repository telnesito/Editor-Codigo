
import { Typography, AppBar, Box, Toolbar, IconButton, Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Drawer } from '@mui/material';
import generateUniqueId from 'generate-unique-id';
import HomeIcon from '@mui/icons-material/Home';
import SourceIcon from '@mui/icons-material/Source';
import InfoIcon from '@mui/icons-material/Info';
import GppGoodIcon from '@mui/icons-material/GppGood';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [state, setState] = useState(false)
  const navigate = useNavigate()
  // Items para el menu
  const ITEMS_MENU =
    [
      {
        item: 'Inicio',
        to: '#inicio',
        Icon: HomeIcon,
        id: generateUniqueId()
      },
      {
        item: 'Plantillas',
        to: '#plantillas',
        Icon: SourceIcon,
        id: generateUniqueId()
      },
      {
        item: 'Beneficios',
        to: '#beneficios',
        Icon: GppGoodIcon,
        id: generateUniqueId()
      },
      {
        item: 'Nosotros',
        to: '#sobre-nosotros',
        Icon: InfoIcon,
        id: generateUniqueId()
      },
    ]
  // Cambiar el state para abrir o cerrar el menu mobile
  const handleOpenMenu = () => setState((prevState) => !prevState)


  return (
    <Box height={'70px'} component={'header'} sx={{ flexGrow: 1, position: 'sticky', top: '0', zIndex: '10' }} className='c-header'>
      {/* nav */}
      <AppBar position='static'>
        <Toolbar sx={{ backgroundColor: 'white', height: '70px' }}>
          <IconButton onClick={handleOpenMenu} size='large' edge='start' color='black'
          >
            <MenuIcon />

          </IconButton>
          <Typography variant='h7' color={'black'} component={'div'} sx={{ flexGrow: 1 }}>CODESUE</Typography>
          <Button onClick={() => navigate('/gestion-de-sesion')} variant='text' sx={{ color: 'black' }}>Log In</Button>
        </Toolbar>

      </AppBar>
      {/* Menu mobile que se despliega segun el state */}
      <Drawer elevation={16} anchor='left' variant='temporary' open={state}>
        <Box sx={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', paddingTop: '40px', gap: '10px' }} height={'480px'} width={'350px'}>

          <IconButton sx={{ border: '1px solid #82BC7D' }} size='large' onClick={handleOpenMenu}>
            <CloseIcon />
          </IconButton>
          <Typography fontSize={'20px'} fontWeight={600} color={'#82BC7D'}>CODESUE</Typography>
          {/* render cada item */}
          <List sx={{ width: '90%' }}>
            <Divider variant='fullWidth' />
            {ITEMS_MENU.map(({ item, to, id, Icon }) =>
              <Box key={id}>
                <ListItem onClick={handleOpenMenu} disablePadding>
                  <ListItemButton href={to}>
                    <ListItemIcon>
                      {<Icon sx={{ color: '#82BC7D' }} />}
                    </ListItemIcon>
                    <ListItemText primary={item}></ListItemText>
                  </ListItemButton>
                </ListItem>
                <Divider variant='fullWidth' />
              </Box>
            )}
          </List>
          <Box width={'90%'} height={'100px'} display={'flex'} justifyContent={'center'} flexDirection={'column'} gap={'5px'}>
            <Button sx={{ height: '50px', fontWeight: '700', fontSize: '11px', width: '100%', bgcolor: '#82BC7D', color: 'white', borderColor: '#82BC7D' }} variant='contained'>Registrate</Button>
            <Button sx={{ height: '50px', fontWeight: '700', fontSize: '11px', width: '100%', color: '#415A77', borderColor: '#82BC7D' }} variant='outlined'>Prueba como Visitante</Button>
          </Box>

          <Typography mt={'10px'} width={'100%'} textAlign={'center'} variant='body2' color={'gray'}>v1.0.0</Typography>

        </Box>
      </Drawer >

    </Box >
  )
}


export default Header

