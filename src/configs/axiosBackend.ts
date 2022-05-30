import axios from "axios";

export const apiBackend = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});


apiBackend.interceptors.request.use(config =>{
  config.headers['authorization'] =`Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}` 
  return config
})