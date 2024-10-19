import CommentTab from "@/components/ProductDetailPage/CommentTab";
import InfoTab from "@/components/ProductDetailPage/InfoTab";
import ProductDetailTabs, {
  TabType,
} from "@/components/ProductDetailPage/ProductDetailTabs";
import { useProductList } from "@/context/useProductList";
import { routeUrls } from "@/utils/constants";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

const ProductDetailPage = () => {
  const { productList } = useProductList();
  const router = useRouter();

  const [activeTab, setActiveTab] = React.useState<TabType>(TabType.info);

  const handleOpenCommentTab = () => {
    setActiveTab(TabType.comments);
  };

  // since there is no API to update and fetch these product items, I do it inside useEffect
  // otherwise I wanted to use getServersideProps to fetch these on the server side
  const product = useMemo(() => {
    return productList.find((product) => product.id === router.query.id);
  }, [productList]);

  if (!product) {
    return;
  }

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

export default ProductDetailPage;
