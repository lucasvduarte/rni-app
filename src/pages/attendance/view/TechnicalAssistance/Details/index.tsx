import Toast from "react-native-toast-message";
import { useMutation, useQuery } from "react-query";
import {
  BottomSheet,
  Box,
  Button,
  Card,
  Skeleton,
  Text,
  TextInput,
  Image,
  FlatList,
} from "../../../../../components";
import {
  getFeedTask,
  postAttendance,
  putAttendance,
} from "../../../service/Attendance";
import { TechnicalAssistanceDetailsProps } from "../../../../../navigation/private/types";
import { useEffect, useState } from "react";
import {
  isToSchedule,
  isConfirmSchedule,
  isSchedulingText,
} from "../../../../../components/Card/Attendance/helps";
import { formatDatePtBr, formatDatePtBrHr } from "../../../../../config/utils";
import { formatPostAttendance } from "./helps";
import { useAppSelector } from "../../../../../redux/hooks";
import { RootState } from "../../../../../redux/store";
import { TClient } from "../../../../account/services/User/type";
import { TUpdateAttendance } from "../../../service/Attendance/type";
import { TItem } from "../../../../../redux/modules/auth/type";

export const TechnicalAssistanceDetails = ({
  navigation,
  route,
}: TechnicalAssistanceDetailsProps) => {
  const { data, isConcluded } = route.params;
  const [visibleBottomSheet, setVisibleBottomSheet] = useState(false);
  const [motive, setMotive] = useState("");
  const { user, enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });
  const { data: dataFeed, isLoading } = useQuery({
    queryKey: "getFeedTask",
    queryFn: () => getFeedTask(data.id),
    onError: (error) => {
      Toast.show({
        type: "errorToast",
        props: { error },
      });
    },
  });

  const { mutate, isLoading: isLoadingMutate } = useMutation({
    mutationFn: async (value?: Omit<TUpdateAttendance, "id">) => {
      await putAttendance({
        id: data.id,
        visualizado_pelo_cliente__c: true,
        status: "Concluído",
        faseparam__c: "Caso concluído",
        ...value,
      }).then(() => {
        if (value?.resolvido_portal__c) {
          Toast.show({
            type: "success",
            text1: "Novo chamado aberto",
          });
          setTimeout(() => {
            navigation.navigate("Attendance");
          }, 2000);
        }
      });
    },
    onError: (error) => {
      Toast.show({
        type: "errorToast",
        props: { error },
      });
    },
  });

  useEffect(() => {
    if (!data.visualizado_pelo_cliente__c) {
      mutate({});
    }
  }, []);

  const {
    mutate: mutatePostAttendance,
    isLoading: isLoadingMutatePostAttendance,
  } = useMutation({
    mutationFn: async () => {
      await postAttendance(
        formatPostAttendance(
          user?.cliente as TClient,
          data,
          motive,
          enterpriseSelect as TItem
        )
      );
    },
    onError: (error) => {
      Toast.show({
        type: "errorToast",
        props: { error },
      });
    },
    onSuccess: () => {
      setVisibleBottomSheet(false);
    },
  });

  const onPressNotSolved = async () => {
    await mutatePostAttendance();
    await mutate({ resolvido_portal__c: true });
  };

  const onPressSolved = () => {
    if ((data?.manutencao_executada__c || "").toLocaleLowerCase() === "sim") {
      return navigation.navigate("SatisfactionTechnicalAssistance", { data });
    }
    return mutate({ resolvido_portal__c: true });
  };

  const isFile = !!dataFeed?.data?.records[0]?.feeds?.records.length;

  if (isLoading || isLoadingMutate) {
    return <Skeleton m="xl" height={400} />;
  }

  return (
    <Box px="xl" mb="2lg" flex={1}>
      <Box flex={1}>
        <FlatList
          data={dataFeed?.data?.records[0]?.workorders?.records}
          ListHeaderComponent={
            <>
              <Card
                borderRadius="xl"
                shadow="sm"
                shadowColor="blackWhite"
                p="none"
                bg="moderateGreen"
                mb="lg"
              >
                <Box py="sm" px="xl">
                  <Box flexDir="row" justifyContent="space-between">
                    <Text title={data.status} color="white" fontSize="3xl" />
                    <Text
                      title={formatDatePtBr(data.createddate)}
                      color="white"
                      fontSize="2xl"
                    />
                  </Box>

                  {isSchedulingText(data) && !isConcluded && (
                    <Box flexDir="row" alignItems="flex-end" pt="xs">
                      <Text
                        title="Agendado para: "
                        color="white"
                        fontSize="3xl"
                      />
                      <Text
                        title={`${
                          isConfirmSchedule(data)
                            ? "Agendamento disponível"
                            : "Agendado"
                        } para ${formatDatePtBrHr(
                          data?.data_hora_do_agendamento_da_visita__c,
                          "ás"
                        )}`}
                        color="prussianBlue"
                        fontWeight="bold"
                        fontSize="lg"
                        flex={1}
                      />
                    </Box>
                  )}
                </Box>
                <Card borderRadius="lg" bg="white" borderWidth={0}>
                  <Box
                    flexDir="row"
                    justifyContent="space-between"
                    alignItems="flex-end"
                    mt="-md"
                    mb="sm"
                  >
                    <Text
                      title={data.assunto_portal__c}
                      color="prussianBlue"
                      fontWeight="bold"
                      fontSize="3xl"
                      flex={1}
                    />

                    <Text
                      title={data.casenumber}
                      color="moderateGreen"
                      pt="sm"
                      fontSize="3xl"
                    />
                  </Box>
                  <Text
                    title={`Data Solicitação: ${formatDatePtBr(
                      data.createddate
                    )}`}
                    color="prussianBlue"
                    fontSize="2xl"
                  />
                  <Text
                    title={`${data.contrato__r?.Empreendimento__r?.Empreendimento__c} - ${data.contrato__r?.Torre_Quadra__r?.Name} ${data.contrato__r?.Unidade__r?.Name}`}
                    color="prussianBlue"
                    py="sm"
                    fontSize="2xl"
                  />

                  {data.description && (
                    <Text
                      title={data.description}
                      fontSize="xl"
                      color="darkGrayGray78"
                    />
                  )}

                  {isFile && (
                    <Text
                      title="Comentários / Anexo"
                      fontSize="3xl"
                      color="darkGrayGray78"
                      fontWeight="bold"
                      py="sm"
                    />
                  )}
                  <Box
                    flexDir="row"
                    flexWrap="wrap"
                    mb={isFile ? "-xl" : "none"}
                  >
                    {dataFeed?.data?.records[0]?.feeds?.records.map(
                      (item, index) => {
                        const uri =
                          item.Body.split('<a href="')[1].split('" target')[0];
                        if (!uri) return null;
                        return (
                          <Image
                            source={{ uri }}
                            uri={uri}
                            borderRadius={8}
                            mr="xl"
                            mb="xl"
                            resizeMode="cover"
                            w={88}
                            h={80}
                            isVideo={uri.split(".").pop() === "mov"}
                            key={index.toString()}
                            type="thumbnail"
                          />
                        );
                      }
                    )}
                  </Box>
                </Card>
              </Card>
              {!!dataFeed?.data?.records[0]?.workorders?.records.length && (
                <Text
                  title="Itens"
                  color="prussianBlue"
                  mb="sm"
                  mt="md"
                  fontSize="3xl"
                  fontWeight="bold"
                />
              )}
            </>
          }
          keyExtractor={(item) => item.Id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <Card
                borderRadius="xl"
                bg="whiteDarkGray"
                shadow="md"
                shadowColor="moderateGreen"
                borderColor="veryLightGray"
                p="none"
                mb="lg"
              >
                <Box flexDir="row" alignItems="center" pr="xl">
                  {item.Imagem && (
                    <Image
                      source={{
                        uri: item.Imagem,
                        width: 88,
                        height: 80,
                      }}
                      borderRadius={8}
                      mr="xl"
                      resizeMode="cover"
                    />
                  )}

                  <Text
                    title={item.Itens__c}
                    color="moderateGreen"
                    fontWeight="700"
                    fontSize="3xl"
                    p="xl"
                    flex={1}
                  />
                </Box>
              </Card>
            );
          }}
        />
      </Box>
      {isToSchedule(data) && !isConfirmSchedule(data) && !isConcluded && (
        <Button
          title="Agendar visita técnica"
          onPress={() => navigation.navigate("Scheduling", { data })}
          bg="pantone"
          size="md"
        />
      )}

      {isConfirmSchedule(data) && !isConcluded && (
        <Button
          title="Confirmar"
          onPress={() => navigation.navigate("Responsible", { data })}
          bg="pantone"
          size="md"
        />
      )}
      {data?.status.toLowerCase() !== "em análise" && !isConcluded && (
        <>
          <Button
            title="Marca como resolvido"
            type="outline"
            onPress={onPressSolved}
            loading={isLoading}
            disabled={isLoading}
            my="xl"
          />
          <Button
            title="Marca como não resolvido"
            onPress={() => setVisibleBottomSheet(true)}
            loading={isLoading}
            disabled={isLoading}
          />
        </>
      )}
      <BottomSheet
        visible={visibleBottomSheet}
        onBackdropPress={() => setVisibleBottomSheet(false)}
      >
        <Card pb="3xl" borderRadius="xl">
          <Text
            title="Confirma como não resolvido será aberto um novo chamado e concluído esse."
            pb="xl"
            color="easternBlue"
            fontSize="2xl"
            fontWeight="bold"
          />

          <TextInput
            placeholder="Motivo"
            size="large"
            multiline
            numberOfLines={4}
            value={motive}
            onChangeText={(item) => setMotive(item)}
            maxLength={160}
            errorMessage={
              motive.length < 20 ? "Motivo abaixo de 20 caracteres" : ""
            }
          />
          <Button
            title="Cancelar"
            onPress={() => setVisibleBottomSheet(false)}
            mt="2xl"
            isBold
            bg="moderateGreen"
            type="outline"
          />
          <Button
            title="Confirma"
            onPress={onPressNotSolved}
            mt="xl"
            isBold
            bg="moderateGreen"
            disabled={motive.length < 20}
            loading={isLoadingMutatePostAttendance}
          />
        </Card>
      </BottomSheet>
    </Box>
  );
};
