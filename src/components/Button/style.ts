import styled from "styled-components/native";
import { ButtonProps } from "./type";
import { Button } from "@rneui/themed";
import { createSpacing, createDimension } from "../Ui";

export const defaultTheme = {
  sm: {
    height: 38,
    fontSize: 16,
    loadingSize: 20,
  },
  md: {
    height: 48,
    fontSize: 17,
    loadingSize: 26,
  },
  lg: {
    height: 54,
    fontSize: 18,
    loadingSize: 32,
  },
};

export const ButtonStyled = styled(Button).attrs<ButtonProps>((props) => ({
  containerStyle: {
    width: props.fullWidth ? "100%" : "auto",
    ...createSpacing(props, true),
    ...createDimension(props, true),
  },
  titleStyle: {
    fontWeight: props.isBold ? "bold" : "normal",
    fontSize: defaultTheme[props.size || "lg"].fontSize,
  },
  buttonStyle: {
    height:
      props.type !== "clear" ? defaultTheme[props.size || "lg"].height : null,
  },
  loadingProps: { size: defaultTheme[props.size || "lg"].loadingSize },
}))<ButtonProps>``;
