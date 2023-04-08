import { useTheme } from "styled-components/native";
import { CheckBoxStyled } from "./style";
import { CheckBoxProps } from "./type";

export const CheckBox = (props: CheckBoxProps) => {
  const { colors } = useTheme();
  return <CheckBoxStyled {...props} textStyle={{ color: colors.blackWhite }} />;
};
