export type TResponseDocument = {
  result: TDocument[];
  msgError?: string;
};

export type TDocument = {
  alterado: string | Date;
  ativo: boolean;
  chave: string;
  criado: string | Date;
  guidcontrol: string | Date;
  id: number;
  observacoes?: string;
  valor: string;
};
