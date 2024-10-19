import { useProductList } from "@/context/useProductList";
import { Comment } from "@/types";
import { Rating } from "@mui/material";
import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

interface Props {
  productId: string;
}

const AddNewComment = (props: Props) => {
  const [rating, setRating] = React.useState<number | null>(null);
  const [comment, setComment] = React.useState("");
  const { productList, handleChangeProductList } = useProductList();

  const { productId } = props;

  const handleCommentToProduct = () => {
    // more validation can be added
    if (!rating || !comment) {
      return;
    }

    const newComment: Comment = {
      commentMessage: comment,
      rating: rating ?? 0,
      id: Math.random().toString(),
      username: "Anonymous", // change username
    };

    // find the product
    const newUpdatedProductList = productList.map((product) => {
      // update the product
      if (product.id === productId) {
        return {
          ...product,
          comments: [...product.comments, newComment],
        };
      }

      return product;
    });

    // update the product list
    handleChangeProductList(newUpdatedProductList);

    setComment("");
    setRating(null);
  };

  return (
    <div className="add-new-comment">
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
        size="medium"
      />

      <FloatingLabel
        controlId="floatingTextarea"
        label="Your Comment"
        className="mb-3"
      >
        <Form.Control
          onChange={(e) => {
            setComment(e.target.value);
          }}
          value={comment}
          as="textarea"
          placeholder="Leave a comment here"
        />
      </FloatingLabel>

      <Button type="submit" variant="primary" onClick={handleCommentToProduct}>
        Yorum Yap
      </Button>
    </div>
  );
};

export default AddNewComment;
