import axios from 'axios'
import { APP } from '../config/app'

export const axiosInstance = axios.create({
    baseURL: APP.API_URL
})
