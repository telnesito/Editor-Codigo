
let salida

export const puts = (...args) => {
  args.forEach((arg) => {
    salida += arg + ''
  })
  salida += '<br/>'
}

export const prob = (salida) => salida
