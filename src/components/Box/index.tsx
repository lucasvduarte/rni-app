import { useTheme } from "styled-components/native";
import { ViewStyled } from "./style";
import { BoxProps } from "./type";
import * as Animatable from "react-native-animatable";
import { Pressable } from "react-native";

export const Box = (props: BoxProps) => {
  const { colors } = useTheme();
  const { children, animation, borderColor = "transparent", onPress } = props;

  if (onPress) {
    return (
      <Pressable {...props}>
        <ViewStyled {...props} borderColor={colors[borderColor] as any}>
          {children}
        </ViewStyled>
      </Pressable>
    );
  }
  if (animation) {
    return (
      <Animatable.View {...props}>
        <ViewStyled {...props}>{children}</ViewStyled>
      </Animatable.View>
    );
  }
  return (
    <ViewStyled {...props} borderColor={colors[borderColor] as any}>
      {children}
    </ViewStyled>
  );
};
