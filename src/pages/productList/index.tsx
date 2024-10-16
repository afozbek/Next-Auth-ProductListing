import ProductCard from "@/components/ProductCard";
import { productList } from "@/db";

type Props = {
  products: typeof productList;
};

const ProductListPage = (props: Props) => {
  return (
    <div className="product-list-page">
      <div className="container">
        {props.products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {
      products: productList,
    },
  };
};

export default ProductListPage;
