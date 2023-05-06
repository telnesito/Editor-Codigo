import { saveAs } from "file-saver"

export const exportFile = (nombre, codigo) => {
  const contenido = codigo
  const nombreArchivo = `${nombre}.rb`

  const archivo = new File([contenido], nombreArchivo, { type: 'text/plain' })

  saveAs(archivo)
}