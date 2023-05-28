import { formatCurrency } from "../../../config/utils";
import { addDays } from "../../../config/utils/format/data";
import { TItem } from "../../../redux/modules/auth/type";
import { TParcelList } from "../services/Financial/type";

export const includesParcelOfTheType = (data?: TParcelList[]) => {
  if (!data) {
    return [];
  }

  return data.some((item) => {
    return (
      item.TSRDES === "FINANCIAMENTO" ||
      item.TSRDES === "FINANCIAMENTOP" ||
      item.TSRDES === "FINANC S/CORREC" ||
      item.TSRDES === "FINANC MOVEL" ||
      item.TSRDES === "FINAN HABITE-SE" ||
      item.TSRDES === "FGTS" ||
      item.TSRDES === "FIN. PRICE" ||
      item.TSRDES === "FIN. SAC" ||
      item.TSRDES === "FINANC.DT" ||
      item.TSRDES === "FGTS S/CORRECAO"
    );
  });
};

export const balanceValue = (data?: TParcelList[]) => {
  if (!data) {
    return formatCurrency(0);
  }

  const value = data.reduce((acc, parcel) => {
    return acc + parcel.SIPVLRANT;
  }, 0);

  return formatCurrency(value);
};

export const balanceTwoValue = (
  data?: TParcelList[],
  data2?: TParcelList[]
) => {
  if (!data || !data2) {
    return formatCurrency(0);
  }

  const value = data.reduce((acc, parcel) => {
    return acc + parcel.SIPVLRANT;
  }, 0);

  const value2 = data2.reduce((acc, parcel) => {
    return acc + parcel.SIPVLRANT;
  }, 0);

  return formatCurrency(value - value2);
};

export const initValueParcelList = (enterpriseSelect?: TItem, value?: any) => {
  return {
    empresa: enterpriseSelect?.EMPCOD || "",
    torre: enterpriseSelect?.TORCOD || "",
    unidade: enterpriseSelect?.UNICOD || "",
    tipounidade: enterpriseSelect?.UNITIP || "",
    ctrclatip: enterpriseSelect?.CTRCLATIP || 0,
    ctrcod: enterpriseSelect?.CTRCOD || 0,
    dtbase: addDays(new Date(), 1, true),
    pvncod: enterpriseSelect?.AUX3 || "",
    ...value,
  };
};
