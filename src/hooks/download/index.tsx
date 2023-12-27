import * as FileSystem from "expo-file-system";
import { shareAsync } from "expo-sharing";
import { Platform } from "react-native";
import Toast from "react-native-toast-message";

export const useDownload = () => {
  const downloadFromUrl = async () => {
    const filename = "small.mp4";
    const result = await FileSystem.downloadAsync(
      "http://techslides.com/demos/sample-videos/small.mp4",
      FileSystem.documentDirectory + filename
    );

    save(result.uri, filename, result.headers["Content-Type"]);
  };

  const downloadFromAPI = async () => {
    const filename = "MissCoding.pdf";
    const localhost = Platform.OS === "android" ? "10.0.2.2" : "127.0.0.1";
    const result = await FileSystem.downloadAsync(
      `http://${localhost}:5000/generate-pdf?name=MissCoding&email=hello@tripwiretech.com`,
      FileSystem.documentDirectory + filename,
      {
        headers: {
          MyHeader: "MyValue",
        },
      }
    );
    save(result.uri, filename, result.headers["Content-Type"]);
  };

  const save = async (uri: string, filename: string, mimetype: string) => {
    if (Platform.OS === "android") {
      const permissions =
        await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
      if (permissions.granted) {
        const base64 = await FileSystem.readAsStringAsync(uri, {
          encoding: FileSystem.EncodingType.Base64,
        });
        await FileSystem.StorageAccessFramework.createFileAsync(
          permissions.directoryUri,
          filename,
          mimetype
        )
          .then(async (uri) => {
            await FileSystem.writeAsStringAsync(uri, base64, {
              encoding: FileSystem.EncodingType.Base64,
            });
          })
          .catch((e) => {
            Toast.show({
              type: "errorToast",
              text2: e,
            });
          });
      } else {
        shareAsync(uri);
      }
    } else {
      shareAsync(uri);
    }
  };

  const share = async (filename: string, mimetype: string, base64: string) => {
    const uri =
      FileSystem.documentDirectory + `${encodeURI(filename)}.${mimetype}`;
    await FileSystem.writeAsStringAsync(uri, base64, {
      encoding: FileSystem.EncodingType.Base64,
    });
    await shareAsync(uri);
  };

  return { downloadFromUrl, downloadFromAPI, share };
};
