import { QuestionList } from "./components/4_QuestionList";

export const questions = [
  {
    id: 0,
    question: "What are the first 10 digits of PI?",
    answer: "3.141592653"
  },
  {
    id: 1,
    question:
      "What is the average the airspeed velocity of a (European) unladen swallow?",
    answer: "11 meters per second"
  },
  {
    id: 2,
    question: "What is the answer to life the universe and everything?",
    answer: "42"
  }
];

export default function App() {

  return (
    <div className="app">
      <div className="forsta-logo" />
      <QuestionList questions={questions} />
    </div>
  );
}
