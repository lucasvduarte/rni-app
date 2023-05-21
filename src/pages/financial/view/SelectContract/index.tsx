import {
  Box,
  Contract,
  ContractInformation,
  Modal,
} from "../../../../components";
import { SelectContractProps } from "../../../../navigation/private/types";
import { TItem } from "../../../../redux/modules/auth/type";

export const SelectContract = ({ navigation, route }: SelectContractProps) => {
  const { navigate } = route.params;

  const onPress = (item: TItem) => {
    navigation.navigate(navigate, { data: item });
  };

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
      <ContractInformation />
      <Contract onPress={(item) => onPress(item)} />
    </Box>
  );
};
