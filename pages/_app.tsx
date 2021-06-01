import type { AppProps } from "next/app";
import { Footer } from "../components/common/template/Footer";
import { NavigationBar } from "../components/common/template/NavigationBar";

import "bootstrap/dist/css/bootstrap.min.css";
import { Holderjs } from "../components/common/Holder";

export default ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Holderjs></Holderjs>
      <NavigationBar></NavigationBar>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
};
