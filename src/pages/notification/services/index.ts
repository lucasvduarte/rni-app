import { api } from "../../../config/axios";
import { TNotification, TResponseNotification } from "./type";
import { requestFields } from "../../../config/request";

const URL: string = "/importantmessages";

export const getByNotification = (cpf: string, empreendimentoidsap: string) => {
  return api.get<TResponseNotification>(`${URL}/findbycpfemp`, {
    params: { cpf, empreendimentoidsap },
  });
};

export const getNotification = () => {
  return api.get<TResponseNotification>(URL);
};

export const getNotificationText = (id: string) => {
  return api.get<TResponseNotification>(`${URL}/text/${id}`);
};

export const postNotification = (
  cpf: string,
  mensagensimportantesguid: string
) => {
  return api.post<TNotification>(`${URL}control`, {
    ...requestFields({
      mensagensimportantesguid,
      cpf,
      visualizado: true,
      excluido: true,
    }),
  });
};

export const deleteNotification = (
  id: string | undefined,
  cpf: string,
  mensagensimportantesguid: string
) => {
  console.log({ id, cpf, mensagensimportantesguid });
  if (!id) {
    return postNotification(cpf, mensagensimportantesguid);
  }
  return api.put<TNotification>(`${URL}control/${id}`, {
    ...requestFields({
      excluido: true,
    }),
  });
};
