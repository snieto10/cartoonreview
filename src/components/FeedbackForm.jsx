import React from "react";
import funny from "../assets/images/funny.jpg";
import SelectRating from "./SelectRating";

function FeedbackForm() {
  return (
    <div className="box" alt="A cat joke">
      <div>
        <div className="image">
          <img src={funny}></img>
        </div>
      </div>
      <SelectRating />
      <h1>FeedbackForm</h1>
    </div>
  );
}

export default FeedbackForm;
