import styled from "styled-components/native";
import { BoxProps } from "./type";
import {
  createSpacing,
  createBorderColor,
  createBorderRadius,
  createBorderWidth,
  createFlex,
  createPosition,
  createShadow,
  createDimension,
} from "../Ui";

export const ViewStyled = styled.View<BoxProps>`
  background-color: ${({ bg, theme }) => (bg ? theme.colors[bg] : null)};
  ${(props) => createSpacing(props)};
  ${(props) => createShadow(props)};
  ${(props) => createBorderColor(props)};
  ${(props) => createBorderRadius(props)};
  ${(props) => createBorderWidth(props)};
  ${(props) => createFlex(props)};
  ${(props) => createPosition(props)};
  ${(props) => createDimension(props)};
`;
