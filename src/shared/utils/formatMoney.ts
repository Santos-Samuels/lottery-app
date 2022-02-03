export const formatMoney = (price: number) => {
  return `R$ ${price.toString().replace('.', ',')}`
}