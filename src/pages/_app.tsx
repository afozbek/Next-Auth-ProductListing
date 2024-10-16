import Layout from "@/layout/Layout";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default MyApp;
