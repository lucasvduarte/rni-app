import { mask } from "react-native-mask-text";

export const formatCurrency = (value?: string | number) => {
  if (!value) {
    value = 0;
  }

  value = value.toString().replace(/\D/g, "");

  return mask(value, "", "currency", {
    prefix: "R$ ",
    decimalSeparator: ",",
    groupSeparator: ".",
    precision: 2,
  });
};
