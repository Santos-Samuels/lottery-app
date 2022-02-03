export const formatMoney = (price: number) => {
  const stringPrice = price.toString()

  if (!stringPrice.includes('.'))
    return `R$ ${stringPrice.concat(',').padEnd(stringPrice.length + 3, '0')}`

  return `R$ ${stringPrice.replace('.', ',').padEnd(stringPrice.length + 1, '0')}`
}