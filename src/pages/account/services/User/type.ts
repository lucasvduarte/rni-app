import { TUser } from "../../../../redux/modules/auth/type";

export type TResponseUser = {
  result: TUser;
  msgError?: string;
};

export type TClient = {
  aux1?: string | number;
  aux2?: string | number;
  aux3?: string | number;
  aux4?: string | number;
  aux5?: string | number;
  nome: string;
  apelido: string;
  cpfcnpj: string;
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

type TNotes = {
  aux1?: string | number;
  aux2?: string | number;
  aux3?: string | number;
  aux4?: string | number;
  aux5?: string | number;
};

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

export type TClientRegister = {
  apelido: string;
  senha: string;
  cpfcnpj: string;
  email?: string;
  datanascimento: string;
  confirmaSenha?: string;
  nome: string;
};
