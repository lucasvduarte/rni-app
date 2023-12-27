import { TListValues } from "../../../../../components/Select/type";
import { TQuestions } from "../../../service/Search/type";

export const Segment: TListValues[] = [
  { title: "0", value: "0" },
  { title: "1", value: "1" },
  { title: "2", value: "2" },
  { title: "3", value: "3" },
  { title: "4", value: "4" },
  { title: "5", value: "5" },
  { title: "6", value: "6" },
  { title: "7", value: "7" },
  { title: "8", value: "8" },
  { title: "9", value: "9" },
  { title: "10", value: "10" },
];

export const YesNo: TListValues[] = [
  { title: "Sim", value: "sim" },
  { title: "Não", value: "nao" },
];

export const formatList = (listQuestions: TQuestions[]) => {
  const list = listQuestions.map((item: TQuestions) => {
    let answer = item.tiporesposta === "SimNao" ? "sim" : "0";
    answer = item.tiporesposta === "Texto" ? "" : answer;
    return { pesquisaperguntasguid: "", resposta: "" };
  }, []);

  return list;
};
