import styled from "styled-components/native";
import { IconProps } from "./type";
import { Icon } from "@rneui/themed";
import {
  createSpacing,
  createBorderRadius,
  createFlex,
  createPosition,
  createDimension,
} from "../Ui";

export const IconStyled = styled(Icon).attrs<IconProps>((props) => ({
  iconStyle: {
    ...createSpacing(props, true),
    ...createBorderRadius(props, true),
    ...createFlex(props, true),
    ...createPosition(props),
    ...createDimension(props, true),
  },
  color: props.colorStyle,
}))<IconProps>``;
