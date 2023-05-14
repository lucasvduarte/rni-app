import {
  formatContract,
  requestFields,
} from "../../../../../../config/request";
import { TListRegister } from "../../../../../../redux/modules/attendance/type";
import { TItem } from "../../../../../../redux/modules/auth/type";
import { TListFile } from "../../../../service/TechnicalAssistance/type";

export const formatPostComplete = (
  cpfcnpj: string | undefined,
  enterpriseSelect: TItem | undefined,
  description: string,
  files: TListFile[],
  data: TListRegister[]
) => {
  return {
    Account: {
      Numero_Documento__c: cpfcnpj,
    },
    Contrato__r: {
      Id_Contrato__c: formatContract(enterpriseSelect),
    },
    Assunto_Portal__c: "Assistência Técnica",
    Origin: "Aplicativo",
    Type: "Assistência Técnica",
    Description: description,
    Visualizado_Pelo_Cliente__c: "false",
    Resolvido_Portal__c: "false",
    WorkOrder: data.map((item) => {
      return {
        Categoria__c: item.category.titulo,
        Origem__c: item.section.titulo,
        Itens__c: item.item.titulo,
        GarantiaTabelaAntiga__c: Number(item.item.garantiatabelaantiga),
        GarantiaTabelaAtual__c: Number(item.item.garantiatabelaatual),
      };
    }),
    Files: files.map((item) => {
      delete item.uri;
      return requestFields({ ...item, pasta: "portaisrni" });
    }),
  };
};
