import { Typography, Button, Divider } from '@mui/material'
import './Plantillas.css'
import generateUniqueId from 'generate-unique-id'
const Plantillas = () => {

  const PLANTILLAS =
    [
      {
        nombre: 'Hola Mundo',
        descripcion: 'Codifica y corre el famoso algoritmo "Hola mundo" en Ruby!',
        id: generateUniqueId()
      },
      {
        nombre: 'Bubble Sort',
        descripcion: 'Codifica y corre el famoso algoritmo "Bubble Sort" en Ruby!',
        id: generateUniqueId()
      },
      {
        nombre: 'Quick Sort',
        descripcion: 'Codifica y corre el famoso algoritmo "Quick Sort" en Ruby!',
        id: generateUniqueId()
      },
      {
        nombre: 'Fizz Buzz',
        descripcion: 'Codifica y corre el famoso algoritmo "Fizz Buzz" en Ruby!',
        id: generateUniqueId()
      },
      {
        nombre: 'Generate random number',
        descripcion: 'Codifica y corre el famoso algoritmo "Generate random number" en Ruby!',
        id: generateUniqueId()
      },
      {
        nombre: 'Generate random ID',
        descripcion: 'Codifica y corre el famoso algoritmo "Generate random ID" en Ruby!',
        id: generateUniqueId()
      },

    ]


  return (
    <div id='plantillas' className="c-plantillas-principal">
      <div className='c-plantillas-title'>
        <Typography sx={{ color: '#43ACD9', fontWeight: '700', fontSize: '17px' }}>PLANTILLAS</Typography>
        <Typography top='-8px' position='relative' variant='h4' sx={{ fontWeight: '700' }}>Comienza a codificar</Typography>
      </div>

      <div className='c-plantillas-info'>
        {
          PLANTILLAS.map(({ nombre, descripcion, id }) =>
            <div className='c-plantillas-plantilla' key={id}>
              <Typography fontSize='15px' fontWeight='700'>{nombre}</Typography>
              <Divider />
              <Typography fontSize='14px'>{descripcion}</Typography>

              <div className='c-plantillas-btn'>
                <Button sx={{ backgroundColor: '#43ACD9', fontSize: '12px' }} size='small' variant='contained'>Editor</Button>
                <Button sx={{ borderColor: 'white', color: 'white', fontSize: '12px' }} size='small' variant='outlined'>Ver</Button>
              </div>

            </div>
          )

        }
      </div>
    </div>
  )
}

export default Plantillas