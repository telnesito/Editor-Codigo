import { saveAs } from "file-saver"
import generateUniqueId from "generate-unique-id"
export const exportFile = (nombre, codigo, format) => {
  const contenido = codigo
  const nombreArchivo = `${nombre}-${generateUniqueId()}.${format}`

  const archivo = new File([contenido], nombreArchivo, { type: 'text/plain' })

  saveAs(archivo)
}