import axios from "axios";
import { getAuthStorage } from "../../storage";

const CLIENT_ID = "a5f5b7c3-c842-4190-89c2-be287d67e548";
const CLIENT_SECRET = "fad6c34d-1187-4c6a-a3b3-586fd1d25377";

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
    return err;
  }
);

instance.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const api = instance;
