export type TResponseGallery = {
  result: TGallery[];
  msgError?: string;
};

export type TGallery = {
  id: number;
  alterado: string | Date;
  ativo: boolean;
  created_at: string | Date;
  criado: string | Date;
  data_fotos_obra?: string;
  empreendimentoidsap: string;
  guidcontrol: string;
  observacoes?: string;
  ordem: number;
  tipo: string;
  updated_at: string | Date;
  url: string;
  url_large: string;
  url_medium: string;
  url_small: string;
  url_thumbnail: string;
};
