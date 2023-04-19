export type TResponsePaymentInfo = {
  result: TPaymentInfo;
  msgError?: string;
};

export interface TtemHeader {
  BAIRRO: string;
  CEP: string;
  CHVDTASIT: string;
  CIDADE: string;
  CTRCLATIP_DES: string;
  CTRDTADOC: string | Date;
  CTRSIT_DES: string;
  EMPCOD: string;
  EMPDESCOM: string;
  EMP_BAIRRO: string;
  EMP_CEP: string;
  EMP_CIDADE: string;
  EMP_CNPJ: string | number;
  EMP_STREET: string;
  EMP_UFE: string;
  ETPDES: string;
  KUNNR1: string;
  KUNNR2?: string;
  NAME1: string;
  NAME2?: string;
  NSCCOD: number;
  STREET: string;
  TORDES: string;
  UFE: string;
  AUX1?: string;
  AUX2?: string;
  AUX3?: string;
  AUX4?: string;
  AUX5?: string;
  AUX6?: string;
  AUX7?: string;
  AUX8?: string;
  AUX9?: string;
  AUX10?: string;
}

export interface TItemExit {
  BUKRS: string;
  EMPCOD: string;
  MES01: number;
  MES02: number;
  MES03: number;
  MES04: number;
  MES05: number;
  MES06: number;
  MES07: number;
  MES08: number;
  MES09: number;
  MES10: number;
  MES11: number;
  MES12: number;
  NSCCOD: number;
  TORCOD: string;
  TOTAL: number;
  UNICOD: string;
  UNITIP: string;
  AUX1?: string;
  AUX2?: string;
  AUX3?: string;
  AUX4?: string;
  AUX5?: string;
  AUX6?: string;
  AUX7?: string;
  AUX8?: string;
  AUX9?: string;
  AUX10?: string;
}

export type TPaymentInfo = {
  IT_CABECALHO: { item: TtemHeader[] };
  IT_SAIDA: {
    item: TItemExit[];
  };
  pdfBase64: string;
};

export type TInput = {
  I_ANO: string;
  I_CPF: string | number;
  I_EMPCOD: string;
  I_NSCCOD: number;
  I_TORCOD: string | number;
  I_UNICOD: string | number;
  I_UNITIP: string;
  Id_Contrato__c: string;
};
