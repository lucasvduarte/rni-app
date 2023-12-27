import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  TextInput,
  FlatList,
  Image,
  Icon,
  Modal,
} from "../../../../../../components";
import { TechnicalAssistanceFilesProps } from "../../../../../../navigation/private/types";
import { useAppSelector } from "../../../../../../redux/hooks";
import { RootState } from "../../../../../../redux/store";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useImagePicker } from "../../../../../../hooks";
import Toast from "react-native-toast-message";
import { useMutation } from "react-query";
import { postComplete } from "../../../../service/TechnicalAssistance";
import { formatPostComplete } from "./helpes";
import { Dimensions } from "react-native";
import { TListFile } from "../../../../service/TechnicalAssistance/type";

const { width } = Dimensions.get("screen");

const MAX_SIZE = 25000000;

export const Files = ({ navigation }: TechnicalAssistanceFilesProps) => {
  const [description, setDescription] = useState("");
  const { uploadFile, sizeCurrentFile, removeSizeFile } = useImagePicker({
    maxSize: MAX_SIZE,
  });
  const { auth, attendance } = useAppSelector((state: RootState) => {
    return state;
  });
  const { files, listRegister } = attendance;
  const { enterpriseSelect, user } = auth;
  const [listFile, setListFile] = useState<TListFile[]>([]);
  const [visible, setVisible] = useState(-1);

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: async () =>
      await postComplete(
        formatPostComplete(
          user?.cliente.cpfcnpj,
          enterpriseSelect,
          description,
          listFile,
          listRegister
        )
      ).then(() => {
        setTimeout(() => {
          navigation.navigate("TechnicalAssistance");
        }, 2000);
      }),

    onError: (error) => {
      Toast.show({
        type: "errorToast",
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
    const { result, formattedFile } = await uploadFile();

    if (files.length > 5 || !result) {
      return;
    }
    setListFile((previus) => [...previus, { ...formattedFile }]);
  };

  const removeFile = () => {
    let listFileAux = [...listFile];
    listFileAux.splice(visible, 1);
    removeSizeFile(listFile[visible].uri);
    setListFile(listFileAux);
    setVisible(-1);
    Toast.show({
      type: "infoBottom",
      text2: "Item removido",
    });
  };

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
                    onPress={() => setVisible(index)}
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
      </KeyboardAwareScrollView>

      <Button
        title="Solicitar"
        onPress={() => mutate()}
        mt="md"
        loading={isLoading}
        disabled={isLoading || description.length < 20 || isSuccess}
      />
      <Modal
        title="Deseja deletar esse item?"
        isVisible={visible > -1}
        onBackdropPress={() => setVisible(-1)}
        onPressSecondary={() => setVisible(-1)}
        onPressPrimary={removeFile}
      />
    </Box>
  );
};
