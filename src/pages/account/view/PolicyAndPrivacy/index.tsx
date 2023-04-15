import { WebViewPage } from "../../../../components";

const uri = "https://portal-do-cliente.rni.com.br/politicaprivacidade.htm";

export const PolicyAndPrivacy = () => {
  return (
    <WebViewPage
      source={{
        uri,
      }}
    />
  );
};
