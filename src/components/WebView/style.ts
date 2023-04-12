import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";

export const Indicator = styled(ActivityIndicator).attrs(() => ({
  size: "large",
  color: "#0085CA",
}))`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.whiteBlack};
`;
