import styled from "styled-components/native";
import { CheckBox } from "@rneui/themed";
import { CheckBoxProps } from "./type";
import {
  createBorderRadius,
  createSpacing,
  createBorderWidth,
  createShadow,
  createText,
} from "../Ui";

export const CheckBoxStyled = styled(CheckBox).attrs<CheckBoxProps>(
  (props) => ({
    containerStyle: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      marginLeft: 0,
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      backgroundColor: "transparent",
      ...createBorderRadius(props, true),
      ...createSpacing(props, true),
      ...createBorderWidth(props, true),
      ...createShadow(props),
      ...createText(props, true),
    },
    fontFamily: "Inter_700Bold",
  })
)<CheckBoxProps>``;
