import { api } from "../../../../config/axios";
import { requestFields } from "../../../../config/request";
import { TClient, TResponseUser } from "./type";

const URL: string = "/clients";

export const getUser = async (login: string, password: string) => {
  const response = api.get<TResponseUser>(`${URL}/validlogin`, {
    headers: { login, password },
  });
  return response;
};

export const putRedefinePassword = (senha: string, id: string) => {
  return api.put<TResponseUser>(
    `${URL}/${id}`,
    requestFields({
      senha,
    })
  );
};

export const putPersonalData = (user: TClient, id: string) => {
  return api.put<TResponseUser>(`${URL}/${id}`, requestFields(user));
};

export const putClientAuthorization = (value: boolean, id: string) => {
  return api.put<TResponseUser>(`${URL}/${id}`, {
    notificacao_digital: value,
  });
};
