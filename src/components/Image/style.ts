import styled from "styled-components/native";
import { ImageProps } from "./type";
import {
  createSpacing,
  createBorderColor,
  createBorderRadius,
  createBorderWidth,
  createFlex,
  createPosition,
  createDimension,
} from "../Ui";

export const ImageStyled = styled.Image<ImageProps>`
  ${(props) => createSpacing(props)};
  ${(props) => createBorderColor(props)};
  ${(props) => createBorderRadius(props)};
  ${(props) => createBorderWidth(props)};
  ${(props) => createFlex(props)};
  ${(props) => createPosition(props)};
  ${(props) => createDimension(props)};
`;

export const ImageBackgroundStyled = styled.ImageBackground<ImageProps>`
  background-color: ${({ bg, theme }) => (bg ? theme.colors[bg] : null)};
  ${(props) => createSpacing(props)};
  ${(props) => createBorderColor(props)};
  ${(props) => createBorderRadius(props)};
  ${(props) => createBorderWidth(props)};
  ${(props) => createFlex(props)};
  ${(props) => createPosition(props)};
  ${(props) => createDimension(props)};
`;
