import { TItem } from "../../redux/modules/auth/type";
import { getIpStorage } from "../../storage";

export const requestFields = <T extends object>(fields: T) => {
  return {
    device: "Aplicativo",
    ip: getIpStorage(),
    userauth: "rni.portaldocliente@gmail.com",
    fields,
  };
};

export const formatContract = (enterpriseSelect?: TItem) => {
  if (!enterpriseSelect) {
    return "";
  }
  const nscod = ("0000" + enterpriseSelect.NSCCOD).slice(-4);

  const contract =
    enterpriseSelect?.EMPCOD.substring(0, 4) +
    enterpriseSelect?.TORCOD.toString().substring(0, 3) +
    enterpriseSelect?.UNICOD.toString().substring(0, 4) +
    enterpriseSelect?.UNITIP +
    enterpriseSelect?.AUX3?.toString().substring(0, 4) +
    enterpriseSelect?.CTRCLATIP +
    nscod;

  return contract;
};
