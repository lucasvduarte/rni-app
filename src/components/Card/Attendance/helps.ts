import { TAttendance } from "../../../pages/attendance/service/Attendance/type";

export const isConfirmSchedule = (data: TAttendance) => {
  return (
    !data?.agendamento_confirmado_pelo_cliente__c &&
    data?.data_hora_do_agendamento_da_visita__c &&
    (data?.manutencao_executada__c || "").toLowerCase() !== "sim" &&
    data?.aprovacao_analise_central__c !== "Dúvida"
  );
};

export const isToSchedule = (data: TAttendance) => {
  return (
    !data?.data_hora_do_agendamento_da_visita__c &&
    data?.status.toLowerCase() !== "concluído" &&
    !data?.agendamento_confirmado_pelo_cliente__c &&
    (!!data?.aprovacao_analise_central__c ||
      !!data?.aprovacao_analise_pos_obra__c) &&
    data?.aprovacao_analise_central__c !== "Negado" &&
    data?.aprovacao_analise_pos_obra__c !== "Negado" &&
    (data?.aprovacao_analise_central__c === "Liberado" ||
      data?.aprovacao_analise_pos_obra__c === "Liberado")
  );
};

export const isSchedulingText = (data: TAttendance) => {
  return (
    data?.status.toLowerCase() === "em análise" &&
    ((data?.agendamento_confirmado_pelo_cliente__c &&
      data?.data_hora_do_agendamento_da_visita__c) ||
      isConfirmSchedule(data))
  );
};
