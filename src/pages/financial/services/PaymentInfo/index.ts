import { api } from "../../../../config/axios";
import { requestFields } from "../../../../config/request";
import { TInput, TResponsePaymentInfo } from "./type";

const URL: string = "/barramentowso2";

export const postPaymentReport = (INPUT: TInput[]) => {
  return api.post<TResponsePaymentInfo>(
    `${URL}/informerendimentos`,
    requestFields({ INPUT })
  );
};
