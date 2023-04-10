import axios from "axios";
import { getAuthStorage } from "../../storage";

let instance = axios.create({
  baseURL: "https://api-integraportais-hml.azurewebsites.net/api",
  headers: {
    "Content-type": "application/json",
  },
});

instance.interceptors.request.use(
  async (config) => {
    const auth = await getAuthStorage();
    if (auth?.token) {
      config.headers.Authorization = `Bearer ${auth.token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const api = instance;
