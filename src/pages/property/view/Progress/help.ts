import { TProgress } from "../../services/Progress/type";

export const formatProgress = (data?: TProgress) => {
  if (!data) {
    return [];
  }
  return [
    { title: "Instalação", value: data.instalacoes },
    { title: "Infraestrutura", value: data.infraestrutura },
    { title: "Paredes", value: data.estrutura_paredes },
    { title: "Cobertura", value: data.cobertura },
    { title: "Sinalização viária", value: data.sinalizacao_viaria },
    { title: "Drenagem", value: data.drenagem },
    { title: "Paisagismo", value: data.paisagismo },
    { title: "Iluminação", value: data.iluminacao },
    { title: "Fundação", value: data.fundacao },
    { title: "Esquadrias", value: data.esquadrias },
    { title: "Terraplanagem", value: data.terraplanagem },
    { title: "Área de lazer", value: data.areas_lazer },
    { title: "Acabamento", value: data.pintura_acabamento },
    { title: "Guias e sargetas", value: data.guias_sarjetas },
    { title: "Fachada", value: data.fachada },
    { title: "Hidráulica", value: data.hidraulica },
  ];
};
