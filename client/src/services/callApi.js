const SERVER_URL = import.meta.env.VITE_SERVER_URL || 'http://localhost:3000'

export const callApi = async (config, payload) => {
  const { method, path, isTokenNeeded } = config

  const URL = SERVER_URL + path

  const options = {
    method: method
  }

  if (method === 'POST') {
    options.headers = {
      'Content-Type': 'application/json'
    }
    options.body = JSON.stringify(payload)
  }

  if (isTokenNeeded) {
    options.headers = {
      ...options.headers,
      access_token: localStorage.getItem('access_token')
    }
  }

  const response = await fetch(URL, options)

  return await response.json()
}
