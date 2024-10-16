import { Product } from "@/db";
import { routeUrls } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  product: Product;
};
const ProductCard = (props: Props) => {
  const { product } = props;
  return (
    <Link href={routeUrls.product.index(product.id)} className="product-card">
      <div key={product.id}>
        <div className="header">
          <Image
            width={200}
            height={150}
            alt="product"
            src={product.productImageUrl}
          />
        </div>
        <div className="info">
          <div className="name">{product.productName}</div>
          <div className="rating">
            {product.rating} ({product.totalNumberOfComments})
          </div>
          <span className="price">{product.price}</span>
          <span className="rating"></span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
