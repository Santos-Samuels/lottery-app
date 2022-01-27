export const emailValidation = (email: string) => {
  const reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  return reg.test(email)
}