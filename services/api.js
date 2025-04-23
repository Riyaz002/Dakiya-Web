import axios from 'axios'

const PROD = 'https://dakiya-server.onrender.com/'
const LOCAL = 'http://localhost:3000'

const instance = axios.create({
  baseURL: PROD, // Include the port number
});

export default get = async(path) => instance.get(path);