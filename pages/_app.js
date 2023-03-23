import "@/styles/globals.scss";
import { Provider } from "react-redux";
import store from "@/redux/store";
import setLang from "@/redux/actions/Lang/setLang.js";

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

App.getInitialProps = async ({ ctx }) => {
  const { req } = ctx;
  const lang = req ? req.headers["z-lang"] : "en";
  setLang(lang);

  return { lang };
};

export default App;
