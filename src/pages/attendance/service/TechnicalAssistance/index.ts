import { api } from "../../../../config/axios";
import {
  TResponseCategory,
  TResponseItem,
  TResponseSection,
  TSchedulingResponse,
} from "./type";

const URL = "/Salesforce/caseassistance";

export const postComplete = (value: any) => {
  return api.post(`${URL}/complete`, value);
};

export const getScheduling = (id: string) => {
  return api.get<TSchedulingResponse>(`${URL}/scheduling/${id}`);
};

export const postScheduling = (id: string, value: any) => {
  return api.post(`${URL}/scheduling/${id}`, value);
};

export const getCategory = () => {
  return api.get<TResponseCategory>(`/assistancecategory`);
};

export const getItem = () => {
  return api.get<TResponseItem>(`/assistanceitem`);
};

export const getItemFilter = (assistenciasecaoid: number) => {
  return api.get<TResponseItem>(`/assistanceitem/filters`, {
    params: { active: true, assistenciasecaoid },
  });
};

export const getSectionFilter = (assistenciacategoriaid: number) => {
  return api.get<TResponseSection>(`/assistancesection/filters`, {
    params: { active: true, assistenciacategoriaid },
  });
};

export const postSatisfaction = (id: string, value: any) => {
  return api.post(`${URL}/satisfactionsurvey/${id}`, value);
};
