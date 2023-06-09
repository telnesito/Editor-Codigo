import './Auth.css'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { useEffect } from "react"
import "aos/dist/aos.css"
import Aos from 'aos'
const Auth = () => {

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <Box data-aos="zoom-out"
      height={{ xs: '100vh', lg: '100%', md: '100%', sm: '100%' }}

      display={'flex'}
      width={'100%'}
      alignItems={'center'}
      justifyContent={'center'}
      bgcolor={'#111151'}
      minHeight={'800px'}
      sx={{ backgroundImage: 'url(/img/ColoredShapes.svg)', backgroundSize: 'cover' }}
    >
      <Box

        height={'600px'}
        width={'50%'}
        sx={{
          backgroundImage: 'url(/img/bglogin.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          boxShadow: '-15px 15px 10px #0d0d40 ',
          display: { xs: 'none', lg: 'block', md: 'block' },
          transition: 'all 1s'
        }
        }
      >

      </Box>

      <Box
        sx={{ boxShadow: '15px 15px 10px #0d0d4990' }}
        width={{ xs: '100%', lg: '30%', md: '35%' }}>


        <Outlet />

      </Box>

    </Box>
  )
}

export default Auth