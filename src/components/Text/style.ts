import styled from "styled-components/native";
import { Text } from "@rneui/themed";
import { TextProps } from "./type";
import {
  createSpacing,
  createBorderColor,
  createBorderRadius,
  createBorderWidth,
  createFlex,
  createPosition,
  createText,
  createDimension,
} from "../Ui";

export const TextStyled = styled(Text).attrs<TextProps>(() => ({}))<TextProps>`
  ${(props) => createSpacing(props)};
  ${(props) => createBorderColor(props)};
  ${(props) => createBorderRadius(props)};
  ${(props) => createBorderWidth(props)};
  ${(props) => createFlex(props)};
  ${(props) => createPosition(props)};
  ${(props) => createText(props)};
  ${(props) => createDimension(props)};
`;
