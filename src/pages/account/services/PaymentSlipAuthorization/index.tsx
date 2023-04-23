import { api } from "../../../../config/axios";
import { requestFields } from "../../../../config/request";

const URL: string = "/barramentowso2";

export const putPaymentSlipAuthorization = (
  I_CNPJ_CPF: string,
  I_ENVBOL: string
) => {
  return api.post<{ result: any; msgError?: string }>(
    `${URL}/alteraboletodigital`,
    requestFields({ INPUT: [{ I_CNPJ_CPF, I_ENVBOL }] })
  );
};
