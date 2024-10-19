import { ProductContextProvider } from "@/context/useProductList";
import { UserContextProvider } from "@/context/userContext";
import Layout from "@/layout/Layout";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  return (
    <ProductContextProvider>
      <UserContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContextProvider>
    </ProductContextProvider>
  );
};

export default MyApp;
