import axios from 'axios'

const BaseUrl = 'http://localhost:8000'

// Encapsulated get request
export const getRequest = (url, params) => {
  return new Promise((resolve) => {
    axios
      .get(`${BaseUrl}${url}`, {
        params
      })
      .then((res) => resolve(res.data))
  })
}

// Encapsulated post request
export const postRequest = (url, data) => {
  return new Promise((resolve) => {
    axios.post(`${BaseUrl}${url}`, data).then((res) => resolve(res.data))
  })
}
