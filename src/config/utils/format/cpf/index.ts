import { mask } from "react-native-mask-text";

export const formatCpf = (cpf?: string) => {
  if (!cpf) {
    return "";
  }
  return mask(cpf, "999.999.999-99");
};

export const formatCnpj = (cnpj?: string) => {
  if (!cnpj) {
    return "";
  }
  return mask(cnpj, "99.999.999/9999-99");
};

export const isCnpj = (cnpj: string) => {
  const validFormat = /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/.test(cnpj);
  return validFormat;
};
