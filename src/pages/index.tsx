import { routeUrls } from "@/utils/constants";
import { redirect } from "next/dist/server/api-utils";
import React from "react";

const index = () => {
  return <div>index</div>;
};

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: routeUrls.productListing,
    },
  };
};

export default index;
