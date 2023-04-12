import { api } from "../../../../config/axios";
import { TLike, TResponseTips } from "./type";
import { requestFields } from "../../../../config/request";

const URL: string = "/tendencies";

export const getTips = (active: Boolean, cpfcnpj: string) => {
  return api.get<TResponseTips>(`${URL}/filters`, {
    params: { active, cpfcnpj },
  });
};

export const putTipsLike = (id: string, value: TLike) => {
  return api.put<any>(
    `${URL}likes/${id}`,
    requestFields({
      ...value,
    })
  );
};

export const postTipsLike = (value: TLike) => {
  return api.post<any>(
    `${URL}likes/`,
    requestFields({
      ...value,
    })
  );
};
