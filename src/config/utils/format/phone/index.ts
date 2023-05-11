import { mask } from "react-native-mask-text";

export const formatPhone = (phone?: string) => {
  if (!phone) {
    return "";
  }
  return mask(phone, "(99) 9 9999-9999");
};
