import { formatContract, requestFields } from "../../../../../config/request";
import { TItem } from "../../../../../redux/modules/auth/type";
import { TClient } from "../../../../account/services/User/type";
import { TAttendance } from "../../../service/Attendance/type";
import { TTechnicalAssistance } from "../../../service/TechnicalAssistance/type";

export const formatPostAttendance = (
  client: TClient,
  data: TAttendance,
  motive: string,
  enterpriseSelect: TItem
): TTechnicalAssistance => {
  let contrato = formatContract(enterpriseSelect);

  if (client.sindico) {
    contrato =
      String(enterpriseSelect.EMPCOD).substring(0, 4) + "9999999U19999";
  }

  const values: TTechnicalAssistance = {
    Account: { Numero_Documento__c: client.cpfcnpj },
    Assunto_Portal__c: data.assunto_portal__c,
    Contrato__r: { Id_Contrato__c: contrato },
    Description: `[ Referente ao caso: ${data.casenumber} ] ${motive}`,
    FaseParam__c: "Tratativa não iniciada",
    Grupo_Servico_RNI__c: "11. Canais de atendimento",
    Origin: requestFields().device,
    Participante__r: { Chave_Participante__c: contrato + client.cpfcnpj },
    RecordType: { name: "Atendimento Canais - RNI" },
    Resolvido_Portal__c: "false",
    Servico_RNI__c: "",
    Status: "Em análise",
    Type: data.type,
    Visualizado_Pelo_Cliente__c: "false",
  };

  return values;
};
