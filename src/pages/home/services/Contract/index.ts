import { api } from "../../../../config/axios";
import { formatContract } from "../../../../config/request";
import { TItem } from "../../../../redux/modules/auth/type";
import { TResponseContract } from "./type";

const URL: string = "/Salesforce/contract";

export const getContract = async (enterpriseSelect: TItem | undefined) => {
  return api.get<TResponseContract>(URL, {
    params: { id_contrato__c: formatContract(enterpriseSelect) },
  });
};
