import styled from "styled-components/native";
import { Input, InputProps } from "@rneui/themed";
import { TextInputProps } from "./type";
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

export const TextInputStyled = styled(Input).attrs<InputProps>({
  containerStyle: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  inputStyle: { padding: 0, marginHorizontal: 0 },
  style: { padding: 0, marginHorizontal: 0 },
})<TextInputProps>`
  ${(props) => createSpacing(props)};
  ${(props) => createShadow(props)};
  ${(props) => createBorderColor(props)};
  ${(props) => createBorderRadius(props)};
  ${(props) => createBorderWidth(props)};
  ${(props) => createPosition(props)};
  ${(props) => createFlex(props)};
  ${(props) => createDimension(props)};
  font-family: "Inter_400Regular";
`;
