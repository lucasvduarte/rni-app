import { TItem } from "../../redux/modules/auth/type";
import { getIpStorage } from "../../storage";

export const requestFields = <T extends object>(fields?: T) => {
  return {
    device: "Aplicativo",
    ip: getIpStorage(),
    userauth: "rni.portaldocliente@gmail.com",
    fields,
  };
};

export const requestFieldsCreate = <T extends object>(fields?: T) => {
  return {
    devicecreate: "Aplicativo",
    ipupdate: getIpStorage(),
    usercreate: "rni.portaldocliente@gmail.com",
    fields,
  };
};

export const formatContract = (
  enterpriseSelect?: TItem,
  ctrclatip?: string
) => {
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
    (ctrclatip || enterpriseSelect?.CTRCLATIP) +
    nscod;

  return contract;
};

export const formatContractSmall = (
  ctrclatip: string,
  enterpriseSelect?: TItem
) => {
  if (!enterpriseSelect) {
    return "";
  }
  const nscod = ("0000" + enterpriseSelect.NSCCOD).slice(-4);
  const contract: string =
    enterpriseSelect.EMPCOD.substring(0, 4) +
    String(enterpriseSelect.TORCOD).substring(0, 3) +
    ctrclatip +
    "." +
    nscod;

  return contract;
};
