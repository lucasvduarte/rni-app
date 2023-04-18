import { api } from "../../../../config/axios";
import { TResponseDocument } from "./type";

const URL: string = "/guardiaodigital";

export const postDocuments = (nome: string, Cpf: string, Titulo: string) => {
  return api.post<TResponseDocument>(`${URL}/consultadocumento`, {
    modelo: [{ nome }],
    filtros: [{ Cpf }, { Titulo }],
  });
};

export const getLinkDocument = (idDoc: number) => {
  return api.get<{ link: string }>(`${URL}/link?documento=${idDoc}`);
};

export const postSalesForce = (value: any) => {
  return api.post<{ link: string }>(`salesforce/case`, value);
};
