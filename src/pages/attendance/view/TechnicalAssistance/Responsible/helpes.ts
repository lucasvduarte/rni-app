import {
  TScheduling,
  TSchedulingResponse,
} from "../../../service/TechnicalAssistance/type";

export const formatField = (
  data: TSchedulingResponse,
  responsible: string,
  hour: TScheduling | null
) => {
  return {
    accountid: data.case.accountid,
    service_territory__c:
      data.case.contrato__r.Empreendimento__r.Service_Territory__c,
    quem_esta_vistoria__c: responsible,
    data_hora_do_agendamento_da_visita__c:
      data.case?.data_hora_do_agendamento_da_visita__c,
    scheduling: hour,
  };
};
