import {
  TCategory,
  TItem,
  TSection,
} from "../../../pages/attendance/service/TechnicalAssistance/type";
import { AppDispatch, GetRootState } from "../../store";
import {
  putCategory,
  putFiles,
  putSection,
  putClear,
  putListRegister,
} from "./slice";

export const clearRegisterTechnicalAssistance =
  () => async (dispatch: AppDispatch) => {
    try {
      await dispatch(putClear());

      return true;
    } catch (error) {
      return false;
    }
  };

export const setCategory =
  (category: TCategory) => async (dispatch: AppDispatch) => {
    try {
      await dispatch(putCategory(category));
      await dispatch(putSection(undefined));
      return true;
    } catch (error) {
      return false;
    }
  };

export const setSection =
  (section: TSection) => async (dispatch: AppDispatch) => {
    try {
      await dispatch(putSection(section));
      return true;
    } catch (error) {
      return false;
    }
  };

export const setItem =
  (item: TItem) => async (dispatch: AppDispatch, getState: GetRootState) => {
    try {
      const { listRegister, category, section } = getState().attendance;
      if (!category || !section) {
        return false;
      }
      await dispatch(
        putListRegister([...listRegister, { category, section, item }])
      );
      await dispatch(putCategory(undefined));
      await dispatch(putSection(undefined));
      return true;
    } catch (error) {
      return false;
    }
  };

export const setFiles = (files: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch(putFiles(files));

    return true;
  } catch (error) {
    return false;
  }
};

export const setRemoveFiles =
  (index: number) => async (dispatch: AppDispatch, getState: GetRootState) => {
    try {
      const { files } = getState().attendance;
      let fileAux = files.splice(index, 1);
      dispatch(putFiles(fileAux));

      return true;
    } catch (error) {
      return false;
    }
  };
