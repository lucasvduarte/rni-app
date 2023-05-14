import { api } from "../../../../config/axios";
import { requestFields } from "../../../../config/request";

import {
  InputAnticipation,
  TAnticipationParams,
  TPostPaymentSlipParams,
  TInput,
  TInputExtratc,
  TResponseCreatePaymentSlip,
  TResponseExtratc,
  TResponsePostPaymentSlip,
  TResponseParcelList,
  TResponsePaymentInfo,
  TResponsePaymentSlipAuthorization,
  TResponsePaymentSlip,
  TSendParcels,
} from "./type";

const URL: string = "/barramentowso2";

export const postPaymentInfo = (value: TInput) => {
  return api.post<TResponsePaymentInfo>(
    `${URL}/informerendimentos`,
    requestFields({ INPUT: [{ ...value }] })
  );
};

export const putPaymentSlipAuthorization = (
  I_CNPJ_CPF: string,
  I_ENVBOL: string
) => {
  return api.post<TResponsePaymentSlipAuthorization>(
    `${URL}/alteraboletodigital`,
    requestFields({ INPUT: [{ I_CNPJ_CPF, I_ENVBOL }] })
  );
};

export const postExtratc = (value: TInputExtratc) => {
  return api.post<TResponseExtratc>(
    `${URL}/extrato`,
    requestFields({ INPUT: [{ ...value }] })
  );
};

export const getPaymentSlip = (cpfcnpj: string, atribuicao: string) => {
  return api.get<TResponsePaymentSlip[]>(`${URL}/listaboleto`, {
    params: {
      ...requestFields(),
      atribuicao,
      elidepvendaspar: "X",
      cpfcnpj,
      login: cpfcnpj,
    },
  });
};

export const postPaymentSlip = (values: TPostPaymentSlipParams) => {
  return api.post<TResponsePostPaymentSlip>(
    `${URL}/geraboleto`,
    requestFields({ ...values })
  );
};

export const getParcelList = (params: TAnticipationParams) => {
  return api.get<TResponseParcelList>(`${URL}/listarparcelas`, {
    params: params,
  });
};

export const postParcelSend = (sendParcels: TSendParcels) => {
  return api.post<TResponseParcelList>(`${URL}/enviarparcelas`, sendParcels);
};

export const postCreatePaymentSlip = (creactPaymentSlip: InputAnticipation) => {
  return api.post<TResponseCreatePaymentSlip>(`${URL}/criaboleto`, {
    INPUT: [creactPaymentSlip],
  });
};

export const postSalesForce = (value: any) => {
  return api.post<any>(`salesforce/case`, value);
};
