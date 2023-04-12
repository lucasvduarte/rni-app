export type TResponseNotification = {
  result: TNotification[];
  msgError?: string;
};

type TList = {
  alterado: string;
  ativo: boolean;
  cpf: string;
  criado: string | Date;
  excluido: boolean;
  guidcontrol: string;
  id: number;
  mensagensimportantesguid: string;
  observacoes?: string;
  visualizado: boolean;
};

export type TNotification = {
  id: string;
  cpf?: number | string;
  idSAP?: number | string;
  titulo: string;
  texto?: string;
  dataenvio: string | Date;
  observacoes?: string;
  ativo: boolean;
  guidcontrol: string;
  criado: string | Date;
  alterado: string | Date;
  resumo: string;
  visualizado?: string;
  guildcontrolcontrole?: string;
  excluido?: string | boolean;
  lista: TList[];
};
