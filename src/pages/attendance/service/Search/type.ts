export type TResponseSearch = {
  result: TSearch[];
  msgError?: string;
};

export type TQuestions = {
  alterado: string | Date;
  ativo: boolean;
  criado: string | Date;
  guidcontrol: string;
  id: number;
  listResponse: any[];
  observacoes?: string;
  opcoes: any[];
  ordem: number;
  pergunta: string;
  pesquisaguid: string;
  tiporesposta: "Scala" | "Texto" | "SimNao";
};

export type TSearch = {
  alterado: string | Date;
  ativo: boolean;
  cpfcnpj?: string;
  criado: string | Date;
  dtvigenciafim: string | Date;
  dtvigenciainicio: string | Date;
  empreendimentoidsap?: string;
  guidcontrol: string;
  id: number;
  listControl: any[];
  listQuestions: TQuestions[];
  observacoes?: string;
  titulo: string;
};

export type TAnswers = {
  pesquisaperguntasguid: string;
  resposta: string;
};
