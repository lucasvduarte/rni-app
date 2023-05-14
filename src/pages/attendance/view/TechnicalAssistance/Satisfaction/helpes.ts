export const formatField = (
  caseNumber: number,
  cpfcnpj: string | number,
  contract: string,
  values: any
) => {
  return {
    CaseNumber: caseNumber,
    Account: {
      Numero_Documento__c: cpfcnpj,
    },
    Contrato__r: {
      Id_Contrato__c: contract,
    },
    Assunto_Portal__c: "Assistência Técnica - Pesquisa Satisfação",
    Origin: "Portal",
    NotaQualidadeServico: values.quality,
    NotaAtendimentoManutencao: values.attendance,
    IndiceSatisfacaoAtendimento: values.satisfaction,
    descricao: values.description,
  };
};
