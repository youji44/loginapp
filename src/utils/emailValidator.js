export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Please input Email address"
  if (!re.test(email)) return 'Oops! it needs a valid email address.'
  return ''
}
