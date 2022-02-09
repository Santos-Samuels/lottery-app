export const formatDate = (date: Date) => {
  const day = date.getDay().toString().padStart(2, '0')
  const month = date.getMonth().toString().padStart(2, '0')
  return `${day}/${month}/${date.getFullYear()}`
}