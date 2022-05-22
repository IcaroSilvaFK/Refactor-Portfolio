import axios from "axios";

export const apiBackend = axios.create({
  baseURL: "http://localhost:8080",
});
