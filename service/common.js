import axios from 'axios'

export const http = axios.create({
  baseURL: process.env.BASE_URL_APP_API_V1
})

// Request interceptors
http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// Response interceptors
http.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    Promise.reject(error)
    // throw error
  }
)
