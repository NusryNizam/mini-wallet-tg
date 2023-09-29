let apiUrl = ''
if(import.meta.env.MODE === 'development') {
    apiUrl = 'http://localhost:8080'
} else {
    apiUrl = import.meta.env.VITE_API_URL
}

export default apiUrl;