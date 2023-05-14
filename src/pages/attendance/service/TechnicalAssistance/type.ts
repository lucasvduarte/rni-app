import { TAttributes, TFile } from "../Attendance/type";

export type TResponseItem = {
  result: TItem[];
  msgError?: string;
};

export type TResponseCategory = {
  result: TCategory[];
  msgError?: string;
};

export type TResponseSection = {
  result: TSection[];
  msgError?: string;
};

export type TPostSchedulingParams = {
  accountid: string;
  service_territory__c: string;
  quem_esta_vistoria__c: string;
  data_hora_do_agendamento_da_visita__c: string;
  scheduling: TScheduling;
};

export type TCategory = {
  ativo: boolean;
  descricao: string;
  guidcontrol: string;
  icone: string;
  id: number;
  observacoes?: string;
  titulo: string;
  tipoempreendimento?: "Vertical" | "Horizontal" | "Todos";
  isversindico?: boolean;
};

export type TSection = {
  ativo: boolean;
  descricao: string;
  guidcontrol: string;
  assistenciacategoriaid: number;
  categoria: string;
  datecreate: string;
  icone: string;
  id: number;
  observacoes?: string;
  titulo: string;
};

export type TItem = {
  ativo: boolean;
  descricao: string;
  guidcontrol: string;
  assistenciacategoriaid: number;
  assistenciasecaoid: number;
  categoria: string;
  datecreate: string;
  icone: string;
  id: number;
  imagem: string;
  observacoes?: string;
  secao: string;
  titulo: string;
  garantiatabelaantiga: string;
  garantiatabelaatual: string;
};

export type TScheduling = {
  endTime: string;
  resources: string[];
  startTime: string;
};

export type TSchedulingResponse = {
  case: {
    accountid: string;
    agendamento_confirmado_pelo_cliente__c: boolean;
    aprovacao_analise_central__c?: string;
    aprovacao_analise_pos_obra__c?: string;
    casenumber: string;
    contrato__c: string;
    contrato__r: {
      Empreendimento__c: string;
      Empreendimento__r: {
        Service_Territory__c: string;
        attributes: TAttributes;
      };
      attributes: TAttributes;
    };
    createddate: string | Date;
    data_hora_do_agendamento_da_visita__c?: string;
    faseparam__c: string;
    id: string;
    priority: string;
    quem_esta_vistoria__c?: string;
    status: string;
    subject: string;
  };
  scheduling?: TScheduling[];
};

export type TTechnicalAssistance = {
  Account: { Numero_Documento__c: string | number };
  Assunto_Portal__c: string;
  Contrato__r: { Id_Contrato__c: string };
  Description: string;
  FaseParam__c: string;
  Grupo_Servico_RNI__c: string;
  Origin: string;
  Participante__r: { Chave_Participante__c: string };
  RecordType: { name: string };
  Resolvido_Portal__c: string | boolean;
  Servico_RNI__c: string;
  Status: string;
  Type: string;
  Visualizado_Pelo_Cliente__c: string | boolean;
  Files?: TFile[];
};

export type TListFile = {
  filename: string;
  uri?: string;
  arquivo: string;
  type: string;
};
