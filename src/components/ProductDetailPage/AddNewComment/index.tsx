import { Comment } from "@/db";
import { Rating } from "@mui/material";
import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

interface Props {
  productId: string;
}

const AddNewComment = (props: Props) => {
  const [rating, setRating] = React.useState<number | null>(null);
  const [comment, setComment] = React.useState("");

  const handleCommentToProduct = () => {
    // todo: validation here

    // current user
    const newComment: Comment = {
      commentMessage: comment,
      rating: rating ?? 0,
      id: Math.random().toString(),
      username: "Anonymous",
    };
  };

  return (
    <div className="add-new-comment">
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
        precision={0.5}
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

      <Button variant="primary" onClick={handleCommentToProduct}>
        Yorum Yap
      </Button>
    </div>
  );
};

export default AddNewComment;
