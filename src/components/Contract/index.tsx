import { Box } from "../Box";
import { Text } from "../Text";
import { Card } from "../Card";
import { FlatList } from "../FlashList";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { TItem } from "../../redux/modules/auth/type";
import { useEffect } from "react";
import { CardProps } from "../Card/type";

type TCardAttendance = {
  onPress: (value: TItem) => void;
};

export const Contract = ({ onPress }: TCardAttendance) => {
  const { user, enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const itemsFilter =
    user?.item.filter(
      (item) =>
        item.EMPCOD === enterpriseSelect?.EMPCOD &&
        item.UNICOD === enterpriseSelect?.UNICOD &&
        item.TORCOD === enterpriseSelect?.TORCOD
    ) || [];

  useEffect(() => {
    if (itemsFilter.length === 1) {
      onPress(itemsFilter[0]);
    }
  }, []);

  return (
    <Box flex={1} my="xl">
      <Text
        color="moderateGreen"
        fontWeight="bold"
        title="Contratos"
        fontSize="5xl"
      />
      <Text
        mb="xl"
        pt={2}
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
              mb="xl"
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

export const ContractInformation = (props: CardProps) => {
  const { enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const list = [
    { title: "Empreendimento", description: enterpriseSelect?.EMPDESCOM },
    { title: "Torre", description: enterpriseSelect?.TORCOD },
    { title: "Unidade", description: enterpriseSelect?.UNICOD },
  ];

  return (
    <Card bg="veryLightGraySuvaGrey" borderRadius="xl" py="md" {...props}>
      {list.map((item, index) => {
        return (
          <Box
            key={item.title}
            flexDir="row"
            alignItems="flex-end"
            pt={!index ? "none" : 2}
          >
            <Text
              title={`${item.title}: `}
              fontSize="3xl"
              fontWeight="bold"
              color="blackWhite"
            />
            <Text
              title={item?.description?.toString()}
              fontSize="xl"
              flex={1}
              color="darkGrayGray78"
            />
          </Box>
        );
      })}
    </Card>
  );
};
