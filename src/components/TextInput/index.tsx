import { useTheme } from "styled-components/native";
import { SizeProps } from "../Ui/type";
import { TextInputStyled } from "./style";
import { TextInputProps } from "./type";

const sizeProps: Record<SizeProps, number> = {
  small: 32,
  medium: 40,
  large: 48,
};

export const TextInput = (props: TextInputProps) => {
  const { colors } = useTheme();
  const {
    bg = "gray93",
    size = "medium",
    color = "blackWhite",
    numberOfLines,
  } = props;

  return (
    <TextInputStyled
      {...props}
      placeholderTextColor={colors.gray66}
      inputContainerStyle={{
        backgroundColor: colors[bg],
        borderRadius: 10,
        borderBottomWidth: 0,
        height: numberOfLines
          ? (numberOfLines * sizeProps[size]) / 2
          : sizeProps[size],
        paddingHorizontal: 12,
        padding: 0,
        marginHorizontal: 0,
      }}
      labelStyle={{
        paddingBottom: 8,
        color: colors[color],
        padding: 0,
        marginHorizontal: 0,
      }}
    />
  );
};
