import { api } from "../../../../config/axios";
import { TResponseProgress } from "./type";

const URL: string = "/enterprisesteps";

export const getProgress = (empreendimentoidsap: string) => {
  return api.get<TResponseProgress>(`${URL}/filters`, {
    params: { active: 1, empreendimentoidsap },
  });
};
