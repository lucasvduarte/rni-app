import { TResponseCep } from "./type";
import axios from "axios";

const URL: string = "https://viacep.com.br/ws";

export const getCep = (cep: string) => {
  return axios.get<TResponseCep>(`${URL}/${cep}/json`);
};
