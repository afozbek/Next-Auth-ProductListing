import CommentTab from "@/components/ProductDetailPage/CommentTab";
import InfoTab from "@/components/ProductDetailPage/InfoTab";
import ProductDetailTabs, {
  TabType,
} from "@/components/ProductDetailPage/ProductDetailTabs";
import { Product, productList } from "@/db";
import { NextPageContext } from "next";
import Image from "next/image";
import React from "react";

type Props = {
  product: Product;
};

const ProductDetailPage = (props: Props) => {
  const { product } = props;

  const [activeTab, setActiveTab] = React.useState<TabType>(TabType.info);

  console.log(product);

  const handleOpenCommentTab = () => {
    setActiveTab(TabType.comments);
  };

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="image-slider">
          <Image
            src={product.productImageUrl}
            alt="product"
            width={720}
            height={500}
          />
        </div>

        <div className="tab-container">
          <ProductDetailTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {activeTab === TabType.info ? (
            <InfoTab
              product={product}
              handleOpenCommentTab={handleOpenCommentTab}
            />
          ) : (
            <CommentTab product={product} />
          )}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  return {
    props: {
      product: productList.find((product) => product.id === context.query.id),
    },
  };
};

export default ProductDetailPage;
