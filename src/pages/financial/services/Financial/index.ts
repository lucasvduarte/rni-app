import { api } from "../../../../config/axios";
import {
  formatContract,
  requestFields,
  requestFieldsCreate,
} from "../../../../config/request";
import { addDays, formatDatePtBr } from "../../../../config/utils/format/data";
import { TItem } from "../../../../redux/modules/auth/type";
import { initValueParcelList } from "../../view/helps";

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
  TParcelList,
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

export const getParcelList = (enterpriseSelect: TItem, value?: any) => {
  return api.get<TResponseParcelList>(`${URL}/listarparcelas`, {
    params: initValueParcelList(enterpriseSelect, value),
  });
};

export const postParcelSend = (
  login: string | undefined,
  tipo_contrato: string,
  tipo: "Quitacao" | "Antecipacao",
  date: string,
  parcelSend: TParcelList[]
) => {
  return api.post<TResponseParcelList>(
    `${URL}/enviarparcelas`,
    requestFieldsCreate({
      login,
      tipo_contrato,
      tipo,
      SAP: {
        INPUT: [
          {
            I_DT_BASE: formatDatePtBr(date, true),
            I_ZAHLS: "M",
            I_ZLSCH: "Z",
          },
        ],
        TABLES: [{ TABLE: parcelSend }],
      },
    })
  );
};

export const postCreatePaymentSlip = (creactPaymentSlip: InputAnticipation) => {
  return api.post<TResponseCreatePaymentSlip>(`${URL}/criaboleto`, {
    INPUT: [creactPaymentSlip],
  });
};

export const postSalesForce = (
  enterpriseSelect: TItem | undefined,
  Numero_Documento__c: number | string | undefined,
  value: number,
  isAntecipation: boolean = true,
  antecipation: TAnticipationParams
) => {
  const contratc = formatContract(
    enterpriseSelect,
    String(antecipation.ctrclatip)
  );
  let mensagem =
    `Solicitar ${
      isAntecipation ? "Antecipação" : "Quitação"
    } Empreendimento: ` +
    enterpriseSelect?.EMPCOD +
    " - Torre/Bloco: " +
    enterpriseSelect?.TORCOD +
    " - Unidade: " +
    enterpriseSelect?.UNICOD +
    " - Data Vencimento: " +
    antecipation.dtbase +
    " - Valor: " +
    value;

  const fields = {
    Account: {
      Numero_Documento__c,
    },
    Assunto_Portal__c: "Solicitar Negociação",
    Contrato__r: {
      Id_Contrato__c: contratc,
    },
    Description: mensagem,
    FaseParam__c: "Tratativa não iniciada",
    Grupo_Servico_RNI__c: "48. Pagamento",
    Origin: "Aplicativo",
    Participante__r: {
      Chave_Participante__c: contratc + Numero_Documento__c,
    },
    RecordType: {
      name: "Atendimento Geral Informações - RNI",
    },
    Resolvido_Portal__c: "true",
    Servico_RNI__c: isAntecipation
      ? "Informações de antecipação"
      : "Informações de quitação",
    Status: "Concluído",
    Type: "Informação",
    Visualizado_Pelo_Cliente__c: "false",
  };

  return api.post<any>(`salesforce/case`, fields);
};
