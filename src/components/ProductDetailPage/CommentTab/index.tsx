import { Product } from "@/db";

interface Props {
  product: Product;
}

const CommentTab = (props: Props) => {
  const { product } = props;

  return (
    <div className="comments">
      <h2 className="header">
        Total Reviews ({product.totalNumberOfComments})
      </h2>
    </div>
  );
};

export default CommentTab;
