import { CardStyled } from "./style";
import { CardProps } from "./type";
import * as Animatable from "react-native-animatable";
import { useTheme } from "styled-components/native";
import { Pressable } from "react-native";

export const Card = (props: CardProps) => {
  const { colors } = useTheme();
  const {
    children,
    animation,
    bg = "white",
    onPress,
    shadowColor = "black",
  } = props;

  if (onPress) {
    return (
      <Pressable onPress={onPress}>
        <CardStyled
          {...props}
          bgStyled={colors[bg]}
          shadowColor={colors[shadowColor] as never}
        >
          {children}
        </CardStyled>
      </Pressable>
    );
  }
  if (animation) {
    return (
      <Animatable.View {...props}>
        <CardStyled
          {...props}
          bgStyled={colors[bg]}
          shadowColor={colors[shadowColor] as never}
        >
          {children}
        </CardStyled>
      </Animatable.View>
    );
  }

  return (
    <CardStyled
      {...props}
      bgStyled={colors[bg]}
      shadowColor={colors[shadowColor] as never}
    >
      {children}
    </CardStyled>
  );
};
