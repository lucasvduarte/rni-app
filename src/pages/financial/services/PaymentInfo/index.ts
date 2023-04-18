import { api } from "../../../../config/axios";
import { TResponseTips } from "./type";

const URL: string = "/financingtips";

export const getTips = () => {
  return api.get<TResponseTips>(`${URL}`);
};
