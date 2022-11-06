import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
const Questions = () => {
  const questionsData = useSelector((state) => state);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showFinsh, setShowFinsh] = useState(false);
  const [Question, setQuestion] = useState(questionsData[currentQuestion]);

  const Style = {
    box: {
      width: "50%",
      textAlign: "left",
      margin: "0 auto",
      padding: "15px",
      boxSizing: "border-box",
      border: "1px solid #ddd",
      boxShadow: "2px 2px 8px 0px #ddd",
      borderRadius: " 15px",
    },
  };
  // const randomQestion = questionsData
  //   .sort(() => Math.random() - Math.random())
  //   .find(() => true);

  const getRandomAnswer = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const answers = [...Question.incorrect_answer];
  answers.splice(
    getRandomAnswer(Question.incorrect_answer.length),
    0,
    Question.correct_answer
  );

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionsData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowFinsh(true);
    }
  };
  return (
    <>
      <div key={Question.id} style={Style.box}>
        <h2>
          Q{Question.id} - {Question.question}
        </h2>
        <div>
          {answers.map((answer, index) => (
            <Button key={index}>{answer}</Button>
          ))}
        </div>
      </div>
      <Button onClick={handleNextQuestion}>Next</Button>
      {showFinsh === true && <Button>Finish</Button>}
    </>
  );
};

export default Questions;
