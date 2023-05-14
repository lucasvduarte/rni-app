import React from "react";
import { Box, Skeleton } from "../../../../../components";
import { SchedulingProps } from "../../../../../navigation/private/types";

export const Scheduling = ({ route, navigation }: SchedulingProps) => {
  const { data } = route.params;

  return <Box px="xl" flex={1}></Box>;
};
