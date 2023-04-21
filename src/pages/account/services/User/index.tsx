import { api } from "../../../../config/axios";
import { requestFields } from "../../../../config/request";
import { TClient, TClientRegister, TResponseUser } from "./type";

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
  return api.put<TResponseUser>(`${URL}/${id}`, requestFields({ ...user }));
};

export const putClientAuthorization = (value: boolean, id: string) => {
  return api.put<TResponseUser>(`${URL}/${id}`, {
    notificacao_digital: value,
  });
};

export const postCodeValidation = (cpfcnpj: string, codigo: string) => {
  return api.post<TResponseUser>(
    `${URL}/validationcode`,
    requestFields({ cpfcnpj, codigo })
  );
};

export const postCodeResend = (cpfcnpj: string) => {
  return api.post<TResponseUser>(
    `${URL}/resendcode`,
    requestFields({ cpfcnpj })
  );
};

export const postRegister = (value: TClientRegister) => {
  delete value.confirmaSenha;
  return api.post<TResponseUser>(
    `${URL}/firstaccess`,
    requestFields({ ...value })
  );
};

export const getResetPassword = (
  cpfcnpj: string,
  senha?: string,
  validation_code?: string
) => {
  return api.post<TResponseUser>(
    `${URL}/forgotpassword`,
    requestFields({ cpfcnpj, senha, validation_code })
  );
};
