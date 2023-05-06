import { Backdrop, CircularProgress, Typography } from "@mui/material"

const Loading = () => {
  return (
    <Backdrop sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }} open={true}>
      <CircularProgress />
      <Typography>Cargando editor</Typography>
    </Backdrop>
  )
}

export default Loading