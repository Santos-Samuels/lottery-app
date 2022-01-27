export const usernameValidation = (name: string) => {
  const reg = /^[a-záàâãéèêíïóôõöúçñ ]+$/i
  return reg.test(name)
}