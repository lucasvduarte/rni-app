import React from "react";
import { Image } from "react-native";
import {
  Box,
  Text,
  Card,
  FlatList,
  Button,
} from "../../../../../../components";
import { TechnicalAssistanceSummaryProps } from "../../../../../../navigation/private/types";
import { useAppSelector } from "../../../../../../redux/hooks";
import { RootState } from "../../../../../../redux/store";

export const Summary = ({ navigation }: TechnicalAssistanceSummaryProps) => {
  const { listRegister } = useAppSelector((state: RootState) => {
    return state.attendance;
  });

  return (
    <Box px="xl" flex={1}>
      <Box flex={1}>
        <Text
          title="Adicionar novos itens"
          color="moderateGreen"
          fontWeight="700"
          fontSize="3xl"
          onPress={() => navigation.navigate("TechnicalAssistanceCategory")}
        />
        <FlatList
          data={listRegister}
          keyExtractor={(_item, index) => index.toString()}
          contentContainerStyle={{ paddingVertical: 24 }}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={400}
          renderItem={({ item }) => {
            return (
              <Card
                borderRadius="xl"
                bg="whiteDarkGray"
                shadow="md"
                shadowColor="moderateGreen"
                borderColor="veryLightGray"
                p="none"
                mb="xl"
              >
                <Box flexDir="row" alignItems="center" pr="xl" pb="xl">
                  <Image
                    source={{
                      uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1",
                      width: 88,
                      height: 80,
                    }}
                    style={{ borderRadius: 10, marginRight: 16 }}
                    resizeMode="contain"
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
                  px="xl"
                  flex={1}
                />
                <Text
                  title={item.section.titulo}
                  color="moderateGreen"
                  fontWeight="700"
                  fontSize="3xl"
                  px="xl"
                  flex={1}
                  pb="xl"
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
