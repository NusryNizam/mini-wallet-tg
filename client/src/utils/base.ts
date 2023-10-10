let apiUrl = ''

if (import.meta.env.MODE === 'development') {
  apiUrl = import.meta.env.VITE_API_URL_DEV
} else {
  apiUrl = import.meta.env.VITE_API_URL
}

export default apiUrl
