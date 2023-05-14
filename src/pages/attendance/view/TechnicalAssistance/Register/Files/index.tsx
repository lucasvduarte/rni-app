import React from "react";
import { Box, Skeleton } from "../../../../../../components";
import { TechnicalAssistanceFilesProps } from "../../../../../../navigation/private/types";
import { useAppSelector } from "../../../../../../redux/hooks";
import { RootState } from "../../../../../../redux/store";

export const Files = ({ navigation }: TechnicalAssistanceFilesProps) => {
  const { files } = useAppSelector((state: RootState) => {
    return state.attendance;
  });

  return <Box px="xl" flex={1}></Box>;
};
