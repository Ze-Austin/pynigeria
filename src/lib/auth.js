export function getAccessToken() {
  return localStorage.getItem("access")
}

export function getRefreshToken() {
  return localStorage.getItem("refresh")
}

export function getUser() {
  try {
    return JSON.parse(localStorage.getItem("user"))
  } catch {
    return null
  }
}

export function isTokenValid(token) {
  if (!token) return false
  try {
    const payload = JSON.parse(atob(token.split(".")[1]))
    return payload.exp * 1000 > Date.now()
  } catch {
    return false
  }
}

export function clearSession() {
  localStorage.removeItem("access")
  localStorage.removeItem("refresh")
  localStorage.removeItem("user")
}