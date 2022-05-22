import axios from "axios";

export const apiBackend = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
