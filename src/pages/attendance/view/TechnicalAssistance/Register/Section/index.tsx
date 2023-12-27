import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Card,
  FlatList,
  Skeleton,
} from "../../../../../../components";
import { TechnicalAssistanceSectionProps } from "../../../../../../navigation/private/types";
import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import { getSectionFilter } from "../../../../service/TechnicalAssistance";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hooks";
import { RootState } from "../../../../../../redux/store";
import { TSection } from "../../../../service/TechnicalAssistance/type";
import { setSection } from "../../../../../../redux/modules/attendance/action";

export const Section = ({ navigation }: TechnicalAssistanceSectionProps) => {
  const dispatch = useAppDispatch();
  const { category, section } = useAppSelector((state: RootState) => {
    return state.attendance;
  });
  const [dataSection, setDataSection] = useState<TSection[]>([]);
  const { isLoading, isFetched } = useQuery({
    queryKey: "getSectionFilter",
    queryFn: () => getSectionFilter(category?.id || 0),
    onError: (error) => {
      Toast.show({
        type: "errorToast",
        props: { error },
      });
    },
    onSuccess: (data) => {
      setDataSection(data.data.result);
    },
  });

  useEffect(() => {
    setDataSection((previus) => [...previus]);
  }, [section]);

  const onPress = (item: TSection) => {
    dispatch(setSection(item));
    navigation.navigate("TechnicalAssistanceItem");
  };

  if (isLoading) {
    return <Skeleton m="xl" size={6} height={80} />;
  }

  return (
    <Box px="xl" flex={1}>
      <FlatList
        data={dataSection}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingVertical: 24 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const isSelect = section?.id === item.id;
          return (
            <Card
              borderRadius="xl"
              bg={isSelect ? "moderateGreen" : "whiteDarkGray"}
              shadow="md"
              shadowColor="moderateGreen"
              borderColor="veryLightGray"
              mb="lg"
              onPress={() => onPress(item)}
            >
              <Text
                title={item.titulo}
                color={isSelect ? "white" : "moderateGreen"}
                fontWeight="700"
                fontSize="3xl"
              />
            </Card>
          );
        }}
      />
    </Box>
  );
};
