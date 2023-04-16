import { CardStyled } from "./style";
import { CardProps } from "./type";
import * as Animatable from "react-native-animatable";
import { useTheme } from "styled-components/native";
import { Pressable } from "react-native";
import { Box } from "../Box";

const defaultTheme = {
  xs: {
    padding: 1,
  },
  sm: {
    padding: 4,
  },
  md: {
    padding: 8,
  },
  lg: {
    padding: 12,
  },
  xl: {
    padding: 16,
  },
  "2xl": {
    padding: 20,
  },
};

export const Card = (props: CardProps) => {
  const { colors } = useTheme();
  const {
    children,
    animation,
    bg = "whiteDarkGray",
    onPress,
    shadowColor = "blackWhite",
    shadow,
    borderColor = "veryLightGray",
  } = props;

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={{
          padding: shadow ? defaultTheme[shadow].padding : 0,
        }}
      >
        <CardStyled
          {...props}
          bgStyled={colors[bg]}
          shadowColor={colors[shadowColor] as never}
          borderColor={colors[borderColor] as never}
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
