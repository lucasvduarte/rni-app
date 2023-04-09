import { api } from "../../../config/axios";
import { TResponseUser } from "./type";

const CLIENT_ID = "a5f5b7c3-c842-4190-89c2-be287d67e548";
const CLIENT_SECRET = "fad6c34d-1187-4c6a-a3b3-586fd1d25377";

const URL: string = "/clients";

export const getUser = async (user: any) => {
  delete user.remember;
  const response = api.get<Promise<TResponseUser>>(`${URL}/validlogin`, {
    headers: { ...user },
  });
  return (await response).data;
};

export const getToken = async () => {
  const { data } = await api.get<{ token: string }>("auth", {
    headers: { clientid: CLIENT_ID, clientsecret: CLIENT_SECRET },
  });
  return data;
};
