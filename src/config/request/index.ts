export const requestFields = <T extends object>(fields: T) => {
  return {
    device: "Aplicativo",
    ip: "",
    userauth: "rni.portaldocliente@gmail.com",
    fields,
  };
};
