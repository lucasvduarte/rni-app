import { TDataDocument } from "../../services/Document/type";

export const formateLisDocument = (value?: TDataDocument) => {
  if (!value) {
    return [];
  }

  const list: string[] = [
    "CONTRATO DE COMPRA E VENDA",
    "MEMORIAL DESCRITIVO",
    "PLANTA DA UNIDADE",
    "MANUAL DO PROPRIETÁRIO",
    "MANUAL DO PROPRIETARIO",
    "MANUAL DO CONDOMÍNIO",
    "MANUAL DO CONDOMINIO",
    "DOCUMENTAÇÃO COMPLETA",
    "DOCUMENTACAO COMPLETA",
    "",
  ];

  const documents = value.data[0].pastas.filter((item) => {
    return (
      item.arquivos.length &&
      list.includes(item.vc_descricao.toLocaleUpperCase())
    );
  });

  const salePurchaseContract = documents.filter((item) => {
    const isDoc: boolean =
      item.vc_descricao.toLocaleUpperCase() === "DOCUMENTAÇÃO COMPLETA" ||
      item.vc_descricao.toLocaleUpperCase() === "DOCUMENTACAO COMPLETA";
    return isDoc;
  });

  return salePurchaseContract.length ? salePurchaseContract : documents;
};
