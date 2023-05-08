import { RootStackParamList } from "../../../../navigation/private/types";

type TListCard = {
  title: string;
  numColuns: number;
  data: Array<{
    name: string;
    router: keyof RootStackParamList;
    icon: string;
    disabled?: boolean;
  }>;
};

export const listCard: TListCard[] = [
  {
    title: "Financeiro",
    numColuns: 1,
    data: [
      {
        name: "Passo a passo",
        router: "Step",
        icon: "clipboard-list",
      },
      {
        name: "Documentos",
        router: "DocumentFinancing",
        icon: "file-document",
      },
      {
        name: "Dicas",
        router: "TipsFinancing",
        icon: "lightbulb-on",
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
        icon: "progress-check",
      },
      {
        name: "Galeria de Imagens",
        router: "Gallery",
        icon: "view-gallery",
      },
      {
        name: "Fotos da Obra",
        router: "Constructions",
        icon: "camera",
      },
      {
        name: "Ficha Técnica",
        router: "Datasheet",
        icon: "text-long",
      },
      {
        name: "Manuais e Documentos",
        router: "DocumentProperty",
        icon: "file-document",
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
        icon: "text-box",
      },
      {
        name: "Extrato",
        router: "Extract",
        icon: "file-account",
      },
      {
        name: "Informe de pagamentos",
        router: "PaymentInfo",
        icon: "cash-register",
      },
      {
        name: "Antecipação",
        router: "DocumentProperty",
        icon: "cash-check",
      },
      {
        name: "Quitação",
        router: "DocumentProperty",
        icon: "file-sign",
      },
    ],
  },
  {
    title: "Atendimento",
    numColuns: 2,
    data: [
      {
        name: "Atendimentos",
        router: "Attendance",
        icon: "face-agent",
      },
      {
        name: "Assistência Técnica",
        router: "TechnicalAssistance",
        icon: "account-wrench",
      },
      {
        name: "Pesquisas",
        router: "Search",
        icon: "feature-search",
      },
      {
        name: "Perguntas Frequentes",
        router: "CommonQuestions",
        icon: "frequently-asked-questions",
      },
      {
        name: "Manuais",
        router: "DocumentAttendance",
        icon: "book-open-variant",
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
        icon: "emoticon-wink",
      },
      {
        name: "Blog",
        router: "BlogRni",
        icon: "post",
      },
      {
        name: "Vídeos e Tutoriais",
        router: "Video",
        icon: "cast-education",
      },
      {
        name: "Informações de Apps",
        router: "AppInformation",
        icon: "apps",
        disabled: true,
      },
    ],
  },
];
