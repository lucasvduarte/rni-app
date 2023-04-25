import { useMutation } from "react-query";
import {
  Box,
  Button,
  Card,
  FlatList,
  Skeleton,
  Text,
} from "../../../../components";
import Toast from "react-native-toast-message";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { postDocuments } from "../../services/Document";
import { useEffect } from "react";
import { DocumentPropertyProps } from "../../../../navigation/private/types";
import { formateLisDocument } from "./helps";
import { formatDatePtBr } from "../../../../config/utils";

export const DocumentProperty = ({ navigation }: DocumentPropertyProps) => {
  const { enterpriseSelect, user } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { mutate, data, isLoading } = useMutation({
    mutationFn: () =>
      postDocuments(
        "NOVA VENDA DESEMBOLSO",
        user?.cliente.cpfcnpj || "",
        `${enterpriseSelect?.EMPCOD}-${(
          "0000" + enterpriseSelect?.NSCCOD
        ).slice(-4)}`
      ),
    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
  });

  useEffect(() => {
    mutate();
  }, []);

  if (isLoading) {
    return <Skeleton size={4} height={60} mx="xl" my="lg" borderRadius="xl" />;
  }

  return (
    <Box flex={1}>
      <FlatList
        data={formateLisDocument(data?.data?.data[0])}
        keyExtractor={(item) => item.sr_id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 16,
        }}
        renderItem={({ item }) => {
          return (
            <Card
              borderRadius="xl"
              bg="whiteDarkGray"
              borderWidth={1}
              shadow="sm"
              my="lg"
            >
              <Text
                title={item.vc_descricao}
                fontWeight="bold"
                fontSize="2xl"
              />

              <Text title={formatDatePtBr(item.ts_cadastro)} py="sm" />

              <Text
                title="Baixar"
                onPress={() => {
                  navigation.navigate("DocumentDetailsProperty", {
                    data: item,
                  });
                }}
                color="easternBlue"
                fontWeight="bold"
                fontSize="xl"
                w={50}
              />
            </Card>
          );
        }}
      />
    </Box>
  );
};
