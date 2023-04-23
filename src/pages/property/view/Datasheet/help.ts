import { Dimensions } from "react-native";
import { TDatasheet } from "../../services/Datasheet/type";
const { width } = Dimensions.get("window");

export const formatDatasheet = (data?: TDatasheet) => {
  if (!data) {
    return [];
  }

  const list = [
    { title: "Dormitorios: ", value: data?.tipologia, id: 1 },
    { title: "Área privativa: ", value: data?.area_privativa, id: 2 },
    { title: "Número de unidades: ", value: data?.numero_unidades, id: 3 },
    { title: "Número de vagas: ", value: data?.numero_vagas, id: 4 },
    { title: "Projeto: ", value: data?.projeto_arquitetonico, id: 5 },
    { title: "Construção: ", value: data?.construcao, id: 6 },
    { title: "Incorporação: ", value: data?.incorporacao, id: 7 },
    {
      title: "Registro de incorporação: ",
      value: data?.registro_incorporacao,
      id: 8,
    },
  ];
  return list.filter((item) => {
    return !!item.value;
  });
};

export const infoHtml = (value?: TDatasheet) => {
  if (!value) {
    return "<div><div>";
  }
  let fontSize: string = `<div style="font-size:${
    width > 700 ? 24 : 50
  }px; color:#838383"; font-family:Roboto>`;

  if (value.informacoes_adicionais) {
    fontSize += value.informacoes_adicionais
      .replace(/\n/g, "<br/>")
      .replace(/:\*\*/g, ":</b>")
      .replace(/: \*\*/g, ":</b>")
      .replace(/\*\*:/g, ":</b>")
      .replace(/\*\*/g, "<b>");
  }
  return fontSize + "</div>";
};
