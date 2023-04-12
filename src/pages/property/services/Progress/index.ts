import { api } from "../../../../config/axios";
import { TResponseProgress } from "./type";

const URL: string = "/images/filters";

export const getProgress = (empreendimentoidsap: string) => {
  return api.get<TResponseProgress>(`${URL}`, {
    params: { active: 1, empreendimentoidsap },
  });
};
