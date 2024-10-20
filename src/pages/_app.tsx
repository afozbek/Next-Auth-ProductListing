import { ProductContextProvider } from "@/context/useProductList";
import { UserContextProvider } from "@/context/userContext";
import Layout from "@/layout/Layout";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  return (
    <ProductContextProvider>
      <UserContextProvider>
        <SessionProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </UserContextProvider>
    </ProductContextProvider>
  );
};

export default MyApp;
