export type TResponseDocument = {
  data: TDataDocument[];
  erroNum?: string;
  msg: string;
  status: string;
};

type TDoc = {
  it_documento: number;
  it_projeto: number;
  it_protocolo: number;
  pastas: TDocument[];
  ts_cadastro: string | Date;
  vc_nome: string;
};

type TDataDocument = {
  data: TDoc[];
  erroNum?: string;
  modelo: string;
  msg: string;
  status: string;
};

type TArchive = {
  it_arquivo: number;
  vc_nome: string;
  vc_mime: string;
  it_size: number;
  it_documento: number;
  ts_cadastro: string | Date;
};

type TChecklist = {
  arquivos: TArchive[];
  sr_id: number;
  total_arquivos: number;
  vc_nome: string;
};

export type TDocument = {
  sr_id: number;
  arquivos: TArchive[];
  checklist: TChecklist[];
  ts_cadastro: string | Date;
  vc_descricao: string;
};
