export type TResponseDatasheet = {
  result: TDatasheet[];
  msgError?: string;
};

export type TDatasheet = {
  id: number;
  nome: string;
  idsap: string;
  previsao_conclusao: string | Date;
  status: string;
  cnpj: string;
  descricao: string;
  endereco_logradouro: string;
  endereco_numero: number;
  endereco_bairro: string;
  endereco_complemento?: string;
  endereco_cep: string;
  endereco_cidade: string;
  endereco_estado: string;
  id_hypnobox: number;
  linha_produto: string;
  data_habitese?: string | Date;
  data_matricula?: string | Date;
  data_financiamento?: string | Date;
  data_assembleia?: string | Date;
  tipologia: string;
  area_privativa: string;
  numero_torres: number;
  numero_andares: number;
  numero_unidades: number;
  apto_andar: number;
  numero_elevadores: number;
  numero_vagas: string;
  projeto_arquitetonico: string;
  projeto_paisagismo?: string;
  construcao: string;
  incorporacao: string;
  registro_incorporacao?: string;
  informacoes_adicionais?: string;
  observacoes?: string;
  ativo: boolean;
  guidcontrol: string;
  criado: string | Date;
  alterado: string | Date;
};
