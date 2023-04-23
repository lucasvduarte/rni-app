import { api } from "../../../../config/axios";
import { requestFields } from "../../../../config/request";
import { TResponseSharingAuthorization, TResponseLgpd } from "./type";

const URL: string = "/salesforce";

export const putSharingAuthorization = (
  compartilhamento_dados_empresas_rodobens__c: "Não autorizo" | "Autorizo",
  id: string
) => {
  return api.put<TResponseSharingAuthorization>(
    `${URL}/account`,
    requestFields({ compartilhamento_dados_empresas_rodobens__c, id })
  );
};

export const getLgpd = async (cpfcnpj: string) => {
  const response = api.get<TResponseLgpd>(`${URL}/account`, {
    params: { Numero_Documento__c: cpfcnpj },
  });
  return response;
};
