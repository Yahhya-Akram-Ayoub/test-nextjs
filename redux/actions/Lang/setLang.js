import { setLang as setLangState } from "../../slices/LangSlice";

const setLang =
  (lang = "en") =>
  async (dispatch) => {
    dispatch(setLangState(lang));
  };

export default setLang;
