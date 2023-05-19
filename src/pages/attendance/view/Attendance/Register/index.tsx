import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  TextInput,
  FlatList,
  Image,
  Icon,
  Select,
  Skeleton,
} from "../../../../../components";
import { RegisterAttendanceProps } from "../../../../../navigation/private/types";
import { useAppSelector } from "../../../../../redux/hooks";
import { RootState } from "../../../../../redux/store";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useImagePicker } from "../../../../../hooks";
import Toast from "react-native-toast-message";
import { useMutation, useQuery } from "react-query";
import { postComplete } from "../../../service/TechnicalAssistance";
import { formatPostComplete } from "./helpes";
import { Dimensions } from "react-native";
import { TListFile } from "../../../service/TechnicalAssistance/type";
import { getSubject } from "../../../service/Attendance";

const { width } = Dimensions.get("screen");

export const RegisterAttendance = ({ navigation }: RegisterAttendanceProps) => {
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const { uploadFile, sizeCurrentFile, removeSizeFile } = useImagePicker({
    maxSize: 25000000,
  });
  const { auth, attendance } = useAppSelector((state: RootState) => {
    return state;
  });
  const { files, listRegister } = attendance;
  const { enterpriseSelect, user } = auth;
  const [listFile, setListFile] = useState<TListFile[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: "getSubject",
    queryFn: () => getSubject(),
    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
  });

  const {
    mutate,
    isLoading: isLoadingMutate,
    isSuccess,
  } = useMutation({
    mutationFn: async () =>
      await postComplete(
        formatPostComplete(
          user?.cliente.cpfcnpj,
          enterpriseSelect,
          subject,
          description,
          listFile,
          listRegister
        )
      ).then(() => {
        setTimeout(() => {
          navigation.navigate("Attendance");
        }, 2000);
      }),

    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
    onSuccess: () => {
      Toast.show({
        type: "success",
        text2: "Chamado aberto com sucesso",
      });
    },
  });

  const handleFile = async () => {
    const { result, fileSystem, filename, typeFile } = await uploadFile();
    if (files.length > 5 || !result) {
      return;
    }

    setListFile((previus) => [
      ...previus,
      {
        filename: filename,
        uri: result.uri,
        arquivo:
          result.type === "video"
            ? `data:video/${typeFile};base64,${fileSystem}`
            : `data:image/${typeFile};base64,${result.base64}`,

        type: `${result.type}/${typeFile}`,
      },
    ]);
  };

  const removeFile = (index: number) => {
    let listFileAux = [...listFile];
    listFileAux.splice(index, 1);
    removeSizeFile(listFile[index].uri);
    setListFile(listFileAux);
  };

  if (isLoading) {
    return <Skeleton m="xl" height={400} borderRadius="xl" />;
  }

  return (
    <Box px="xl" pt="sm" mb="2lg" flex={1}>
      <KeyboardAwareScrollView fadingEdgeLength={500} style={{ flex: 1 }}>
        <Box alignItems="flex-end">
          <Text
            title="Adicionar anexo"
            fontSize="3xl"
            pb="xl"
            onPress={handleFile}
            fontWeight="bold"
            color="easternBlue"
            w={120}
          />
        </Box>

        <Text
          title={`Permitido anexar até ${sizeCurrentFile} MB entre vídeos e fotos`}
          fontSize="xl"
          pb="xl"
          color="error"
        />
        {!!listFile.length && (
          <FlatList
            data={listFile}
            keyExtractor={(item) => item.filename}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <Image
                  source={{}}
                  uri={item.uri}
                  borderRadius={8}
                  resizeMode="cover"
                  isVideo={item.type.split("/")[0] === "video"}
                  w={width / 4}
                  h={width / 4 - 12}
                  type="thumbnail"
                  mb="xl"
                >
                  <Icon
                    name="minus-circle"
                    type="material-community"
                    size={30}
                    iconColor="red"
                    onPress={() => removeFile(index)}
                    mb="2xl"
                    pl={width / 4 - 32}
                  />
                </Image>
              );
            }}
          />
        )}
        <TextInput
          placeholder="Descrição"
          size="large"
          multiline
          numberOfLines={4}
          value={description}
          onChangeText={(value) => setDescription(value)}
          maxLength={160}
          errorMessage={
            description.length < 20 ? "Mínimo de 20 caracteres" : ""
          }
        />
        <Box mt="md">
          <Select
            title="Assunto"
            value={subject}
            onChangeText={(value) => setSubject(value)}
            listValues={
              data?.data.result.map((item) => {
                return { title: item.assunto, value: item.assunto_salesforce };
              }) || []
            }
            size="large"
          />
        </Box>
      </KeyboardAwareScrollView>

      <Button
        title="Solicitar"
        onPress={() => mutate()}
        mt="md"
        loading={isLoadingMutate}
        disabled={isLoadingMutate || description.length < 20 || isSuccess}
      />
    </Box>
  );
};
