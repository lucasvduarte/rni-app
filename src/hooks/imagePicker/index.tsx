import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { Platform, Alert } from "react-native";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";

type TUseImagePicker = {
  maxSize?: number;
};

type TFormattedFile = {
  filename: string;
  uri: string;
  arquivo: string;
  type: string;
  pasta: string;
};

const updateFailed = {
  fileSystem: undefined,
  result: undefined,
  fileSize: 0,
  filename: "",
  typeFile: "",
  formattedFile: undefined,
};

export const useImagePicker = ({ maxSize = 0 }: TUseImagePicker) => {
  const [size, setSize] = useState(0);

  const permissions = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permitir acesso a midia nesse dispositivo");
      }
    }
  };

  useEffect(() => {
    permissions();
  }, []);

  const uploadFile = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      exif: true,
      quality: 1,
      base64: false,
    });

    if (result.canceled) {
      return updateFailed;
    }

    const fileSystem = await FileSystem.readAsStringAsync(
      result.assets[0].uri,
      {
        encoding: "base64",
      }
    );

    const fileInfo: any = await FileSystem.getInfoAsync(result.assets[0].uri);

    if (!!maxSize && size + (fileInfo?.size || 0) > maxSize) {
      Toast.show({
        type: "error",
        text2: "Video/imagem com tamanho superior ao permitido.",
      });
      return updateFailed;
    }

    setSize((previus) => previus + fileInfo?.size || 0);

    const filename: string = result.assets[0].uri.split("/").pop() as string;
    const typeFile = filename.split(".")[1];
    const type = result.assets[0].type;

    const formattedFile: TFormattedFile = {
      filename: filename,
      uri: result.assets[0].uri,
      arquivo: `data:${type}/${typeFile};base64,${fileSystem}`,
      type: `${type}/${typeFile}`,
      pasta: "portaisrni",
    };

    return {
      fileSystem,
      result: result.assets[0],
      fileSize: fileInfo?.size,
      filename,
      typeFile,
      formattedFile,
    };
  };

  const removeSizeFile = async (uri?: string) => {
    if (!uri) {
      return;
    }
    const fileInfo: any = await FileSystem.getInfoAsync(uri);
    setSize((previus) => previus - fileInfo?.size);
  };

  const sizeCurrent = () => {
    if (!maxSize) {
      return;
    }
    if (size > 0 && size >= maxSize) {
      return 0;
    }
    if (size > 0 && size < maxSize) {
      return ((maxSize - size) / 1000000).toFixed(2);
    }
    return (maxSize / 1000000).toFixed(2);
  };

  return {
    uploadFile,
    sizeCurrentFile: sizeCurrent(),
    maxSize: maxSize || 0,
    removeSizeFile,
  };
};
