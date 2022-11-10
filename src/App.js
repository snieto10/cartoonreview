import React from "react";
import "./App.css";
import FeedbackForm from "./components/FeedbackForm";
import Header from "./components/Header";
import Feedback from "./components/Feedback";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <Feedback />
      </div>
    </>
  );
}

export default App;
