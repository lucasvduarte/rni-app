import { RootStackParamList } from "../../../../navigation/private/types";

type TListCard = {
  title: string;
  numColuns: number;
  data: Array<{ name: string; router: keyof RootStackParamList }>;
  // icon: string;
};

export const listCard: TListCard[] = [
  {
    title: "Financeiro",
    numColuns: 1,
    data: [
      {
        name: "Passo a passo",
        router: "Step",
      },
      {
        name: "Documentos",
        router: "DocumentFinancing",
      },
      {
        name: "Dicas",
        router: "TipsFinancing",
      },
    ],
  },
  {
    title: "Meu Imóvel",
    numColuns: 2,
    data: [
      {
        name: "Andamento da Obra",
        router: "Progress",
      },
      {
        name: "Galeria de Imagens",
        router: "Gallery",
      },
      {
        name: "Fotos da Obra",
        router: "Gallery",
      },
      {
        name: "Ficha Técnica",
        router: "Datasheet",
      },
      {
        name: "Manuais e Documentos",
        router: "DocumentProperty",
      },
    ],
  },
  {
    title: "Financiamento",
    numColuns: 2,
    data: [
      {
        name: "2° via de Boleto",
        router: "DocumentProperty",
      },
      {
        name: "Extrato",
        router: "DocumentProperty",
      },
      {
        name: "Informe de pagamentos",
        router: "DocumentProperty",
      },
      {
        name: "Antecipação",
        router: "DocumentProperty",
      },
      {
        name: "Quitação",
        router: "DocumentProperty",
      },
    ],
  },
  {
    title: "Atendimento",
    numColuns: 2,
    data: [
      {
        name: "Atendimentos",
        router: "DocumentProperty",
      },
      {
        name: "Assistência Técnica",
        router: "DocumentProperty",
      },
      {
        name: "Pesquisas",
        router: "DocumentProperty",
      },
      {
        name: "Perguntas Frequentes",
        router: "DocumentProperty",
      },
      {
        name: "Manuais",
        router: "DocumentProperty",
      },
    ],
  },
  {
    title: "Serviços",
    numColuns: 2,
    data: [
      {
        name: "Indique e ganhe",
        router: "ReferAndWin",
      },
      {
        name: "Dicas",
        router: "TipsService",
      },
      {
        name: "Tendências",
        router: "Tendencies",
      },
      {
        name: "Vídeos e Tutoriais",
        router: "Video",
      },
      {
        name: "Informações de Apps",
        router: "AppInformation",
      },
    ],
  },
];
