export type TResponseSubject = {
  result: TSubject[];
  msgError?: string;
};

export type TResponseAttendance = {
  records: TAttendance[];
  done: boolean;
  totalSize: boolean;
};

export type TAttributes = {
  type: string;
  url: string;
};

type TUnidade = {
  Name: string;
  Tipo_Unidade__c: string;
  Unidade__c: number;
  attributes: TAttributes;
};

type TTorreQuadra = {
  Correspondente_Bancario__c?: string;
  Correspondente_Bancario__r?: string;
  Name: string;
  Torre__c: string;
  attributes: TAttributes;
};

type TEmpreendimento = {
  Empreendimento__c: string;
  Name: string;
  attributes: TAttributes;
};

export type TContrato = {
  Classificacao__c: number;
  Contrato__c: number;
  Data_Entrada__c?: string;
  Data_Financiamento__c: string;
  Data_Retirada__c?: string;
  Data_Venda__c: string;
  Data_da_assinatura_Gerente_Banco__c?: string;
  Data_de_Protocolo_da_Prefeitura__c?: string;
  Data_retirada_guia_ITBI__c?: string;
  Descricao_Situacao_Contrato__c: string;
  Empreendimento__r: TEmpreendimento;
  Id_Contrato__c: string;
  Numero_Referencia_Contrato__c: number;
  Situacao_Contrato__c: number;
  Torre_Quadra__r: TTorreQuadra;
  Unidade__r: TUnidade;
  attributes: TAttributes;
};

type TAccount = {
  Email_Principal__c: string;
  Estado_Civil__c: string;
  Name: string;
  Numero_Documento__c: number;
  Regime_Casamento__c?: string;
  attributes: TAttributes;
};

export type TAttendance = {
  account: TAccount;
  agendamento_confirmado_pelo_cliente__c: boolean;
  aprovacao_analise_central__c?: string;
  aprovacao_analise_pos_obra__c?: string;
  assunto_portal__c: string;
  casecomments?: string;
  casenumber: number;
  contrato__r: TContrato;
  createddate: string;
  data_hora_do_agendamento_da_visita__c?: string;
  description: string;
  id: string;
  manutencao_executada__c?: string;
  order: number;
  origin: "Portal" | "Aplicativo" | string;
  participante__r?: string;
  quem_esta_vistoria__c?: string;
  recordtypeid: string;
  resolvido_portal__c: boolean;
  status: string;
  subject: string;
  type: string;
  ultimo_comentario__c?: string;
  visualizado_pelo_cliente__c: boolean;
  reclamacao_procedente__c?: string;
  statusCase: string;
};

export type TSubject = {
  alterado: string | Date;
  assunto: string;
  assunto_salesforce: string;
  ativo: boolean;
  criado: string | Date;
  guidcontrol: string;
  id: number;
  observacoes?: string;
};

export type TRecordsInternal = {
  Body: string;
  CreatedBy: {
    Email: string;
    Name: string;
    attributes: TAttributes;
  };
  CreatedById: string;
  CreatedDate: string;
  Id: string;
  Title?: string;
  Type: string;
  attributes: TAttributes;
};

type TFeeds = {
  done: boolean;
  records: TRecordsInternal[];
  totalSize: number;
};

export type TWorkordersRecords = {
  Categoria__c: string;
  GarantiaTabelaAntiga__c: string;
  GarantiaTabelaAtual__c: string;
  Id: string;
  Imagem: string;
  Itens__c: string;
  Origem__c: string;
  WorkOrderNumber: string;
  attributes: TAttributes;
};

type TWorkorders = {
  done: boolean;
  records: TWorkordersRecords[];
  totalSize: number;
};

export type TRecords = {
  attachments?: string;
  casecomments?: string;
  feeds: TFeeds;
  id: string;
  tasks?: string;
  workorders?: TWorkorders;
};

export type TResponseFeedTask = {
  done: boolean;
  records: TRecords[];
  totalSize: number;
};

export type TFileAzure = {
  userauth: string;
  ip: string;
  device: string;
  fields: TFile;
};

export type TFile = {
  arquivo: string;
  filename: string;
  pasta?: string;
  size?: number;
  uri?: string;
  type?: string;
};

export type TUpdateAttendance = {
  id: string;
  visualizado_pelo_cliente__c?: boolean;
  resolvido_portal__c?: boolean;
  agendamento_confirmado_pelo_cliente__c?: boolean;
  Avaliacao_cliente_canais__c?: string;
  Status_atendimento__c?: string;
  quem_esta_vistoria__c?: string;
  status?: string;
  faseparam__c?: string;
};
