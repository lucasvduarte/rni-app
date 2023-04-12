import { useTheme } from "styled-components/native";
import { CheckBoxStyled } from "./style";
import { CheckBoxProps } from "./type";

export const CheckBox = (props: CheckBoxProps) => {
  const { colors } = useTheme();
  const { color = "easternBlue" } = props;

  return (
    <CheckBoxStyled
      {...props}
      textStyle={{ color: colors.matterhorn }}
      checkedColor={colors[color]}
    />
  );
};
