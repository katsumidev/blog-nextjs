import GlobalStyle from "../styles/global";
import Header from "../components/Header";
import "../styles/dracula.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
