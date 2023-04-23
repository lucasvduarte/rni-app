import Toast from "react-native-toast-message";
import { useQuery } from "react-query";
import { Skeleton, WebViewPage } from "../../../../components";
import { DocumentDetailsPropertyProps } from "../../../../navigation/private/types";
import { getLinkDocument } from "../../services/Document";
import { useState } from "react";

export const DocumentDetailsProperty = ({
  route,
  navigation,
}: DocumentDetailsPropertyProps) => {
  const { data } = route.params;
  const [uri, setUri] = useState("");

  const { isLoading } = useQuery({
    queryKey: "getLinkDocument",
    queryFn: () =>
      getLinkDocument(
        data.arquivos.length > 0
          ? data.arquivos[data.arquivos.length - 1].it_arquivo
          : data.sr_id
      ),
    onError: (error) => {
      Toast.show({
        type: "error",
        props: { error },
      });
    },
    onSuccess: (data) => {
      setUri(data.data.link);
      setTimeout(() => {
        navigation.goBack();
      }, 600);
    },
  });

  if (!uri || isLoading) {
    return <Skeleton height={200} m="xl" borderRadius="2lg" />;
  }

  return (
    <WebViewPage
      source={{
        uri,
      }}
    />
  );
};
