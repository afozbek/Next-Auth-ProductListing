import { Product, productList } from "@/db";
import { NextPageContext } from "next";
import React from "react";

type Props = {
  product: Product;
};

const ProductDetailPage = (props: Props) => {
  const { product } = props;

  console.log(product);

  return <div className="container">ProductDetailPage</div>;
};

export const getServerSideProps = async (context: NextPageContext) => {
  return {
    props: {
      product: productList.find((product) => product.id === context.query.id),
    },
  };
};

export default ProductDetailPage;
