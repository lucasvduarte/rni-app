import styled from "styled-components/native";
import { SkeletonProps } from "./type";
import { Skeleton } from "@rneui/themed";
import { createSpacing, createBorderRadius } from "../Ui";

export const SkeletonStyled = styled(Skeleton).attrs<SkeletonProps>(
  () => ({})
)<SkeletonProps>`
  ${(props) => createSpacing(props)};
  ${(props) => createBorderRadius(props)};
`;
