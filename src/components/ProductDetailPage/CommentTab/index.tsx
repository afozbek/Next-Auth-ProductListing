import { Comment, Product } from "@/db";
import { Rating } from "@mui/material";
import GeneralRating from "../GeneralRating";
import AddNewComment from "../AddNewComment";

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

      <AddNewComment productId={product.id} />

      <GeneralRating rating={product.rating} />

      <div className="list">
        {product.comments.map((comment: Comment) => (
          <div key={comment.id} className="comment">
            <Rating
              name={comment.id}
              value={comment.rating}
              readOnly
              size="small"
            />
            <div className="comment-text">{comment.commentMessage}</div>
            <div className="user">{comment.username}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentTab;
