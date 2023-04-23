export type TResponseSharingAuthorization = {
  result: any;
  msgError?: string;
};

export type TResponseLgpd = {
  totalSize: number;
  done: boolean;
  records: TRecords[];
};

type TRecords = {
  name: string;
  tipo_documento__c: string;
  numero_documento__c: string;
  email_principal__c: string;
  createddate: string;
  ddd_principal__c: string;
  lastmodifieddate: string;
  telefone_principal__c: string;
  cep_principal__c: string;
  cidade_principal__c: string;
  bairro_principal__c: string;
  caixa_postal_principal__c?: string;
  cidade_naturalidade__c: string;
  complemento_principal__c: string;
  ddi_principal__c: string;
  estado_civil__c: string;
  estado_uf_naturalidade__c: string;
  estado_uf_principal__c: string;
  logradouro_principal__c: string;
  numero_principal__c: string;
  pais_naturalidade__c: string;
  pais_principal__c: string;
  profissao__c: string;
  regime_casamento__c?: string;
  rg_rne__c: string;
  sexo__c: string;
  tipo_de_pessoa__c: string;
  tipo_email_principal__c: string;
  tipo_endereco_principal__c: string;
  tipo_logradouro_principal__c: string;
  tipo_telefone_principal__c: string;
  uf_orgao_emissor_rg__c?: string;
  data_nascimento__c: string;
  orgao_emissor_rg__c: string;
  data_expedicao__c: string;
  compartilhamento_dados_empresas_rodobens__c: string;
  ownerid: string;
  createdby: {
    attributes: {
      type: string;
      url: string;
    };
    Name: string;
  };
  owner: {
    attributes: {
      type: string;
      url: string;
    };
    Name: string;
  };
  marcacao_unidade_automoveis__c: boolean;
  marcacao_unidade_banco__c: boolean;
  marcacao_unidade_consorcio__c: boolean;
  marcacao_unidade_corretora__c: boolean;
  marcacao_unidade_leasing_locacao__c: boolean;
  marcacao_unidade_rni__c: boolean;
  marcacao_unidade_veiculos_comerciais__c: boolean;
  id: string;
};
