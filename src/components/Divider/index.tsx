import { useTheme } from "styled-components/native";
import { DividerStyled } from "./style";
import { DividerProps } from "./type";

export const Divider = (props: DividerProps) => {
  const { colorDivider = "suvaGrey" } = props;
  const { colors } = useTheme();

  return <DividerStyled {...props} color={colors[colorDivider]} />;
};
