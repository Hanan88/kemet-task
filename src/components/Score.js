import React, { useState } from "react";

const Score = () => {
  const [score, setScore] = useState(0);
  return <div>{score}</div>;
};

export default Score;
