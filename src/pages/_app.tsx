import { ProductContextProvider } from "@/context/useProductList";
import Layout from "@/layout/Layout";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  return (
    <ProductContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductContextProvider>
  );
};

export default MyApp;
