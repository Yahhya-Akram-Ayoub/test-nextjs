import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: {
    lang: null,
  },
  reducers: {
    getDefault: () => {
      state.lang = "en";
    },
    setLang: (lang) => {
      state.lang = lang;
    },
  },
});

export const { getDefault, setLang } = langSlice.actions;

export default langSlice.reducer;
