import { formatCurrency, formatDateCurrent } from "../../../../../config/utils";
import { TRodape } from "../../../services/Financial/type";

export const formatData = (value?: TRodape) => {
  if (!value) {
    return [];
  }

  const date = formatDateCurrent();

  const list = [
    {
      title: `Saldo em atraso até ${date}`,
      description: formatCurrency(value?.TOT_ATRASO),
    },
    {
      title: `Saldo a vencer até ${date}`,
      description: formatCurrency(value?.VLR_PRES),
    },
    {
      title: "Total devido para quitação",
      description: formatCurrency(value?.SLD_DEVEDOR),
    },
    {
      title: "Total taxas pago",
      description: formatCurrency(value?.AUX2),
    },
    {
      title: "Total Honorário pago",
      description: formatCurrency(value?.AUX1),
    },
    {
      title: `Total pago até ${date}`,
      description: formatCurrency(value?.TOT_PAGO),
    },
  ];

  return list;
};
