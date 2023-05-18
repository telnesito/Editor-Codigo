import { Box, Modal } from "@mui/material"

const PerfilModa = (props) => {

  return (
    <Modal
      onClose={props.closeModal} open={props.open}>
      <Box width={'500px'} bgcolor={'red'} height={'500px'}>

      </Box>

    </Modal>
  )
}

export default PerfilModa