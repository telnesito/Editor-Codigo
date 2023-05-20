
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
        item: 'Lenguajes',
        to: '#lenaguajes',
        Icon: SourceIcon,
        id: generateUniqueId()
      },
      {
        item: 'Demo',
        to: '#demo',
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
          <IconButton sx={{ display: { lg: 'none', xs: 'block', md: 'none' } }} onClick={handleOpenMenu} size='large' edge='start' color='black'
          >
            <MenuIcon />

          </IconButton>
          <Typography onClick={() => navigate('/')} variant='h6' fontWeight={700} color={'#111151'} component={'div'} sx={{ flexGrow: 1, cursor: 'pointer' }}>CODESUE</Typography>
          <Box width={'100%'} display={{ lg: 'flex', xs: 'none', md: 'flex' }} alignItems={'center'} justifyContent={'center'}>
            {ITEMS_MENU.map(({ id, item, to }) => <Button key={id} href={to}>{item}</Button>)}

          </Box>
          <Box display={{ lg: 'flex', md: 'flex', xs: 'none' }} gap={'10px'}>
            <Button onClick={() => navigate('/authenticator/login')} variant='contained' sx={{ color: 'white', width: '100px' }}>Log In</Button>
            <Button onClick={() => navigate('/authenticator/singup')} variant='outlined' sx={{ color: 'black', width: '100px' }}>Sign Up</Button>
          </Box>

        </Toolbar>

      </AppBar>
      {/* Menu mobile que se despliega segun el state */}
      <Drawer elevation={16} anchor='left' variant='temporary' open={state}>
        <Box sx={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', paddingTop: '40px', gap: '10px' }} height={'480px'} width={'80vw'}>

          <IconButton sx={{ border: '1px solid #111151' }} size='large' onClick={handleOpenMenu}>
            <CloseIcon />
          </IconButton>
          <Typography fontSize={'20px'} fontWeight={600} color={'#111151'}>CODESUE</Typography>
          {/* render cada item */}
          <List sx={{ width: '90%' }}>
            <Divider variant='fullWidth' />
            {ITEMS_MENU.map(({ item, to, id, Icon }) =>
              <Box key={id}>
                <ListItem onClick={handleOpenMenu} disablePadding>
                  <ListItemButton href={to}>
                    <ListItemIcon>
                      {<Icon sx={{ color: '#111151' }} />}
                    </ListItemIcon>
                    <ListItemText primary={item}></ListItemText>
                  </ListItemButton>
                </ListItem>
                <Divider variant='fullWidth' />
              </Box>
            )}
          </List>
          <Box width={'90%'} height={'100px'} display={'flex'} justifyContent={'center'} flexDirection={'column'} gap={'5px'}>
            <Button onClick={() => navigate('/authenticator/login')} sx={{ height: '50px', fontWeight: '700', fontSize: '11px', width: '100%', color: 'white', borderColor: '#82BC7D' }} variant='contained'>Inicia sesion</Button>
            <Button onClick={() => navigate('/authenticator/singup')} sx={{ height: '50px', fontWeight: '700', fontSize: '11px', width: '100%', color: 'black' }} variant='outlined'>Registrate</Button>
          </Box>

          <Typography mt={'10px'} width={'100%'} textAlign={'center'} variant='body2' color={'gray'}>v1.0.0</Typography>

        </Box>
      </Drawer>

    </Box>
  )
}


export default Header

