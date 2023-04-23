import Toast from "react-native-toast-message";
import { api } from "../../../../config/axios";
import { requestFields } from "../../../../config/request";
import { TResponseSharingAuthorization, TResponseLgpd } from "./type";

const URL: string = "/salesforce";

export const putSharingAuthorization = (
  compartilhamento_dados_empresas_rodobens__c: "Não autorizo" | "Autorizo",
  id: string
) => {
  return api
    .put<TResponseSharingAuthorization>(
      `${URL}/account`,
      requestFields({ compartilhamento_dados_empresas_rodobens__c, id })
    )
    .catch((error) => {
      Toast.show({
        type: "error",
        text2: error.response?.data?.message,
      });
    });
};

export const getLgpd = async (cpfcnpj: string) => {
  return api
    .get<TResponseLgpd>(`${URL}/account`, {
      params: { Numero_Documento__c: cpfcnpj },
    })
    .catch((error) => {
      Toast.show({
        type: "error",
        text2: error.response?.data?.message,
      });
    });
};
