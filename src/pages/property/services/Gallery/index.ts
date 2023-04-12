import { api } from "../../../../config/axios";
import { TResponseGallery } from "./type";

const URL: string = "/images/filters";

export const getImageGallery = (
  empreendimentoidsap: string,
  tipo: "galeria" | "obra"
) => {
  return api.get<TResponseGallery>(`${URL}`, {
    params: { active: 1, empreendimentoidsap, tipo },
  });
};
