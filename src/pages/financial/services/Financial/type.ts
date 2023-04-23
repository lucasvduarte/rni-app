export type TResponsePaymentInfo = {
  result: TPaymentInfo;
  msgError?: string;
};

export type TResponsePaymentSlipAuthorization = {
  result: any;
  msgError?: string;
};

export type TResponseExtratc = {
  result: TExtratc;
  msgError?: string;
};

export type TResponseExtratcPostTicket = {
  result: {
    E_ERRO: string;
    E_MENSAGEM_ERRO: string;
    E_BOLETO_BASE64: string;
    E_CODBAR: string;
    urlboleto: string;
  };
  msgError?: string;
};

export type TResponseParcelList = {
  result: TParcelList[];
  msgError?: string;
};

export type TResponseCreateTicket = {
  result: TCreateTicket[];
  msgError?: string;
};

export type TExtratcPostTicketParams = {
  empresa: string;
  conta: number;
  cliente: number;
  dtvenc: string | Date;
  valor: number;
  xref3: number;
  cpfcnpj: string;
  Id_Contrato__c: string;
};

export type TExtratcGetTicketParams = {
  userauth: string;
  ip?: string;
  device?: string;
  empresa?: string;
  cpfcnpj: string;
  localneg?: string;
  atribuicao: string;
  elidepvendaspar: string;
  login: string;
};

export type TResponseTicket = {
  BELNR: number;
  BLART: string;
  BLDAT: string | Date;
  BUKRS: string;
  BUPLA: string;
  CPF_CNPJ: string;
  COD_PIX: string;
  DTVENC: string | Date;
  HBKID: number;
  KUNNR: number;
  NAME: string;
  NAME1: string;
  SMTP_ADDR: string;
  STATUS?: string;
  TEL_NUMBER: string;
  USNAM: string;
  WRBTR: number;
  XREF3: number;
  ZLSCH: string;
  ZUONR: string;
};

export type TtemHeader = {
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
};

export type TItemExit = {
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
};

export type TPaymentInfo = {
  IT_CABECALHO: { item: TtemHeader[] };
  IT_SAIDA: {
    item: TItemExit[];
  };
  pdfBase64: string;
};

export type TInput = {
  I_ANO: string;
  I_CPF: string;
  I_EMPCOD: string;
  I_NSCCOD: string | number;
  I_TORCOD: string | number;
  I_UNICOD: string | number;
  I_UNITIP: string;
  Id_Contrato__c: string;
};

export type TItemHeader = {
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
  AUX1?: string | number;
  AUX2?: string | number;
  AUX3?: string | number;
  AUX4?: string | number;
  AUX5?: string | number;
  AUX6?: string | number;
  AUX7?: string | number;
  AUX8?: string | number;
  AUX9?: string | number;
  AUX10?: string | number;
};

export type TItem = {
  CTRCOD: string;
  CTSCOD: string;
  FATCOD: string;
  FATDTAPGT: string | Date;
  PARCOD: string;
  PARDTAVEN: string | Date;
  TCURR?: string;
  TSRDES: string;
  TSRTPO_TXD: string;
  VLRAPAG: number;
  VLRDESC: number;
  VLRENC: number;
  VLRENCMOR: number;
  VLRENCMUL: number;
  VLRJUROS: number;
  VLRPREST: number;
  VLRPRIATU: number;
  VLRRECEB: string;
  VLR_ACR: number;
  VLR_CORPRE: number;
  VLR_D_COM: number;
  VLR_D_FIN: number;
  VLR_ORI: number;
  VLR_PRES: number;
  VLR_SG2: number;
  VLR_SGO: number;
  VLR_TOT_ENC: number;
  VLR_V_APAG: number;
  VLR_V_PAGO: number;
  AUX1?: string | number;
  AUX2?: string | number;
  AUX3?: string | number;
  AUX4?: string | number;
  AUX5?: string | number;
  AUX6?: string | number;
  AUX7?: string | number;
  AUX8?: string | number;
  AUX9?: string | number;
  AUX10?: string | number;
};

export type TRodape = {
  SLD_DEVEDOR: number;
  TOT_ATRASO: number;
  TOT_DESC_CONC: number;
  TOT_ENC_PAGO: number;
  TOT_JUROS: number;
  TOT_PAGO: number;
  TOT_PRIC_AMORT: number;
  TOT_PRINC_PAGO: number;
  TOT_SEG_PAGO: number;
  VLR_PRES: number;
  AUX1?: string | number;
  AUX2?: string | number;
  AUX3?: string | number;
  AUX4?: string | number;
  AUX5?: string | number;
  AUX6?: string | number;
  AUX7?: string | number;
  AUX8?: string | number;
  AUX9?: string | number;
  AUX10?: string | number;
};

type TOutPut = {
  E_CABECALHO: TItemHeader[];
  E_ERRO: any;
  E_RODAPE: TRodape[];
};

type TTables = {
  IT_SAIDA: { item: TItem[] };
};

export type TInputExtratc = {
  I_CTRCLATIP: number | string;
  I_CTRCOD: string;
  I_CTRSIT: number | string;
  I_EMPCOD: string;
  I_NSCCOD: number;
  I_TORCOD: number | string;
  I_UNICOD: number | string;
  I_UNITIP: string;
  I_SEGDES?: string;
  Id_Contrato__c: string;
};

export type TExtratc = {
  INPUT: TInputExtratc;
  OUTPUT: TOutPut;
  TABLES: TTables;
  pdfBase64: string;
};

export type TParcelList = {
  ACRESC: number;
  CTRCLATIP: number;
  CTRCOD: string;
  CTSCOD: string;
  CTSTIPJUR: string;
  EMPCOD: string;
  MORA: number;
  MULTA: number;
  PARCOD: string;
  PARDTAVEN: string | Date;
  PVNCOD: string;
  SGICOD: string;
  SGOCOD: string;
  SGOTIP: number;
  SIMCOD: string;
  SIPCORAMO: number;
  SIPCORDEF: number;
  SIPCORJUR: number;
  SIPCORPRTJUR: number;
  SIPDEFBGN: number;
  SIPDEFREF: number;
  SIPDESFINC: number;
  SIPDTAINC: string | Date;
  SIPHORINC: string;
  SIPISEACRPRI: number;
  SIPISEMOR: number;
  SIPISEMUL: number;
  SIPVLRACR: number;
  SIPVLRACRADI: number;
  SIPVLRACRPRI: number;
  SIPVLRAMO: number;
  SIPVLRAMOC: number;
  SIPVLRANT: number;
  SIPVLRCOR: number;
  SIPVLRCORV: number;
  SIPVLRDESADI: number;
  SIPVLRDESCOM: number;
  SIPVLRDESFIN: number;
  SIPVLRHON: number;
  SIPVLRJUR: number;
  SIPVLRJURC: number;
  SIPVLRMOR: number;
  SIPVLRMUL: number;
  SIPVLRORI: number;
  SIPVLRPAR: number;
  SIPVLRPRE: number;
  SIPVLRPRI: number;
  SIPVLRPRTDESC: number;
  SIPVLRPRTDESF: number;
  SIPVLRPRTJURC: number;
  SIPVLRSGO1: number;
  SIPVLRSGO2: number;
  SIPVLRTAXA: number;
  TORCOD: string;
  TSRDES: string;
  TSRTPO: number;
  TSRTPO_TXD: string;
  UNICOD: string;
  UNITIP: string;
};

export type TAnticipationParams = {
  empresa: string;
  torre: number | string;
  unidade: number | string;
  tipounidade: string;
  ctrclatip: number;
  ctrcod: number | string;
  dtbase: string | Date;
  pvncod?: number | string;
  includeFinancingInstallments?: boolean;
  incparfin?: boolean;
  parcelas?: number;
  valor?: number | string;
};

export type TSendParcels = {
  login: string | number;
  devicecreate: string;
  usercreate: string;
  ipupdate: string;
  SAP: TSap;
  tipo_contrato: string;
  tipo: string;
};

type TInputSap = {
  I_DT_BASE: string | Date;
  I_ZAHLS: string;
  I_ZLSCH: string;
};

type TTablesSap = {
  TABLE: TParcelList[];
};

type TSap = {
  INPUT: TInputSap[];
  TABLES: TTablesSap[];
};

export type InputAnticipation = {
  I_BLDAT: string | Date;
  I_CTRCLATIP: number;
  I_EMPCOD: string;
  I_NSCCOD: number;
  I_PARVLR: number;
  I_TORCOD: string | number;
  I_UNICOD: string | number;
  I_UNITIP: string;
  I_XBLNR: string;
  I_ZAHLS?: string;
  I_ZLSCH: string;
};

export type TCreateTicket = {
  BELNR: string;
  BLDAT: string | Date;
  BUKRS: string;
  CTRCLATIP: number;
  EMPCOD: string;
  ERRO?: string;
  GJAHR: number;
  NSCCOD: number;
  PARVLR: number;
  TORCOD: string;
  TXT_ERRO?: string;
  UNICOD: string;
  UNITIP: string;
  XBLNR: string;
};
