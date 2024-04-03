import { IUser } from "../models/IUser"

export const validatePhoneNumber = (value: string): boolean => {
  const phoneRegex = /^\d{9}$/
  return phoneRegex.test(value)
}

export const validateDocumentDNI = (value: string): boolean => {
  const phoneRegex = /^\d{8}$/
  return phoneRegex.test(value)
}
  
export const validateCarnetExtranjeria = (value: string): boolean => {
  const patron = /^[A-Z]\d{7}$/
  return patron.test(value)
}

export const getFullName = (user: IUser) => {
  return user.name + ' ' + user.lastName
}

export const calculateAge = (fechaNacimiento: string): number => {
  const fechaNacimientoDate = new Date(fechaNacimiento)

  if (isNaN(fechaNacimientoDate.getTime())) {
    console.error('Fecha de nacimiento inválida')
    return 0
  }

  const fechaActual = new Date()

  let edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear()

  if (
    fechaActual.getMonth() < fechaNacimientoDate.getMonth() ||
    (fechaActual.getMonth() === fechaNacimientoDate.getMonth() &&
      fechaActual.getDate() < fechaNacimientoDate.getDate())
  ) {
    edad--
  }

  return edad
}

export const loadAbort = () =>{
  const controller = new AbortController()
  return controller
}
