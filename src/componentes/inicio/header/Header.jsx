
import { Typography } from '@mui/material';
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
  return (
    <div className='c-header'>

      <div className='c-h-nav'>
        <div className='c-h-nav-info'>
          <MenuIcon />
          <Typography>Menu</Typography>
        </div>
        <div className='c-h-nav-login'>
          <Typography>Log In</Typography>
        </div>
      </div>
    </div>
  )
}

export default Header