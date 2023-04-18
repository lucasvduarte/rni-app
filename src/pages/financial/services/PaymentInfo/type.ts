export type TResponseTips = {
  result: TTips[];
  msgError?: string;
};

export type TTips = {
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
