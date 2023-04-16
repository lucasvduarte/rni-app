import { api } from "../../../../config/axios";

import {
  TPostFeed,
  TFileAzure,
  TAttendanceView,
  TResponseSubject,
  TResponseAttendance,
  TResponseFeedTask,
} from "./type";

const URL: string = "/salesforce";

export const getAttendance = (cpfcnpj: string) => {
  return api.get<TResponseAttendance>(`${URL}/CaseTrack`, {
    params: { cpfcnpj },
  });
};

export const postAttendance = (value: any) => {
  return api.post<{
    detail: string;
    locale: string;
    message: string;
    originalMessage: { id: string; errors: any[]; success?: boolean };
    type: string;
  }>(`${URL}/case`, value);
};

export const putViewAttendance = (value: TAttendanceView) => {
  return api.put<any>(`${URL}/case`, value);
};

export const postAzure = (value: TFileAzure) => {
  return api.post<{
    msgError: string;
    result: { message: string; result: string };
  }>("/storageazure", value);
};

export const postFeed = (value: TPostFeed) => {
  return api.post<{
    detail: string;
    locale: string;
    message: string;
    originalMessage: { id: string; errors: any[]; success?: boolean };
    type: string;
  }>(`${URL}/casefeed`, value);
};

export const getFeedTask = (id: string) => {
  return api.get<TResponseFeedTask>(`${URL}/case/feedtask?`, {
    params: { id },
  });
};

export const getSubject = () => {
  return api.get<TResponseSubject>(`/subjectservice`);
};