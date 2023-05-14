import React from "react";
import {
  Box,
  Text,
  Card,
  FlatList,
  Button,
  Image,
  Icon,
} from "../../../../../../components";
import { TechnicalAssistanceSummaryProps } from "../../../../../../navigation/private/types";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hooks";
import { RootState } from "../../../../../../redux/store";
import { setRemoveRegister } from "../../../../../../redux/modules/attendance/action";

export const Summary = ({ navigation }: TechnicalAssistanceSummaryProps) => {
  const dispatch = useAppDispatch();
  const { listRegister } = useAppSelector((state: RootState) => {
    return state.attendance;
  });

  return (
    <Box px="lg" pb="2lg" flex={1}>
      <Box flex={1}>
        <Text
          title="Adicionar novos itens"
          color="moderateGreen"
          fontWeight="700"
          fontSize="3xl"
          pl="xs"
          w={160}
          onPress={() => navigation.navigate("TechnicalAssistanceCategory")}
        />
        <FlatList
          data={listRegister}
          keyExtractor={(_item, index) => index.toString()}
          contentContainerStyle={{ paddingVertical: 24 }}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={400}
          renderItem={({ item, index }) => {
            return (
              <Card
                borderRadius="xl"
                bg="whiteDarkGray"
                shadow="md"
                shadowColor="moderateGreen"
                borderColor="veryLightGray"
                mb="xl"
                mx="xs"
              >
                <Box
                  alignContent="flex-end"
                  alignSelf="flex-end"
                  mt="-lg"
                  mr="-lg"
                >
                  <Icon
                    name="minus-circle"
                    type="material-community"
                    size={30}
                    iconColor="red"
                    onPress={() => dispatch(setRemoveRegister(index))}
                  />
                </Box>
                <Box flexDir="row" alignItems="center" pr="xl" pb="xl" mt="-lg">
                  <Image
                    source={{
                      uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1",
                      width: 88,
                      height: 80,
                    }}
                    borderRadius={8}
                    mr="xl"
                    resizeMode="cover"
                  />

                  <Text
                    title={item.item.titulo}
                    color="moderateGreen"
                    fontWeight="700"
                    fontSize="3xl"
                    flex={1}
                  />
                </Box>
                <Text
                  title={item.category.titulo}
                  color="moderateGreen"
                  fontWeight="700"
                  fontSize="3xl"
                  flex={1}
                />
                <Text
                  title={item.section.titulo}
                  color="moderateGreen"
                  fontWeight="700"
                  fontSize="3xl"
                  flex={1}
                />
              </Card>
            );
          }}
        />
      </Box>
      <Button
        title="Continuar"
        onPress={() => navigation.navigate("TechnicalAssistanceFiles")}
        mt="md"
      />
    </Box>
  );
};
