import styled from "styled-components/native";
import { ListItemProps } from "./type";
import { ListItem } from "@rneui/base";
import {
  createSpacing,
  createBorderRadius,
  createBorderWidth,
  createShadow,
  createText,
} from "../Ui";

export const ListItemStyled = styled(ListItem).attrs<ListItemProps>(
  (props) => ({
    containerStyle: {
      backgroundColor: "transparent",
      ...createBorderRadius(props, true),
      ...createSpacing(props, true),
      ...createBorderWidth(props, true),
      ...createShadow(props),
      ...createText(props, true),
    },
  })
)<ListItemProps>`
  font-family: "Inter_100Thin";
`;
