import {
  formatCnpj,
  formatCpf,
  formatCurrency,
} from "../../../../config/utils";
import { TItem, TUser } from "../../../../redux/modules/auth/type";
import { TPaymentInfo } from "../../services/Financial/type";

export const formatDataList = (
  user: TUser | undefined,
  enterpriseSelect: TItem | undefined,
  paymentInfo: TPaymentInfo | undefined
) => {
  const list = [
    { title: "Nome completo", description: user?.cliente.nome },
    { title: "CPF", description: formatCpf(user?.cliente.cpfcnpj) },
    { title: "Empreendimento", description: enterpriseSelect?.EMPDESCOM },
    {
      title: "CNPJ",
      description: formatCnpj(paymentInfo?.IT_CABECALHO?.item[0]?.EMP_CNPJ),
    },
    {
      title: "Razão Social",
      description: paymentInfo?.IT_CABECALHO?.item[0]?.AUX1 || "",
    },
    {
      title: "Valor total pago no ano de 2022",
      description: formatCurrency(paymentInfo?.IT_SAIDA?.item[0]?.TOTAL),
    },
  ];

  return list;
};
