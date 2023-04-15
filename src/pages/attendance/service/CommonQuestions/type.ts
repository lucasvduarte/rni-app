export type TResponseCommonQuestions = {
  result: TCommonQuestions[];
  msgError?: string;
};
export type TCommonQuestions = {
  alterado: string | Date;
  ativo: boolean;
  criado: string | Date;
  guidcontrol: string;
  id: number;
  observacoes: null;
  pergunta: string;
  resposta: string;
  tipo: string;
  titulo: string;
  util_nao: number;
  util_sim: number;
};
