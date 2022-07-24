import axios from 'axios';

const baseURL = process.env.EXPO_BASE_URL
console.log('process.env.EXPO_BASE_URL', baseURL)
const httpClient = axios.create({
  baseURL
})

export { httpClient };
