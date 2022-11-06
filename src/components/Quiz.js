import React from "react";
import { useLocation } from "react-router-dom";
import Questions from "./Questions";
import Score from "./Score";

const Quiz = () => {
  const { state } = useLocation();
  
  return (
    <div>
      <h1>Welcome {state}</h1>
      <Questions />
      <Score />
    </div>
  );
};

export default Quiz;
