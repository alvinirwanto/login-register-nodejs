import axios from "axios";
import { BASEAPIURL } from './constant';

const API = axios.create({ baseURL: BASEAPIURL })

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem("profile")) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token
//             }`;
//     }

//     return req;
// });

export const uploadImage = (data) => API.post("/upload/", data);
