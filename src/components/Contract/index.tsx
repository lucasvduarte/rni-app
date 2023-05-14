import { Box } from "../Box";
import { Text } from "../Text";
import { Card } from "../Card";
import { FlatList } from "../FlashList";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { TItem } from "../../redux/modules/auth/type";

type TCardAttendance = {
  onPress: (value: TItem) => void;
};

export const Contract = (props: TCardAttendance) => {
  const { user, enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { onPress } = props;

  const itemsFilter =
    user?.item.filter(
      (item) =>
        item.EMPCOD === enterpriseSelect?.EMPCOD &&
        item.UNICOD === enterpriseSelect?.UNICOD &&
        item.TORCOD === enterpriseSelect?.TORCOD
    ) || [];

  return (
    <Box flex={1} my="xl">
      <Text
        color="moderateGreen"
        fontWeight="bold"
        title="Contratos"
        fontSize="5xl"
      />
      <Text
        mb="md"
        fontSize="xl"
        title="Selecione abaixo o contrato que deseja consultar."
      />

      <FlatList
        data={itemsFilter}
        keyExtractor={(item) => item.CTRCOD.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Card
              borderRadius="xl"
              shadow="sm"
              shadowColor="moderateGreen"
              borderColor="veryLightGray"
              borderWidth={1}
              onPress={() => onPress(item)}
              mb="md"
            >
              <Text
                color="moderateGreen"
                fontWeight="bold"
                fontSize="3xl"
                title={item.CTRCLATIP_DES}
              />
            </Card>
          );
        }}
      />
    </Box>
  );
};
