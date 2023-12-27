import styled from "styled-components/native";
import { SkeletonProps } from "./type";
import { Skeleton } from "@rneui/themed";
import { createSpacing } from "../Ui";

export const SkeletonStyled = styled(Skeleton).attrs<SkeletonProps>(
  () => ({})
)<SkeletonProps>`
  ${(props) => createSpacing(props)};
  border-radius: 10px;
`;
