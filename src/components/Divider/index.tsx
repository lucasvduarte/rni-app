import { useTheme } from "styled-components/native";
import { DividerStyled } from "./style";
import { DividerProps } from "./type";

export const Divider = (props: DividerProps) => {
  const { colorDivider = "suvaGrey", width = 1 } = props;
  const { colors } = useTheme();

  return (
    <DividerStyled width={width} {...props} color={colors[colorDivider]} />
  );
};
