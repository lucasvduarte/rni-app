import { useTheme } from "styled-components/native";
import { ButtonStyled } from "./style";
import { ButtonProps } from "./type";
import * as Animatable from "react-native-animatable";

export const Button = (props: ButtonProps) => {
  const {
    children,
    title,
    bg = "prussianBluePacificBlue",
    animation,
    delay,
  } = props;
  const { colors } = useTheme();

  if (!title) {
    console.warn("title is required");
    return null;
  }

  if (animation) {
    return (
      <Animatable.View animation={animation} delay={delay}>
        <ButtonStyled {...props} radius={"md"} color={colors[bg]}>
          {children}
        </ButtonStyled>
      </Animatable.View>
    );
  }
  return (
    <ButtonStyled {...props} radius={"md"} color={colors[bg]}>
      {children}
    </ButtonStyled>
  );
};
