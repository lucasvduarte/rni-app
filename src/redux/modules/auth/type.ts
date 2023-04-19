import { TClient, TClientSap } from "../../../pages/account/services/User/type";

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
