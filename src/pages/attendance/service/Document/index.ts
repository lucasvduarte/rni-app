import { api } from "../../../../config/axios";
import { TResponseDocument } from "./type";

const URL: string = "/guardiaodigital";

export const postDocuments = (nome: string, codigoSap: string) => {
  return api.post<TResponseDocument>(`${URL}/consultadocumento`, {
    modelo: [{ nome }],
    filtros: [{ "Código Sap": codigoSap }],
  });
};
