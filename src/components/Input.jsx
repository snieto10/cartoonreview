import React from "react";

function Input() {
  return (
    <>
      <form typeof="submit">
        <div className="box-input">
          <input
            className="input"
            type="text"
            placeholder="Enter you feedback"
          ></input>{" "}
          <button className="btn">SUBMIT</button>
        </div>
      </form>
    </>
  );
}

export default Input;
