import React from "react";
import {
  Box,
  Text,
  Card,
  FlatList,
  Skeleton,
} from "../../../../../../components";
import { TechnicalAssistanceCategoryProps } from "../../../../../../navigation/private/types";
import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import { getCategory } from "../../../../service/TechnicalAssistance";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hooks";
import { RootState } from "../../../../../../redux/store";
import { TCategory } from "../../../../service/TechnicalAssistance/type";
import { setCategory } from "../../../../../../redux/modules/attendance/action";

export const Category = ({ navigation }: TechnicalAssistanceCategoryProps) => {
  const dispatch = useAppDispatch();
  const { attendance, auth } = useAppSelector((state: RootState) => {
    return state;
  });
  const { enterpriseSelect, user } = auth;
  const { category } = attendance;

  const { data, isLoading } = useQuery({
    queryKey: "getCategory",
    queryFn: () => getCategory(),
    onError: (error) => {
      Toast.show({
        type: "errorToast",
        props: { error },
      });
    },
  });

  const formatList = (value: TCategory[] | undefined) => {
    if (!value) {
      return [];
    }
    return value.filter((item) => {
      const isVertical = item.tipoempreendimento?.toLowerCase() === "vertical";
      const isHorizontal =
        item.tipoempreendimento?.toLowerCase() === "horizontal";
      const enterpriseType = (enterpriseSelect?.AUX5 || "")
        .toLowerCase()
        .includes("vertical");
      if (user?.cliente.sindico) {
        return item.isversindico;
      }
      if (!!item.tipoempreendimento && !isVertical && !isHorizontal) {
        return true;
      }
      return enterpriseType ? isVertical : isHorizontal;
    });
  };

  const onPress = (item: TCategory) => {
    dispatch(setCategory(item));
    navigation.navigate("TechnicalAssistanceSection");
  };

  if (isLoading) {
    return <Skeleton m="xl" size={6} height={80} />;
  }

  return (
    <Box px="xl" flex={1}>
      <FlatList
        data={formatList(data?.data.result)}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingVertical: 24 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const isSelect = category?.id === item.id;
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
