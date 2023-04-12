export type TResponseTips = {
  result: TPost[];
  msgError?: string;
};

export type TLike = {
  likedica?: boolean;
  liketendencias?: boolean;
  cpf?: string;
  dicasguid?: string;
  dicastitulo?: string;
};

export type TListcomments = {
  alterado: string | Date;
  ativo: boolean;
  comentario: string;
  cpf: string | number;
  criado: string | Date;
  guidcontrol: string;
  id: Number;
  idreferencia: string;
  nomeusuario: string;
  observacoes?: string;
  pagina: string;
};

export type TListlikes = {
  alterado: string | Date;
  ativo: boolean;
  cpf: string;
  criado: string | Date;
  dicasguid: string;
  dicastitulo: string;
  guidcontrol: string;
  id: Number;
  likedica?: boolean;
  liketendencias?: boolean;
  observacoes?: string;
};

export type TPost = {
  alterado: string | Date;
  ativo: boolean;
  categoria: string;
  criado: string | Date;
  dtvigenciafim: string | Date;
  dtvigenciainicio: string | Date;
  guidcontrol: string;
  id: Number;
  imagem: string;
  imagemtitulo: string;
  likes: Number;
  listcomments: TListcomments[];
  listlikes: TListlikes[];
  observacoes?: string;
  ordem: Number;
  ordemlayout: Number;
  resumo: string;
  texto: string;
  titulo: string;
  comentariocpf: Number;
};
