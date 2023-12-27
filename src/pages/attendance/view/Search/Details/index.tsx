import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Box, Button, FlatList, Text } from "../../../../../components";
import { SearchDetailsProps } from "../../../../../navigation/private/types";
import { TAnswers } from "../../../service/Search/type";
import Toast from "react-native-toast-message";
import { useMutation } from "react-query";
import { postSearch } from "../../../service/Search";
import { useAppSelector } from "../../../../../redux/hooks";
import { RootState } from "../../../../../redux/store";
import { useEffect, useState } from "react";
import { SearchItem } from "./Item";
import { formatList } from "./helps";

export const SearchDetails = ({ route }: SearchDetailsProps) => {
  const { data } = route.params;
  const { user } = useAppSelector((state: RootState) => {
    return state.auth;
  });
  const [answers, setAnswers] = useState<TAnswers[]>([]);

  useEffect(() => {
    setAnswers(formatList(data.listQuestions));
  }, []);

  const { mutate, isLoading } = useMutation({
    mutationFn: async () =>
      await postSearch(
        user?.cliente.cpfcnpj || "",
        data.guidcontrol,
        answers.length ? answers : formatList(data.listQuestions)
      ),
    onError: (error) => {
      Toast.show({
        type: "errorToast",
        props: { error },
      });
    },
    onSuccess: () => {
      Toast.show({
        type: "success",
        text2: "Perguntas respondidas com sucesso!",
      });
    },
  });

  const handleChange = (value: string, index: number) => {
    let answersAux: TAnswers[] = [...answers];
    answersAux[index].resposta = value;
    setAnswers(answersAux);
  };

  return (
    <Box px="xl" mb="2lg" flex={1}>
      <Text
        title="Ajude-nos a oferecer os melhores serviços a você, preenchendo nosso
        formulário de pesquisa. Será rápido e fácil."
        color="darkGrayGray78"
        fontSize="3xl"
      />
      <KeyboardAwareScrollView fadingEdgeLength={500} style={{ flex: 1 }}>
        <Box flex={1}>
          <FlatList
            data={data.listQuestions}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingVertical: 24 }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <SearchItem
                  item={item}
                  handleChange={(value) => handleChange(value, index)}
                />
              );
            }}
          />
        </Box>
      </KeyboardAwareScrollView>
      <Button
        title="Enviar"
        onPress={() => mutate()}
        mt="md"
        loading={isLoading}
        disabled={isLoading}
      />
    </Box>
  );
};
