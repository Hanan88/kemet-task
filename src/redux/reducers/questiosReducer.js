// const questions = { Data: { questions: 10 } };
const questions = {
  Data: [
    {
      id: 1,
      question: "Lorem1",
      correct_answer: "ans1",
      incorrect_answer: ["ans1-2", "ans1-3", "ans1-4"],
    },
    {
      id: 2,
      question: "Lorem2",
      correct_answer: "ans2",
      incorrect_answer: ["ans2-2", "ans2-3", "ans2-4"],
    },
    {
      id: 3,
      question: "Lorem3",
      correct_answer: "ans3",
      incorrect_answer: ["ans3-2", "ans3-3", "ans3-4"],
    },
    {
      id: 4,
      question: "Lorem4",
      correct_answer: "ans4",
      incorrect_answer: ["ans4-2", "ans4-3", "ans4-4"],
    },
    {
      id: 5,
      question: "Lorem5",
      correct_answer: "ans5",
      incorrect_answer: ["ans5-2", "ans5-3", "ans5-4"],
    },
  ],
};

const questionsReducer = (state = questions.Data, action) => {
  return state;
};

export default questionsReducer;
