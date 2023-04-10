export type TClientSap = {
  AUX1?: string;
  AUX2?: string;
  AUX3?: string;
  AUX4?: string;
  AUX5?: string;
  BAIRRO: string;
  CEP: string;
  CIDADE: string;
  COMPL?: string;
  CPF_CNPJ: string | number;
  ENDNUM: string;
  MAIL: string;
  NAME1: string;
  STREET: string;
  TEL1: string;
  TEL2?: string;
  TEL3?: string;
  UFE: string;
  Z_ENVBOL?: string;
};

type TNotes = {
  aux1?: string | number;
  aux2?: string | number;
  aux3?: string | number;
  aux4?: string | number;
  aux5?: string | number;
};

export type TClient = {
  aux1?: string | number;
  aux2?: string | number;
  aux3?: string | number;
  aux4?: string | number;
  aux5?: string | number;
  nome: string;
  apelido: string;
  cpfcnpj: number | string;
  guidcontrol: string;
  sindico: boolean;
  termoadesao: boolean;
  tourguiado: boolean;
  datanascimento: string | Date;
  email: string;
  endereco_logradouro: string;
  endereco_numero: number;
  endereco_complemento: string;
  endereco_bairro: string;
  endereco_cidade: string;
  endereco_estado: string;
  endereco_cep: string;
  tel_residencial: string;
  tel_celular: string;
  tel_comercial: string;
  active?: boolean;
  dateupdate?: string | Date;
  notes?: TNotes;
  habilita_whatsapp?: boolean;
  notificacao_digital?: boolean;
};

export type TTheme = "light" | "dark";

export type TUser = {
  cliente: TClient;
  item: TItem[];
  cliente_sap: TClientSap[];
};

export type TAuth = {
  password?: string;
  email?: string;
  token?: string;
  user?: TUser;
  theme?: TTheme;
  isSingIn?: boolean;
  enterpriseSelect?: TItem;
};

export type TItem = {
  EMPCOD: string;
  EMPDESCOM: string;
  TORCOD: number;
  TORDES: string;
  UNICOD: number;
  UNITIP: string;
  ETPCOD: number;
  ETPDES: string;
  EETDTAHAB: string | Date;
  EETDTACON: string | Date;
  CTRCLATIP: number;
  CTRCLATIP_DES: string;
  CTRCOD: number;
  CTRSIT: number;
  CTRSIT_DES: string;
  CTRDTADOC: string | Date;
  CTRVLRORI: number;
  NSCCOD: number;
  BCICOD: number;
  BCIDES?: string;
  CIFDTA: string;
  CIFVLR: number;
  CIFCTR?: string;
  SEGCOD: number;
  SEGDES: string;
  CTR_QUITADO?: string;
  CHVDTASIT: string | Date;
  AUX1?: string | number;
  AUX2?: string | number;
  AUX3?: string | number;
  AUX4?: string | number;
  AUX5?: string;
  habilita_whatsapp?: boolean;
  disabled_photos?: boolean;
  informacoes_adicionais?: string;
  tipotabelagarantia?: string;
};
