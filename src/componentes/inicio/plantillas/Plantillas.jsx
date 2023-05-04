import { Typography, Button } from '@mui/material'
import './Plantillas.css'
import generateUniqueId from 'generate-unique-id'
const Plantillas = () => {

  const PLANTILLAS =
    [
      {
        nombre: 'Hola Mundo',
        descripcion: 'La plantilla "Hola Mundo" es perfecta para aquellos que buscan familiarizarse con algunos de los algoritmos más famosos de la programación. Con esta plantilla, podrás aprender y practicar el algoritmo "Hola Mundo", que es la base de cualquier programa.',
        id: generateUniqueId()
      },
      {
        nombre: 'Bubble Sort',
        descripcion: 'La plantilla "Bubble Sort" es perfecta para aquellos que buscan aprender y practicar uno de los algoritmos de ordenamiento más conocidos: el Bubble Sort. Con esta plantilla, podrás entender cómo funciona este algoritmo y cómo se puede aplicar en diferentes situaciones.',
        id: generateUniqueId()
      },
      {
        nombre: 'Quick Sort',
        descripcion: 'La plantilla "Quick Sort" es una excelente herramienta para aquellos que quieren aprender sobre algoritmos de ordenamiento y cómo aplicarlos en diferentes situaciones. ¡Empieza hoy mismo y descubre el emocionante mundo de la programación!',
        id: generateUniqueId()
      },
      {
        nombre: 'Fizz Buzz',
        descripcion: 'La plantilla "Fizz Buzz" es una excelente herramienta para aquellos que quieren aprender programación de una manera divertida y práctica. ¡Empieza hoy mismo y descubre el emocionante mundo de la programación probando la plantilla de Fizz Buzz!',
        id: generateUniqueId()
      },
      {
        nombre: 'Random number',
        descripcion: 'La generación de números aleatorios es una herramienta muy útil en la programación, ya sea para juegos, simulaciones o para cualquier aplicación que requiera de un elemento de azar. Con esta plantilla, podrás entender cómo puedes utilizarlo para generar números aleatorios en tus programas.',
        id: generateUniqueId()
      },
      {
        nombre: 'Generate random ID',
        descripcion: 'Generar identificadores únicos y aleatorios es una tarea muy común en la programación, ya sea para asignar identificadores a usuarios, productos o cualquier otro elemento en una aplicación. Con esta plantilla, podrás entender cómo funciona el algoritmo.',
        id: generateUniqueId()
      },

    ]


  return (
    <div id='plantillas' className="c-plantillas-principal">

      <div className='c-plantillas-title'>
        <Typography sx={{ color: '#82BC7D', fontWeight: '700', fontSize: '20px' }}>PLANTILLAS</Typography>
        <Typography top='-8px' position='relative' fontSize={'30px'} sx={{ fontWeight: '700' }}>Comienza a codificar</Typography>
      </div>

      <div className='c-plantillas-info'>
        {
          PLANTILLAS.map(({ nombre, descripcion, id }) =>
            <div className='c-plantillas-plantilla' key={id}>
              <Typography textAlign={'left'} color={'#82BC7D'} fontSize='15px' fontWeight='700'>{nombre}</Typography>
              <Typography textAlign={'left'} fontSize='14px'>{descripcion}</Typography>

              <div className='c-plantillas-btn'>
                <Button sx={{ backgroundColor: '#82BC7D', fontSize: '12px' }} size='large' variant='contained'>Editor</Button>
                <Button sx={{ borderColor: 'white', color: 'white', fontSize: '12px' }} size='large' variant='outlined'>Ver</Button>
              </div>

            </div>
          )

        }
      </div>
    </div>
  )
}

export default Plantillas