import { api } from "../../../../config/axios";
import { TResponseDatasheet } from "./type";

const URL: string = "/enterprises";

export const getDatasheet = (idSAP: string) => {
  return api.get<TResponseDatasheet>(`${URL}/filters`, {
    params: { idSAP, active: 1 },
  });
};
