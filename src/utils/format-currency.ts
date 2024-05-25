export function formatCurrency(numero: number) {
  const numeroArredondado = Math.round(numero * 100) / 100

  const partes = numeroArredondado.toString().split('.')
  let parteInteira = partes[0]
  let parteDecimal = partes.length > 1 ? partes[1] : '00'

  parteInteira = parteInteira.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  if (parteDecimal === '00') {
    return parteInteira
  } else {
    return `${parteInteira},${parteDecimal}`
  }
}
