import { mask } from "react-native-mask-text";

export const formatCurrency = (value?: string | number) => {
  if (!value) {
    value = 0;
  }

  value = Number(value).toFixed(2).toString().replace(/\D/g, "");

  return mask(value, "", "currency", {
    prefix: "R$ ",
    decimalSeparator: ",",
    groupSeparator: ".",
    precision: 2,
  });
};
