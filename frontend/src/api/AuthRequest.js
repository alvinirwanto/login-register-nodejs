import axios from 'axios';
import { BASEAPIURL } from './constant';

const API = axios.create({ baseURL: BASEAPIURL })

export const logIn = (formData) => API.post('/auth/login', formData)

export const signUp = (formData) => API.post('/auth/register', formData)
