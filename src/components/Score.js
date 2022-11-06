import React, { useState } from "react";

const Score = () => {
  const [score, setScore] = useState(0);
  return <div>Your Score: {score} / 5</div>;
};

export default Score;
