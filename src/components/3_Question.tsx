import { useState } from "react";
import { Confirmation } from "./2_Confirmation";

/*
  The Question component should render the question, and a "Show answer" button.

  When clicked, the Show Answer button should result in the Confirmation being rendered,
  which should ask the user if they want to reveal the answer.

  The answer should only be revealed if "accept" is clicked.
  If "decline" is clicked, the Question component should go back to the initial state.
*/

interface Props {
  question: string;
  answer: string;
  num: number;
  showAllAnswers: boolean;
}

export function Question({ question, answer, num, showAllAnswers }: Props) {
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);


  const accept = () => {
    setShowAnswer(true);
  };

  const decline = () => {
    setIsConfirmationVisible(false);
  }

  const handleShowAnswer = () => {
    setIsConfirmationVisible(true);
  }


  return (
    <section className="section">

      <h3 className="question-title">{num + 1 + ")"} {question}</h3>
      <p className="bold">
        {
          showAllAnswers ? answer : showAnswer && answer
        }
      </p>
      {
        isConfirmationVisible && <Confirmation message={"Do you want to show answer ?"} accept={accept} decline={decline} />
      }
      <button className="btn" onClick={handleShowAnswer} disabled={isConfirmationVisible || showAllAnswers}>Show answer</button>

    </section>
  )
}
