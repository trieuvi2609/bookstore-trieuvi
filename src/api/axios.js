import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommercehcmut.herokuapp.com'
})

export default instance
