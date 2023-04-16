import styled from "styled-components/native";
import { LinearProgressProps } from "./type";
import { LinearProgress } from "@rneui/themed";

export const LinearProgressStyled = styled(
  LinearProgress
).attrs<LinearProgressProps>(() => ({}))<LinearProgressProps>`
  height: 16px;
  border-radius: 10px;
`;
