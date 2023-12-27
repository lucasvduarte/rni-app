import { RootStackParamList } from "../../../../navigation/private/types";
import { TItem } from "../../../../redux/modules/auth/type";

type TDataList = Array<{
  name: string;
  router: keyof RootStackParamList;
  params?: any;
  icon: string;
  disabled?: boolean;
}>;

type TListCard = {
  title: string;
  numColuns: number;
  data: TDataList;
};

const empcodBlackList = ["M363", "M212"];

export const listCard = (
  enterpriseSelect: TItem | undefined,
  itemList: TItem[] | undefined,
  cyrella?: boolean
): TListCard[] => {
  if (!enterpriseSelect) return [];

  const { EMPCOD, disabled_photos, CTR_QUITADO } = enterpriseSelect;
  const disabledMyProperty =
    empcodBlackList.includes(EMPCOD) || !!disabled_photos;

  const isDischarge = CTR_QUITADO?.toLocaleUpperCase() === "X";
  const numberEnterprise =
    itemList?.filter((item) => item.EMPCOD === EMPCOD).length ?? 0;

  const regra1 = isDischarge && numberEnterprise < 2;

  const meuImovel: TDataList = [
    {
      name: "Andamento da Obra",
      router: "Progress",
      icon: "progress-check",
      disabled: disabledMyProperty,
    },
    {
      name: "Galeria de Imagens",
      router: "Gallery",
      icon: "view-gallery",
      disabled: disabledMyProperty,
    },
    {
      name: "Fotos da Obra",
      router: "Constructions",
      icon: "camera",
      disabled: disabledMyProperty,
    },
    {
      name: "Ficha Técnica",
      router: "Datasheet",
      icon: "text-long",
      disabled: disabledMyProperty,
    },
    {
      name: "Manuais e Documentos",
      router: "DocumentProperty",
      icon: "file-document",
    },
  ].filter((item) => !item.disabled) as TDataList;

  const financiamento: TDataList = [
    {
      name: "2° via de Boleto",
      router: "CopyDocumentPaymentSlip",
      icon: "text-box",
      disabled: regra1 || cyrella,
    },
    {
      name: "Extrato",
      router: "Extract",
      icon: "file-account",
      disabled: cyrella,
    },
    {
      name: "Informe de pagamentos",
      router: "PaymentInfo",
      icon: "cash-register",
    },
    {
      name: "Antecipação",
      router: "SelectContract",
      icon: "cash-check",
      params: { navigate: "AnticipationInformation" },
      disabled: regra1 || cyrella,
    },
    {
      name: "Quitação",
      router: "SelectContract",
      icon: "file-sign",
      params: { navigate: "DischargeInformation" },
      disabled: cyrella,
    },
  ].filter((item) => !item.disabled) as TDataList;

  const list = [
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
      numColuns: meuImovel.length > 3 ? 2 : 1,
      data: meuImovel,
    },
    {
      title: "Financiamento",
      numColuns: financiamento.length > 3 ? 2 : 1,
      data: financiamento,
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

  return list as TListCard[];
};
