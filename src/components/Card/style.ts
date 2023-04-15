import styled from "styled-components/native";
import { Card } from "@rneui/themed";
import { CardProps } from "./type";
import {
  createSpacing,
  createBorderRadius,
  createBorderWidth,
  createShadow,
  createBorderColor,
} from "../Ui";

export const CardStyled = styled(Card).attrs<CardProps>((props) => ({
  containerStyle: {
    margin: 0,
    backgroundColor: props.bgStyled,
    ...createBorderRadius(props, true),
    ...createSpacing(props, true),
    ...createBorderWidth(props, true),
    ...createBorderColor(props, true),
    ...createShadow(props),
  },
}))<CardProps>``;
