import { formatDatePtBr } from "../../../../../config/utils";
import {
  TAnticipationParams,
  TParcelList,
} from "../../../services/Financial/type";
import { balanceValue } from "../../helps";

export const formatDataList = (
  description: string | undefined,
  parcelList: TParcelList[] | undefined,
  values: TAnticipationParams
) => {
  const list = [
    { title: "Tipo do contrato", description: description || "" },
    {
      title: "Valor total para quitar",
      description: balanceValue(parcelList),
    },
    { title: "Vencimento", description: formatDatePtBr(values?.dtbase) },
    {
      title: "Incluir parcelas do financiamento ?",
      description: !!values?.incparfin ? "Sim" : "Não",
    },
  ].filter((item) => {
    return !!item?.description;
  });

  return list;
};
