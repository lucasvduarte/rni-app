export type TResponseStep = {
  result: TStep[];
  msgError?: string;
};

export type TStep = {
  id: number;
  titulo: string;
  texto: string;
  ordem: number;
  observacoes?: string;
  ativo: boolean;
  guidcontrol: string;
  criado: string | Date;
  alterado: string | Date;
};
