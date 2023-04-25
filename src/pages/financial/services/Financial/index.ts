import { api } from "../../../../config/axios";
import { requestFields } from "../../../../config/request";
import {
  InputAnticipation,
  TAnticipationParams,
  TExtratcGetTicketParams,
  TExtratcPostTicketParams,
  TInput,
  TInputExtratc,
  TResponseCreateTicket,
  TResponseExtratc,
  TResponseExtratcPostTicket,
  TResponseParcelList,
  TResponsePaymentInfo,
  TResponsePaymentSlipAuthorization,
  TResponseTicket,
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

export const getTicket = (params: TExtratcGetTicketParams) => {
  return api.get<TResponseTicket[]>(`${URL}/listaboleto`, { params: params });
};

export const postTicket = (values: TExtratcPostTicketParams) => {
  return api.post<TResponseExtratcPostTicket>(
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

export const postCreateTicket = (creactTicket: InputAnticipation) => {
  return api.post<TResponseCreateTicket>(`${URL}/criaboleto`, {
    INPUT: [creactTicket],
  });
};

export const postSalesForce = (value: any) => {
  return api.post<any>(`salesforce/case`, value);
};
