import axios from "axios";

export const userGithub = axios.create({
  baseURL: "https://api.github.com/users/",
});
