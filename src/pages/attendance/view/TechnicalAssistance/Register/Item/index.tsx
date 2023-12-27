import React from "react";
import {
  Box,
  Text,
  Card,
  FlatList,
  Skeleton,
  Image,
} from "../../../../../../components";
import { TechnicalAssistanceItemProps } from "../../../../../../navigation/private/types";
import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import { getItemFilter } from "../../../../service/TechnicalAssistance";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hooks";
import { RootState } from "../../../../../../redux/store";
import { TItem } from "../../../../service/TechnicalAssistance/type";
import { setItem } from "../../../../../../redux/modules/attendance/action";

export const Item = ({ navigation }: TechnicalAssistanceItemProps) => {
  const dispatch = useAppDispatch();
  const { section } = useAppSelector((state: RootState) => {
    return state.attendance;
  });

  const { data, isLoading } = useQuery({
    queryKey: "getItemFilter",
    queryFn: () => getItemFilter(section?.id || 0),
    onError: (error) => {
      Toast.show({
        type: "errorToast",
        props: { error },
      });
    },
  });

  const onPress = (item: TItem) => {
    dispatch(setItem(item));
    navigation.navigate("TechnicalAssistanceSummary");
  };

  if (isLoading) {
    return <Skeleton m="xl" size={6} height={80} />;
  }

  return (
    <Box px="xl" flex={1}>
      <FlatList
        data={data?.data.result}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingVertical: 24 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Card
              borderRadius="xl"
              bg="whiteDarkGray"
              shadow="md"
              shadowColor="moderateGreen"
              borderColor="veryLightGray"
              onPress={() => onPress(item)}
              p={item.imagem ? "none" : "xl"}
              mb="lg"
            >
              <Box flexDir="row" alignItems="center" pr="xl">
                {item.imagem && (
                  <Image
                    source={{
                      uri: item.imagem,
                      width: 88,
                      height: 80,
                    }}
                    borderRadius={8}
                    mr="xl"
                    resizeMode="cover"
                  />
                )}

                <Text
                  title={item.titulo}
                  color="moderateGreen"
                  fontWeight="700"
                  fontSize="3xl"
                  flex={1}
                />
              </Box>
            </Card>
          );
        }}
      />
    </Box>
  );
};
