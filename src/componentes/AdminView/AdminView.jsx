import { BuildCircle, Logout, SupervisedUserCircle } from '@mui/icons-material'
import { AppBar, Avatar, Box, IconButton, Menu, MenuItem, Toolbar, Typography, Divider } from '@mui/material'
import { auth } from '../../../services/auth'
import { Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const AdminView = () => {
  const navigate = useNavigate()
  const handleLogOut = async () => {

    try {
      await auth.cerrarSesion()
      navigate('/authenticator/login')
    } catch (error) {
      console.error(error)

    }
  }


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>

      <AppBar position='static'

      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography variant='h6'>Panel Administrativo</Typography>

          <Box display={'flex'} gap={'10px'} alignItems={'center'}>

            <Typography>
              admincodesue@gmail.com

            </Typography>
            <IconButton onClick={handleClick} size='small' sx={{ bgcolor: 'white' }}>
              <Avatar sx={{ width: 32, height: 32 }} >A</Avatar>
            </IconButton>


          </Box>


        </Toolbar>
      </AppBar>

      <Menu
        sx={{
          mt: '10px'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >


        <MenuItem onClick={() => navigate('usuarios')}>
          <Box display={'flex'} alignItems={'center'} gap={'10px'}>
            <SupervisedUserCircle color='primary' fontSize='large' />
            <Typography>
              Usuarios
            </Typography>
          </Box>
        </MenuItem>


        <MenuItem>
          <Box onClick={() => navigate('ayuda')} display={'flex'} alignItems={'center'} gap={'10px'}>
            <BuildCircle color='primary' fontSize='large' />
            <Typography>
              Ayuda
            </Typography>
          </Box>
        </MenuItem>

        <Divider />
        <MenuItem onClick={handleLogOut}>
          <Box display={'flex'} gap={'10px'} alignItems={'center'}>
            <Logout fontSize='small' color='primary' />
            <Typography>
              Cerrar sesion

            </Typography>
          </Box>
        </MenuItem>
      </Menu>


      <Outlet />




    </Box>
  )
}

export default AdminView