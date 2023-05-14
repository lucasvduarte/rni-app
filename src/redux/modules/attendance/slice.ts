import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { TListRegister, TTechnicalAssistance } from "./type";
import {
  TCategory,
  TSection,
} from "../../../pages/attendance/service/TechnicalAssistance/type";

export const initialState: TTechnicalAssistance = {
  category: undefined,
  section: undefined,
  listRegister: [],
  files: [],
};

const putCategorySlice = (
  state: Draft<TTechnicalAssistance>,
  action: PayloadAction<TCategory | undefined>
) => {
  state.category = action.payload;
};

const putSectionSlice = (
  state: Draft<TTechnicalAssistance>,
  action: PayloadAction<TSection | undefined>
) => {
  state.section = action.payload;
};

const putFilesSlice = (
  state: Draft<TTechnicalAssistance>,
  action: PayloadAction<any>
) => {
  state.files = action.payload;
};

const putListRegisterSlice = (
  state: Draft<TTechnicalAssistance>,
  action: PayloadAction<TListRegister[]>
) => {
  state.listRegister = action.payload;
};

const putClearSlice = (state: Draft<TTechnicalAssistance>) => {
  state.category = undefined;
  state.section = undefined;
  state.listRegister = [];
  state.files = [];
};

export const slice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    putCategory: putCategorySlice,
    putSection: putSectionSlice,
    putFiles: putFilesSlice,
    putListRegister: putListRegisterSlice,
    putClear: putClearSlice,
  },
});

export const { putCategory, putFiles, putSection, putClear, putListRegister } =
  slice.actions;
export default slice.reducer;
