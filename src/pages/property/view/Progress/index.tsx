import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { WebViewPage } from "../../../../components";

export const Progress = () => {
  const { enterpriseSelect } = useAppSelector((state: RootState) => {
    return state.auth;
  });

  return (
    <WebViewPage
      source={{
        uri: `https://rni.com.br/imoveis/progresso/${enterpriseSelect?.EMPCOD}`,
      }}
    />
  );
};
