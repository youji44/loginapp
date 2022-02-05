export function passwordValidator(password) {
  if (!password) return "Please input Password."
  if (password.length < 6) return 'Password must be at least 6 characters long.'
  return ''
}
