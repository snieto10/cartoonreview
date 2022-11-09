import React from "react";
import funny from "../assets/images/funny.jpg";
import SelectRating from "./SelectRating";
import Input from "./Input";

function FeedbackForm() {
  return (
    <div className="box" alt="A cat joke">
      <div>
        <div className="image">
          <img src={funny}></img>
        </div>
      </div>
      <SelectRating />
      <Input />
    </div>
  );
}

export default FeedbackForm;
