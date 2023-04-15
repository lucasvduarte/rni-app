import { api } from "../../../../config/axios";
import { TResponseCommonQuestions } from "./type";

const URL: string = "/frequentlyquestions";

export const getCommonQuestions = () => {
  return api.get<TResponseCommonQuestions>(`${URL}/filters`, {
    params: { active: 1 },
  });
};
