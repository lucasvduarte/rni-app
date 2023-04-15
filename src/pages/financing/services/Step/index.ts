import { api } from "../../../../config/axios";
import { TResponseStep } from "./type";

const URL: string = "/financingsteps";

export const getStep = () => {
  return api.get<TResponseStep>(`${URL}`);
};
