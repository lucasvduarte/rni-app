import { useTheme } from "styled-components/native";
import { CheckBoxStyled } from "./style";
import { CheckBoxProps } from "./type";
import { Text } from "../Text";

export const CheckBox = (props: CheckBoxProps) => {
  const { colors } = useTheme();
  const { color = "easternBlue", title } = props;

  return (
    <>
      {title && (
        <Text
          title={title}
          pb="sm"
          color="easternBlue"
          fontSize="3xl"
          fontWeight="bold"
        />
      )}

      <CheckBoxStyled
        {...props}
        textStyle={{ color: colors.matterhorn }}
        checkedColor={colors[color]}
      />
    </>
  );
};
