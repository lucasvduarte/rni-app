import {
  Box,
  Contract,
  FlatList,
  ListDescription,
  Modal,
} from "../../../../components";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { SelectContractProps } from "../../../../navigation/private/types";
import { TItem } from "../../../../redux/modules/auth/type";

export const SelectContract = ({ navigation, route }: SelectContractProps) => {
  const { navigate } = route.params;
  const { enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const onPress = (item: TItem) => {
    navigation.navigate(navigate, { data: item });
  };

  const list = [
    { title: "Empreendimento", description: enterpriseSelect?.EMPDESCOM },
    { title: "Torre", description: enterpriseSelect?.TORCOD },
    { title: "Unidade", description: enterpriseSelect?.UNICOD },
  ];

  if (!navigate) {
    return (
      <Modal
        title="Error inesperado"
        titleBody="Desculpe pelo nosso erro"
        isVisible={true}
        onBackdropPress={() => navigation.goBack()}
        onPressPrimary={() => navigation.goBack()}
      />
    );
  }

  return (
    <Box flex={1} px="xl" mb="2lg">
      <FlatList
        data={list}
        keyExtractor={(item) => item.title}
        contentContainerStyle={{ paddingVertical: 24 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <ListDescription
              title={item.title}
              description={item?.description?.toString()}
            />
          );
        }}
      />
      <Contract onPress={(item) => onPress(item)} />
    </Box>
  );
};
