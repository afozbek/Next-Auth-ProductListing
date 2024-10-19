import { Product } from "@/db";
import { getFormattedDateMM_DD_YYYY } from "@/utils";
import React from "react";
import GeneralRating from "../GeneralRating";

interface Props {
  product: Product;
  handleOpenCommentTab: () => void;
}

const InfoTab = (props: Props) => {
  const { product, handleOpenCommentTab } = props;

  return (
    <div className="info">
      <h2 className="name">{product.productName}</h2>

      <GeneralRating rating={product.rating} />

      <span className="price">
        {product.price}
        {product.currencySymbol}
      </span>
      <span className="date">
        Product Arrived at:{" "}
        {getFormattedDateMM_DD_YYYY(product.productArrivalDate)}
      </span>
    </div>
  );
};

export default InfoTab;
