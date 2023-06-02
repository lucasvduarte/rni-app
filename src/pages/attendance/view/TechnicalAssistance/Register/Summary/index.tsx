import React, { useState } from "react";
import {
  Box,
  Text,
  Card,
  FlatList,
  Button,
  Image,
  Icon,
  Modal,
} from "../../../../../../components";
import { TechnicalAssistanceSummaryProps } from "../../../../../../navigation/private/types";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hooks";
import { RootState } from "../../../../../../redux/store";
import { setRemoveRegister } from "../../../../../../redux/modules/attendance/action";
import Toast from "react-native-toast-message";

export const Summary = ({ navigation }: TechnicalAssistanceSummaryProps) => {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(-1);
  const { listRegister } = useAppSelector((state: RootState) => {
    return state.attendance;
  });

  const onPress = (index: number) => {
    setVisible(index);
  };

  const removeRegister = () => {
    dispatch(setRemoveRegister(visible));
    setVisible(-1);
    Toast.show({
      type: "infoBottom",
      text2: "Item removido",
    });
  };

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
                    onPress={() => onPress(index)}
                  />
                </Box>
                <Box flexDir="row" alignItems="center" pr="xl" pb="xl" mt="-lg">
                  {item.item.imagem && (
                    <Image
                      source={{
                        uri: item.item.imagem,
                        width: 88,
                        height: 80,
                      }}
                      borderRadius={8}
                      mr="xl"
                      resizeMode="cover"
                    />
                  )}

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
      <Modal
        title="Deseja deletar esse item?"
        isVisible={visible > -1}
        onBackdropPress={() => setVisible(-1)}
        onPressSecondary={() => setVisible(-1)}
        onPressPrimary={removeRegister}
      />
    </Box>
  );
};
