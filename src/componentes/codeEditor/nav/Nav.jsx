import { AccountCircle, Folder, Home, Settings, } from "@mui/icons-material"
import { Box, IconButton, Modal, Tooltip } from "@mui/material"
import generateUniqueId from "generate-unique-id"
import { useNavigate } from "react-router-dom";
import useModal from "../../../hooks/state/useModal";
import PerfilModa from "../perfil/PerfilModal";
import { useEffect } from "react"
import "aos/dist/aos.css"
import Aos from 'aos'
const Nav = () => {

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  const navigate = useNavigate()
  const { closeModal, isOpen, openModal } = useModal()


  const MENU_EDITOR = [

    {
      id: generateUniqueId(),
      Icon: Folder,
      title: 'Proyectos',
      event: () => navigate('proyectos')
    },


  ]

  return (
    <Box width={'5%'} minWidth={'70px'} alignItems={'center'} justifyContent={'center'} display={'flex'} flexDirection={'column'} bgcolor={'white'} height={'100vh'} minHeight={'700px'}>
      <Tooltip title={'Perfil'}>
        <IconButton onClick={openModal} size="large">
          <AccountCircle color="primary" />
        </IconButton>
      </Tooltip>
      <Tooltip title={'Home'}>
        <IconButton onClick={() => navigate('/home/doc')} size="large">
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

      {isOpen && <PerfilModa closeModal={closeModal} isOpen={isOpen} />}

    </Box>
  )
}

export default Nav