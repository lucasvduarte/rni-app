import axios from "axios";
import { getAuthStorage } from "../../storage";

let instance = axios.create({
  baseURL: "https://hml-api-integraportais.rni.com.br/api",
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
