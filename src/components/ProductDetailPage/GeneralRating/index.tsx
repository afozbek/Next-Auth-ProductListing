import { Rating } from "@mui/material";
import React from "react";

interface Props {
  rating: number;
}

const GeneralRating = (props: Props) => {
  return (
    <div className="general-rating">
      <Rating
        name="simple-controlled"
        value={props.rating}
        readOnly
        precision={0.5}
        size="medium"
      />
      <div className="count">{props.rating}</div>
      <p className="info-message">(Ortalama Puan)</p>
    </div>
  );
};

export default GeneralRating;
