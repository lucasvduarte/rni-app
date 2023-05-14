import { Pressable } from "react-native";
import { useTheme } from "styled-components/native";
import { IconStyled } from "./style";
import { IconProps } from "./type";

export const Icon = (props: IconProps) => {
  const { onPress, iconColor = "white", color } = props;
  const { colors } = useTheme();

  if (onPress) {
    return (
      <Pressable onPress={onPress}>
        <IconStyled
          {...props}
          onPress={() => {}}
          disabledStyle={{ backgroundColor: "transparent" }}
          colorStyle={colors[iconColor]}
          disabled
        />
      </Pressable>
    );
  }
  return <IconStyled {...props} colorStyle={color || colors[iconColor]} />;
};
