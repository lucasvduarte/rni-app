type TFilter = {
  Cpf: string | number;
  Titulo: string;
};

export interface TParams {
  modelo: { nome: string };
  filtros: TFilter[];
}
