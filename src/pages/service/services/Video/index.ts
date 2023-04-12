import { api } from "../../../../config/axios";
import { TResponseVideos } from "./type";

const URL: string = "/infovideos";

export const getVideos = () => {
  return api.get<TResponseVideos>(URL);
};
