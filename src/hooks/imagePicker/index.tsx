import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { Platform, Alert } from "react-native";
import { useCallback, useEffect } from "react";

type TUseImagePicker = {
  maxSize?: number;
};

export const useImagePicker = ({ maxSize }: TUseImagePicker) => {
  const permissions = useCallback(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Desculpe, precisamos de permissões da câmera para funcionar"
          );
        }
      }
    })();
  }, []);

  useEffect(() => {
    permissions();
  }, []);

  const uploadFile = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      base64: true,
    });

    if (result.canceled) {
      return { fileSystem: undefined, result: undefined };
    }

    const fileSystem = await FileSystem.readAsStringAsync(
      result.assets[0].uri,
      {
        encoding: "base64",
      }
    );

    return { fileSystem, result: result.assets[0] };
  };

  const sizeFile = (value: number) => {
    if (!maxSize) {
      return;
    }
    if (value > 0 && value >= maxSize) {
      return 0;
    }
    if (value > 0 && value < maxSize) {
      return ((maxSize - value) / 1000000).toFixed(2);
    }
    return (maxSize / 1000000).toFixed(2);
  };

  return { uploadFile, sizeFile };
};
