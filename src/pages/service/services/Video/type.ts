export type TResponseVideos = {
  result: TVideos[];
  msgError?: string;
};
export type TVideos = {
  id: number;
  titulo: string;
  url_videos?: string;
  id_youtube: string;
  observacoes?: string;
  ativo: Boolean;
  guidcontrol: string;
  criado: string | Date;
  alterado: string | Date;
};
