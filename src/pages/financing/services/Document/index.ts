import { api } from "../../../../config/axios";
import { TResponseDocument } from "./type";

const URL: string = "/portaltexts";

export const getDocument = () => {
  return api.get<TResponseDocument>(`${URL}/filters/`, {
    params: { chave: "DOCUMENTOS_FINANCIAMENTO" },
  });
};
