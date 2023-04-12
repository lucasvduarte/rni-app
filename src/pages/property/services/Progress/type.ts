export type TResponseProgress = {
  result: TProgress[];
  msgError?: string;
};

export type TProgress = {
  id: number;
  empreendimentoidsap: string;
  etapa: string;
  data: string | Date;
  infraestrutura: number;
  estrutura_paredes: number;
  fundacao: number;
  cobertura: number;
  instalacoes: number;
  esquadrias: number;
  pintura_acabamento: number;
  fachada: number;
  drenagem: number;
  hidraulica: number;
  iluminacao: number;
  paisagismo: number;
  terraplanagem: number;
  sinalizacao_viaria: number;
  guias_sarjetas: number;
  areas_lazer: number;
  observacoes?: string;
  ativo: boolean;
  guidcontrol: string;
  criado: string | Date;
  alterado: string | Date;
};
