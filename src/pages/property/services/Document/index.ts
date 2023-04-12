import { api } from "../../../../config/axios";
import { TParams } from "./type";

const URL: string = "/guardiaodigital";

export const postDocuments = (send: TParams) => {
  return api.post<Response>(`${URL}/consultadocumento`, send);
};

export const getLinkDocument = (idDoc: number) => {
  return api.get<{ link: string }>(`${URL}/link?documento=${idDoc}`);
};

export const postSalesForce = (value: any) => {
  return api.post<{ link: string }>(`salesforce/case`, value);
};
