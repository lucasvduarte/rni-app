import { formatDatePtBr } from "../../../../../config/utils";
import {
  TAnticipationParams,
  TParcelList,
} from "../../../services/Financial/type";
import { balanceTwoValue, balanceValue } from "../../helps";

export const formatDataList = (
  description: string | undefined,
  parcelList: TParcelList[] | undefined,
  dataListSimulationList: TParcelList[] | undefined,
  values: TAnticipationParams
) => {
  const simulationListSize = dataListSimulationList?.length || 0;
  const list = [
    { title: "Tipo do contrato", description: description || "" },
    {
      title: "Valor antecipado",
      description: balanceValue(dataListSimulationList),
    },
    {
      title: "Total de parcelas",
      description: simulationListSize.toString(),
    },
    { title: "Vencimento", description: formatDatePtBr(values?.dtbase) },
    {
      title: "Novo saldo devedor",
      description: balanceTwoValue(parcelList, dataListSimulationList),
    },
    {
      title: "Nova quantidade de parcelas",
      description: (parcelList?.length || 0 - simulationListSize).toString(),
    },
  ].filter((item) => {
    return !!item?.description;
  });

  return list;
};
