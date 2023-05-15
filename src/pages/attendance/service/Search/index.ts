import { api } from "../../../../config/axios";
import { TAnswers, TResponseSearch } from "./type";
import { requestFields } from "../../../../config/request";

const URL: string = "/surveyform/FindByCpfCnpjEmp";

export const getSearch = (cpfcnpj: string, empreendimentoidsap: string) => {
  return api.get<TResponseSearch>(`${URL}`, {
    params: { cpfcnpj, empreendimentoidsap },
  });
};

export const postSearch = (
  cpfcnpj: string,
  pesquisaguid: string,
  respostas: TAnswers[]
) => {
  return api.post<TResponseSearch>(
    `/surveyformresponse `,
    requestFields({
      pesquisaguid,
      cpfcnpj,
      respostas,
    })
  );
};
