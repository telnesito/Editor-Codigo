import { auth } from "../../services/auth"

export const sendEmailVerification = async () => {
  const response = {
    code: '', message: ''
  }

  try {
    response.message = await auth.verificarCorreo()
    response.code = 0
    return response
  } catch (error) {
    response.message = error.message
    response.code = 1

    return response

  }
}